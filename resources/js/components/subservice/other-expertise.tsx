import { useRef } from 'react';
import { Link } from '@inertiajs/react';
import StaticBackground from '@/components/contact/static-background';
import { useGrain } from '@/hooks/use-grain';

const ALL_EXPERTISE = [
    {
        slug: 'campaigning',
        title: 'Campaigning',
        to: '/expertise/campaigning',
        img: '/assets/navbar/campaign.png',
    },
    {
        slug: 'social-media',
        title: 'Social Media',
        to: '/expertise/social-media',
        img: '/assets/navbar/social.png',
    },
    {
        slug: 'branding-design',
        title: 'Branding & Design',
        to: '/expertise/branding-design',
        img: '/assets/navbar/bd.png',
    },
    {
        slug: 'employer-branding',
        title: 'Employer branding',
        to: '/expertise/employer-branding',
        img: '/assets/navbar/empbd.png',
    },
    {
        slug: 'websites',
        title: 'Websites',
        to: '/expertise/websites',
        img: '/assets/navbar/website.png',
    },
];

interface OtherExpertiseProps {
    currentSlug?: string;
}

export default function OtherExpertise({ currentSlug }: OtherExpertiseProps) {
    // If currentSlug is provided, exclude current and pick 4 other expertises
    const displayItems = currentSlug
        ? ALL_EXPERTISE.filter((item) => item.slug !== currentSlug).slice(0, 4)
        : ALL_EXPERTISE.slice(0, 4);

    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <section className="relative bg-black text-white px-6 sm:px-10 lg:px-16 py-20 lg:py-28 font-sans overflow-hidden">
            {/* Grain overlay for the section background */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="absolute inset-0 z-0 w-full h-full pointer-events-none"
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-10 sm:mb-14">
                    Other expertise
                </h2>

                {/* 2x2 Grid of Cards with sharp corners & compact height */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {displayItems.map((item) => (
                        <Link
                            key={item.slug}
                            href={item.to}
                            className="relative rounded-none overflow-hidden bg-[#1a1a1a] border border-white/10 p-6 sm:p-8 lg:p-9 min-h-[220px] sm:min-h-[270px] lg:min-h-[300px] flex flex-col justify-between group transition-all duration-500 hover:border-white/30 hover:shadow-2xl no-underline"
                        >
                            {/* Footer TV Static Background Canvas */}
                            <StaticBackground />

                            {/* Subtly blended radial vignette for atmosphere */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-white/[0.03] pointer-events-none z-0" />

                            {/* Card Header Content (Title + Button) */}
                            <div className="relative z-10 flex flex-col items-start gap-4">
                                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-tight text-white leading-tight group-hover:text-white transition-colors">
                                    {item.title}
                                </h3>

                                <span className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/90 text-xs sm:text-sm font-medium backdrop-blur-md border border-white/10 transition-all duration-300 group-hover:bg-white/25 group-hover:border-white/25 group-hover:text-white group-hover:scale-105">
                                    Learn more
                                    <svg
                                        className="w-3.5 h-3.5 stroke-current transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </span>
                            </div>

                            {/* 3D Visual Asset positioned on right/bottom */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="absolute right-0 bottom-0 h-[80%] sm:h-[88%] lg:h-[92%] w-auto max-w-[50%] sm:max-w-[55%] object-contain object-bottom pointer-events-none transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1 z-10 drop-shadow-2xl"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
