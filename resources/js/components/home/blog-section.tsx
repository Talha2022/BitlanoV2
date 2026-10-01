import { useRef } from 'react';
import { useGrain } from '@/hooks/use-grain';

const posts = [
    {
        img: '/assets/Blog/blog1.jpg',
        category: 'Denner',
        title: 'ESE Agency & Manifesto Films: Denner blockbuster with Granit Xhaka and Terence Hill film-ready staged',
        author: 'Elia Binelli',
        avatar: '/assets/homepage/author-elia.jpg',
        readTime: '6 min',
    },
    {
        img: '/assets/Blog/blog2.jpg',
        category: 'Migros Group',
        title: 'New employer appearance for the Migros Group',
        author: 'Elia Binelli',
        avatar: '/assets/homepage/author-elia.jpg',
        readTime: '5 min',
    },
    {
        img: '/assets/Blog/blog3.jpg',
        category: 'Denner',
        title: 'Denner commits the Easter bunny as an official partner',
        author: 'Damian Steffen',
        avatar: '/assets/homepage/author-damian.jpg',
        readTime: '1 min',
    },
];

// Card content area with TV static grain
function CardContent({ post }: { post: (typeof posts)[number] }) {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <div className="relative flex flex-1 flex-col bg-[#1a1a1a]">
            {/* Grain */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />
            {/* Content */}
            <div className="relative z-10 flex flex-1 flex-col gap-3 p-4 sm:gap-4 sm:p-5">
                <span className="text-xs tracking-widest text-white/40 uppercase">
                    {post.category}
                </span>
                <h3 className="flex-1 text-base leading-snug font-light text-white sm:text-lg">
                    {post.title}
                </h3>
                <div className="flex items-center gap-4 pt-3 text-xs text-white/50">
                    <span className="flex items-center gap-2">
                        <img
                            src={post.avatar}
                            alt={post.author}
                            className="h-5 w-5 rounded-full object-cover"
                        />
                        {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <svg
                            className="h-3.5 w-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                        </svg>
                        {post.readTime}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function BlogSection() {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <section className="relative overflow-hidden bg-black px-6 py-14 text-white sm:px-10 sm:py-20">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            />

            {/* All content above grain */}
            <div className="relative z-20">
                {/* Header row */}
                <div className="mb-6 flex items-start justify-between sm:mb-8">
                    <h2 className="max-w-xs text-2xl leading-tight font-black tracking-tight md:text-3xl">
                        News from the world
                        <br />
                        of BITLANO
                    </h2>
                    <a
                        href="/blog"
                        className="mt-1 flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-xs text-white/80 transition-colors duration-200 hover:text-white"
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
                    </a>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, i) => (
                        <div
                            key={i}
                            className="group flex cursor-pointer flex-col overflow-hidden"
                        >
                            {/* Image */}
                            <div className="h-72 overflow-hidden sm:h-80">
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content with grain */}
                            <CardContent post={post} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
