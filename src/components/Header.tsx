import Link from 'next/link';
import { Newspaper, Search, Menu } from 'lucide-react';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full glass border-b border-white/10">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary p-2 rounded-xl group-hover:rotate-12 transition-transform">
                        <Newspaper className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">Nepal News<span className="text-primary underline decoration-primary/30">Hub</span></span>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <Link href="/" className="nav-link active-nav-link">Home</Link>
                    <Link href="/summary" className="nav-link">Daily AI Summary</Link>
                </div>

                <div className="flex items-center gap-3">
                    <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                        <Search className="w-5 h-5" />
                    </button>
                    <button className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors">
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </header>
    );
}
