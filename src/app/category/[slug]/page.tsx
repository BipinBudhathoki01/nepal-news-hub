import fs from 'fs';
import path from 'path';
import NewsCard from '@/components/NewsCard';
import CategoryTabs from '@/components/CategoryTabs';
import { Newspaper } from 'lucide-react';

async function getNewsByCategory(category: string) {
    const filePath = path.join(process.cwd(), 'public', 'data', 'news.json');
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath, 'utf8');
    const { items } = JSON.parse(data);
    return items.filter((item: any) => item.category.toLowerCase() === category.toLowerCase());
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
    const items = await getNewsByCategory(params.slug);
    const categoryName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);

    return (
        <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <section className="pt-10 pb-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                        <Newspaper className="w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{categoryName} News</h1>
                        <p className="text-muted-foreground text-sm">Latest stories in {categoryName} from across Nepal.</p>
                    </div>
                </div>
            </section>

            <CategoryTabs />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.length > 0 ? (
                    items.map((item: any) => (
                        <NewsCard key={item.id} item={item} />
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center glass rounded-2xl">
                        <p className="text-muted-foreground">No news found for this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
