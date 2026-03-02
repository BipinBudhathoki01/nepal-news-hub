import { createHash } from 'crypto';

export function cleanSnippet(text) {
    if (!text) return '';
    // Remove HTML tags
    let cleaned = text.replace(/<[^>]*>?/gm, '');
    // Replace multiple spaces/newlines
    cleaned = cleaned.replace(/\s+/g, ' ').trim();
    // Limit to 160 chars
    if (cleaned.length > 160) {
        cleaned = cleaned.substring(0, 157) + '...';
    }
    return cleaned;
}

export function generateId(string) {
    return createHash('sha1').update(string).digest('hex');
}
