import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';
import { FEEDS } from './feeds.mjs';
import { cleanSnippet, generateId } from './utils.mjs';

const parser = new Parser({
    customFields: {
        item: [
            ['media:content', 'mediaContent'],
            ['enclosure', 'enclosure'],
            ['content:encoded', 'contentEncoded'],
        ],
    },
});

async function fetchFeed(feed) {
    try {
        const response = await parser.parseURL(feed.url);
        return response.items.map(item => ({
            id: generateId(item.title + item.link),
            title: item.title,
            link: item.link,
            source: feed.source,
            category: feed.category,
            publishedAt: item.pubDate || item.isoDate,
            image: item.mediaContent?.$?.url || item.enclosure?.url || extractImage(item),
            snippet: cleanSnippet(item.contentSnippet || item.content || item.description || ''),
        }));
    } catch (error) {
        console.error(`Error fetching ${feed.source}:`, error.message);
        return [];
    }
}

function extractImage(item) {
    const content = item.contentEncoded || item.content || item.description || '';
    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
    return imgMatch ? imgMatch[1] : null;
}

async function main() {
    console.log('Fetching news...');
    let allItems = [];

    for (const feed of FEEDS) {
        console.log(`Fetching ${feed.source} (${feed.category})...`);
        const items = await fetchFeed(feed);
        allItems = [...allItems, ...items];
    }

    // Deduplicate
    const seen = new Set();
    const uniqueItems = allItems.filter(item => {
        if (seen.has(item.id)) return false;
        seen.add(item.id);
        return true;
    });

    // Sort by date
    uniqueItems.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    // Limit to 300 items
    const finalItems = uniqueItems.slice(0, 300);

    const output = {
        updatedAt: new Date().toISOString(),
        items: finalItems,
    };

    const dataDir = path.join(process.cwd(), 'public', 'data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    fs.writeFileSync(
        path.join(dataDir, 'news.json'),
        JSON.stringify(output, null, 2)
    );

    console.log(`Successfully updated news.json with ${finalItems.length} items.`);
}

main();
