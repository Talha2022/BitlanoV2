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
            className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 z-0 ${
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
        <section className="relative bg-black text-white px-6 sm:px-10 lg:px-16 py-20 lg:py-28 border-b border-white/10 font-sans overflow-hidden">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="absolute inset-0 z-0 w-full h-full pointer-events-none"
            />
            
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
                {/* Left Column: Title & Interactive Circle Accent */}
                <div className="w-full lg:w-1/3 pt-2 flex flex-col justify-between items-start">
                    <span className="text-xs sm:text-sm tracking-widest text-white/50 uppercase font-medium">
                        {label}
                    </span>
                </div>

                {/* Right Column: List of Offer Items */}
                <div className="w-full lg:w-2/3 flex flex-col">
                    {offers.map((offerTitle, index) => {
                        const isHovered = hoveredIndex === index;
                        const isExpanded = expandedIndex === index;

                        return (
                            <div
                                key={offerTitle}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                                className="relative border-b border-white/15 overflow-hidden transition-all duration-300 group cursor-pointer"
                            >
                                {/* TV Static Noise Canvas Background */}
                                <TVStaticCanvas active={isHovered} />

                                {/* Subtly darker base overlay when hovered */}
                                <div
                                    className={`absolute inset-0 bg-white/[0.03] transition-opacity duration-300 pointer-events-none z-0 ${
                                        isHovered ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />

                                {/* Main Content Row */}
                                <div className="relative z-10 flex items-center justify-between py-7 sm:py-9 px-4 sm:px-6 transition-all duration-300 group-hover:translate-x-2">
                                    {/* Offer Item Title */}
                                    <h3 className="text-2xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors duration-200">
                                        {offerTitle}
                                    </h3>

                                    {/* Down Arrow Circular Icon */}
                                    <div
                                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 shrink-0 transition-all duration-300 ${
                                            isHovered
                                                ? 'border-white text-white bg-white/10 scale-110'
                                                : ''
                                        } ${isExpanded ? 'rotate-180 bg-white text-black' : 'rotate-0'}`}
                                    >
                                        <svg
                                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-current"
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
                                    <div className="relative z-10 px-4 sm:px-6 pb-6 pt-1 text-white/70 text-base sm:text-lg leading-relaxed border-t border-white/5 animate-fadeIn">
                                        We combine strategic execution with cutting-edge craftsmanship to deliver tailored results for {offerTitle.toLowerCase()}.
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
