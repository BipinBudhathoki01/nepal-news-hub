import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Nepal News Hub | Latest Nepali News Aggregator',
    description: 'Stay updated with the latest news from 20+ top Nepali news sources. Politics, Business, Sports, Tech, and more.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.className} min-h-screen bg-[#020617] text-slate-50 selection:bg-primary/30`}>
                <Header />
                <main className="container mx-auto px-4 pb-20">
                    {children}
                </main>

                <footer className="border-t border-white/5 py-10 mt-20">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} Nepal News Hub. All rights reserved.
                        </p>
                        <p className="text-[10px] text-muted-foreground/50 mt-2 max-w-md mx-auto">
                            We aggregate headlines from public sources. Full content belongs to respective publishers.
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
