import fs from 'fs';
import path from 'path';
import NewsCard from '@/components/NewsCard';
import CategoryTabs from '@/components/CategoryTabs';
import { TrendingUp, Sparkles } from 'lucide-react';

async function getNews() {
    const filePath = path.join(process.cwd(), 'public', 'data', 'news.json');
    if (!fs.existsSync(filePath)) return { items: [], updatedAt: null };
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

export default async function HomePage() {
    const { items, updatedAt } = await getNews();
    const lastUpdated = updatedAt ? new Date(updatedAt).toLocaleString() : 'Never';

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <section className="pt-10 pb-6 text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" /> Direct News Aggregator
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
                    Latest Stories from <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Nepal&apos;s Top Sources</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Aggregated in real-time from over 20+ trusted publications. Stay informed with politics, business, and more.
                </p>
            </section>

            <CategoryTabs />

            <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center gap-2 text-sm font-bold">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span>Latest Updates</span>
                </div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
                    Last Updated: {lastUpdated}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.length > 0 ? (
                    items.map((item: any) => (
                        <NewsCard key={item.id} item={item} />
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center glass rounded-2xl">
                        <p className="text-muted-foreground">Fething news stories... Please refresh in a moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
