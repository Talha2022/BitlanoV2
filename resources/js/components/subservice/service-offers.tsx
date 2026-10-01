import { useState, useEffect, useRef } from 'react';
import { useGrain } from '@/hooks/use-grain';

/**
 * Animated TV static canvas component rendered on row hover.
 */
function TVStaticCanvas({ active }: { active: boolean }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        if (!active) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        const resize = () => {
            canvas.width = Math.max(canvas.offsetWidth, 300);
            canvas.height = Math.max(canvas.offsetHeight, 80);
        };
        resize();

        const draw = () => {
            const { width, height } = canvas;
            if (width === 0 || height === 0) return;
            const imageData = ctx.createImageData(width, height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                const v = (Math.random() * 255) | 0;
                data[i] = v;
                data[i + 1] = v;
                data[i + 2] = v;
                data[i + 3] = 255;
            }

            ctx.putImageData(imageData, 0, 0);
            rafRef.current = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [active]);

    return (
        <canvas
            ref={canvasRef}
            className={`pointer-events-none absolute inset-0 z-0 h-full w-full transition-opacity duration-300 ${
                active ? 'opacity-35' : 'opacity-0'
            }`}
            style={{ mixBlendMode: 'screen' }}
        />
    );
}

const defaultOffers = [
    'Concept/Wireframing',
    'Web Design',
    'Web Development',
    'SEO measures',
];

interface ServiceOffersProps {
    offers?: string[];
    label?: string;
}

export default function ServiceOffers({
    offers = defaultOffers,
    label = 'Our offer',
}: ServiceOffersProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <section className="relative overflow-hidden border-b border-white/10 bg-black px-6 py-20 font-sans text-white sm:px-10 lg:px-16 lg:py-28">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:gap-16">
                {/* Left Column: Title & Interactive Circle Accent */}
                <div className="flex w-full flex-col items-start justify-between pt-2 lg:w-1/3">
                    <span className="text-xs font-medium tracking-widest text-white/50 uppercase sm:text-sm">
                        {label}
                    </span>
                </div>

                {/* Right Column: List of Offer Items */}
                <div className="flex w-full flex-col lg:w-2/3">
                    {offers.map((offerTitle, index) => {
                        const isHovered = hoveredIndex === index;
                        const isExpanded = expandedIndex === index;

                        return (
                            <div
                                key={offerTitle}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() =>
                                    setExpandedIndex(isExpanded ? null : index)
                                }
                                className="group relative cursor-pointer overflow-hidden border-b border-white/15 transition-all duration-300"
                            >
                                {/* TV Static Noise Canvas Background */}
                                <TVStaticCanvas active={isHovered} />

                                {/* Subtly darker base overlay when hovered */}
                                <div
                                    className={`pointer-events-none absolute inset-0 z-0 bg-white/[0.03] transition-opacity duration-300 ${
                                        isHovered ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />

                                {/* Main Content Row */}
                                <div className="relative z-10 flex items-center justify-between px-4 py-7 transition-all duration-300 group-hover:translate-x-2 sm:px-6 sm:py-9">
                                    {/* Offer Item Title */}
                                    <h3 className="text-2xl font-semibold tracking-tight text-white/90 transition-colors duration-200 group-hover:text-white sm:text-4xl lg:text-[44px]">
                                        {offerTitle}
                                    </h3>

                                    {/* Down Arrow Circular Icon */}
                                    <div
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 sm:h-9 sm:w-9 ${
                                            isHovered
                                                ? 'scale-110 border-white bg-white/10 text-white'
                                                : ''
                                        } ${isExpanded ? 'rotate-180 bg-white text-black' : 'rotate-0'}`}
                                    >
                                        <svg
                                            className="h-3.5 w-3.5 stroke-current sm:h-4 sm:w-4"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M12 5v14M5 12l7 7 7-7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Optional Expandable Details */}
                                {isExpanded && (
                                    <div className="animate-fadeIn relative z-10 border-t border-white/5 px-4 pt-1 pb-6 text-base leading-relaxed text-white/70 sm:px-6 sm:text-lg">
                                        We combine strategic execution with
                                        cutting-edge craftsmanship to deliver
                                        tailored results for{' '}
                                        {offerTitle.toLowerCase()}.
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
