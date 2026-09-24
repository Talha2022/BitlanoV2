import { useRef } from 'react';
import { useGrain } from '@/hooks/use-grain';

const posts = [
    {
        img:      '/assets/Blog/blog1.jpg',
        category: 'Denner',
        title:    'ESE Agency & Manifesto Films: Denner blockbuster with Granit Xhaka and Terence Hill film-ready staged',
        author:   'Elia Binelli',
        avatar:   '/assets/homepage/author-elia.jpg',
        readTime: '6 min',
    },
    {
        img:      '/assets/Blog/blog2.jpg',
        category: 'Migros Group',
        title:    'New employer appearance for the Migros Group',
        author:   'Elia Binelli',
        avatar:   '/assets/homepage/author-elia.jpg',
        readTime: '5 min',
    },
    {
        img:      '/assets/Blog/blog3.jpg',
        category: 'Denner',
        title:    'Denner commits the Easter bunny as an official partner',
        author:   'Damian Steffen',
        avatar:   '/assets/homepage/author-damian.jpg',
        readTime: '1 min',
    },
];

// Card content area with TV static grain
function CardContent({ post }: { post: typeof posts[number] }) {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <div className="relative bg-[#1a1a1a] flex flex-col flex-1">
            {/* Grain */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
            />
            {/* Content */}
            <div className="relative z-10 p-4 sm:p-5 flex flex-col gap-3 sm:gap-4 flex-1">
                <span className="text-white/40 text-xs tracking-widest uppercase">
                    {post.category}
                </span>
                <h3 className="text-white text-base sm:text-lg font-light leading-snug flex-1">
                    {post.title}
                </h3>
                <div className="flex items-center gap-4 text-white/50 text-xs pt-3">
                    <span className="flex items-center gap-2">
                        <img
                            src={post.avatar}
                            alt={post.author}
                            className="w-5 h-5 rounded-full object-cover"
                        />
                        {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <section className="relative bg-black overflow-hidden text-white px-6 sm:px-10 py-14 sm:py-20">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="absolute inset-0 z-10 w-full h-full pointer-events-none"
            />

            {/* All content above grain */}
            <div className="relative z-20">

            {/* Header row */}
            <div className="flex items-start justify-between mb-6 sm:mb-8">
                <h2 className="text-2xl md:text-3xl font-black leading-tight tracking-tight max-w-xs">
                    News from the world<br />of BITLANO
                </h2>
                <a
                    href="/blog"
                    className="flex items-center gap-1.5 text-xs text-white/80 hover:text-white transition-colors duration-200 mt-1 shrink-0 border border-white/20 rounded-full px-4 py-2"
                >
                    Show all
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                </a>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post, i) => (
                    <div
                        key={i}
                        className="overflow-hidden group cursor-pointer flex flex-col"
                    >
                        {/* Image */}
                        <div className="overflow-hidden h-72 sm:h-80">
                            <img
                                src={post.img}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
