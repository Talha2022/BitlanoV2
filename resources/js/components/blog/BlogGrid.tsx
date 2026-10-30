import { useRef } from 'react';
import { useGrain } from '@/hooks/use-grain';
import BlogCard from '@/components/blog/BlogCard';
import type { BlogPost } from '@/data/blog-posts';

/* ── Blog grid ───────────────────────────────────────────────── */
interface BlogGridProps {
    posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    if (posts.length === 0) {
        return (
            <section className="relative overflow-hidden bg-black px-[6vw] py-20 text-center text-white/40 sm:px-10 lg:px-[60px]">
                No posts found.
            </section>
        );
    }

    return (
        <section className="relative overflow-hidden bg-black text-white pt-[50px] md:pt-[70px] lg:pt-[80px] pb-[100px] md:pb-[130px] lg:pb-[150px]">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />

            <div className="relative z-10 mx-auto w-full max-w-[2000px] px-[6vw] sm:px-10 lg:px-[60px]">
                <div
                    cb-blg-lst-view="highlights"
                    className="blg-lst__collection-container w-dyn-list"
                >
                    <div
                        role="list"
                        className="blg-lst__collection-wrapper grid grid-cols-1 gap-[10px] md:grid-cols-2 lg:grid-cols-3"
                    >
                        {posts.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
