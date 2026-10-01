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
        <section className="relative overflow-hidden bg-black px-6 py-20 font-sans text-white sm:px-10 lg:px-16 lg:py-28">
            {/* Grain overlay for the section background */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Section Heading */}
                <h2 className="mb-10 text-3xl font-semibold tracking-tight text-white sm:mb-14 sm:text-4xl lg:text-5xl">
                    Other expertise
                </h2>

                {/* 2x2 Grid of Cards with sharp corners & compact height */}
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                    {displayItems.map((item) => (
                        <Link
                            key={item.slug}
                            href={item.to}
                            className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-none border border-white/10 bg-[#1a1a1a] p-6 no-underline transition-all duration-500 hover:border-white/30 hover:shadow-2xl sm:min-h-[270px] sm:p-8 lg:min-h-[300px] lg:p-9"
                        >
                            {/* Footer TV Static Background Canvas */}
                            <StaticBackground />

                            {/* Subtly blended radial vignette for atmosphere */}
                            <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-tr from-black/50 via-transparent to-white/[0.03]" />

                            {/* Card Header Content (Title + Button) */}
                            <div className="relative z-10 flex flex-col items-start gap-4">
                                <h3 className="text-2xl leading-tight font-semibold tracking-tight text-white transition-colors group-hover:text-white sm:text-3xl lg:text-[34px]">
                                    {item.title}
                                </h3>

                                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-white/25 group-hover:bg-white/25 group-hover:text-white hover:bg-white/20 sm:px-4 sm:py-2 sm:text-sm">
                                    Learn more
                                    <svg
                                        className="h-3.5 w-3.5 stroke-current transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
                                className="pointer-events-none absolute right-0 bottom-0 z-10 h-[80%] w-auto max-w-[50%] object-contain object-bottom drop-shadow-2xl transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105 sm:h-[88%] sm:max-w-[55%] lg:h-[92%]"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
