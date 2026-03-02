'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FEEDS } from '@/../scripts/feeds.mjs';

const CATEGORIES = Array.from(new Set(FEEDS.map(f => f.category)));

export default function CategoryTabs() {
    const pathname = usePathname();

    return (
        <div className="w-full overflow-x-auto no-scrollbar py-6">
            <div className="flex items-center gap-3 min-w-max">
                <Link
                    href="/"
                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all border ${pathname === '/'
                            ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                            : 'glass border-white/5 hover:border-white/20'
                        }`}
                >
                    All News
                </Link>
                {CATEGORIES.map(category => {
                    const href = `/category/${category.toLowerCase()}`;
                    const isActive = pathname === href;

                    return (
                        <Link
                            key={category}
                            href={href}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all border ${isActive
                                    ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                                    : 'glass border-white/5 hover:border-white/20'
                                }`}
                        >
                            {category}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
