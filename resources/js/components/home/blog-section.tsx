import { useRef } from 'react';
import { Link } from '@inertiajs/react';
import { useGrain } from '@/hooks/use-grain';
import BlogCard from '@/components/blog/BlogCard';
import blogPosts from '@/data/blog-posts';

export default function BlogSection() {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    const posts = blogPosts.slice(0, 3);

    return (
        <section className="relative overflow-hidden bg-black text-white py-14 sm:py-20 md:py-24">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />

            <div className="relative z-10 mx-auto w-full max-w-[2000px] px-[6vw] sm:px-10 lg:px-[60px]">
                {/* Header row */}
                <div className="mb-8 flex items-start justify-between sm:mb-10">
                    <h2 className="max-w-xs text-2xl font-black leading-tight tracking-tight md:text-3xl">
                        News from the world
                        <br />
                        of BITLANO
                    </h2>
                    <Link
                        href="/blog"
                        className="mt-1 flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-xs text-white/80 transition-colors duration-200 hover:border-white/40 hover:text-white"
                    >
                        Show all
                        <svg
                            className="h-3.5 w-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                    </Link>
                </div>

                {/* Cards Grid */}
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
