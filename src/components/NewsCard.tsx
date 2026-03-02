'use client';

import { ExternalLink, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export default function NewsCard({ item }: { item: any }) {
    const publishedTime = item.publishedAt ? formatDistanceToNow(new Date(item.publishedAt), { addSuffix: true }) : 'Recently';

    return (
        <article className="glass-card flex flex-col h-full group">
            <div className="relative aspect-video overflow-hidden">
                {item.image ? (
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop';
                        }}
                    />
                ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                        <Clock className="w-12 h-12 text-muted-foreground/30" />
                    </div>
                )}
                <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/10">
                        {item.category}
                    </span>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                    <span className="font-semibold text-primary">{item.source}</span>
                    <span>•</span>
                    <span>{publishedTime}</span>
                </div>

                <h3 className="text-lg font-bold leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-grow">
                    {item.snippet}
                </p>

                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors mt-auto"
                >
                    Read full news <ExternalLink className="w-4 h-4" />
                </a>
            </div>
        </article>
    );
}
