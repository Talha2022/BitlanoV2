import { useEffect, useRef } from 'react';

interface ServiceHeroProps {
    title?: string;
    label?: string;
    bgImage?: string;
}

/**
 * Hero for service/expertise pages.
 *
 * Props:
 *   title    – service name, shown as the scrolling marquee text
 *   label    – small top-left label (e.g. "Websites")
 *   bgImage  – full-bleed background image src
 */
export default function ServiceHero({ title = 'Expertise', label, bgImage }: ServiceHeroProps) {
    const marqueeRef = useRef<HTMLDivElement>(null);

    // Scroll-driven marquee lift (same pattern as HeroSection)
    useEffect(() => {
        const onScroll = () => {
            if (!marqueeRef.current) return;
            const scrolled = window.scrollY;
            const progress = Math.min(scrolled / 800, 1);
            marqueeRef.current.style.transform = `translateY(${progress * -120}px)`;
            marqueeRef.current.style.opacity = `${1 - progress * 1.4}`;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const marqueeText = `${title} · ${title} · ${title} · ${title} · ${title} · `;

    return (
        <div className="relative w-full h-svh overflow-hidden">
            {/* Background image */}
            {bgImage && (
                <img
                    src={bgImage}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    draggable={false}
                />
            )}

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

            {/* Label + Marquee grouped so label always sits right above title */}
            <div
                ref={marqueeRef}
                className="absolute bottom-10 left-0 w-full z-20 will-change-transform"
                aria-label={title}
            >
                {/* Small label */}
                {label && (
                    <div className="px-6 sm:px-10 mb-3">
                        <span className="text-xs tracking-widest text-white/70 uppercase">
                            {label}
                        </span>
                    </div>
                )}

                {/* Marquee */}
                <div className="overflow-hidden">
                    <div className="flex w-max animate-marquee">
                        <span className="text-[clamp(48px,12vw,180px)] font-extrabold leading-none whitespace-nowrap tracking-tight text-white">
                            {marqueeText}
                        </span>
                        <span
                            className="text-[clamp(48px,12vw,180px)] font-extrabold leading-none whitespace-nowrap tracking-tight text-white"
                            aria-hidden="true"
                        >
                            {marqueeText}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
