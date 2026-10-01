import { useEffect, useRef, useState, useCallback } from 'react';
import { subscribeLenis } from '@/hooks/use-lenis';

// ─── Types ───────────────────────────────────────────────────────────────────

interface SectionItem {
    label: string;
    title: string;
    taglines: string[];
    background: string;
    foregroundImage: string;
}

interface PanelProps {
    item: SectionItem;
    index: number;
    totalCount: number;
    onProgress: (index: number, value: number) => void;
}

interface ProgressBarsProps {
    total: number;
    barsContainerRef: React.RefObject<HTMLDivElement | null>;
    barFillRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

// ─── Panel ───────────────────────────────────────────────────────────────────

function Panel({ item, index, onProgress }: PanelProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Tagline cycler
    const [taglineIndex, setTaglineIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (!item.taglines?.length) return;
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setTaglineIndex((i) => (i + 1) % item.taglines.length);
                setVisible(true);
            }, 400);
        }, 3000);
        return () => clearInterval(interval);
    }, [item.taglines]);

    // Scroll progress for this panel's progress bar (Direct DOM update via callback)
    useEffect(() => {
        const handleScroll = () => {
            const el = wrapperRef.current;
            if (!el) return;
            const { top, height } = el.getBoundingClientRect();
            const vh = window.innerHeight;
            const scrollable = height - vh;
            const scrolled = -top;
            const progress = Math.min(Math.max(scrolled / scrollable, 0), 1);
            onProgress(index, progress);
        };

        const unSubLenis = subscribeLenis(handleScroll);
        window.addEventListener('scroll', handleScroll, { passive: true });

        handleScroll();
        return () => {
            unSubLenis();
            window.removeEventListener('scroll', handleScroll);
        };
    }, [index, onProgress]);

    return (
        // Tall wrapper — controls how long the user scrolls within this panel
        <div ref={wrapperRef} className="relative h-[200vh]">
            {/* Sticky panel */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Background gradient */}
                <div
                    className="absolute inset-0 z-0"
                    style={{ background: item.background }}
                />

                {/* Foreground image — full bleed */}
                {item.foregroundImage && (
                    <div className="absolute inset-0 z-[1]">
                        <img
                            src={item.foregroundImage}
                            alt=""
                            className="h-full w-full object-cover object-[center_30%]"
                        />
                    </div>
                )}

                {/* Dark overlay at bottom for text contrast */}
                <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Label — top left */}
                <div className="absolute top-8 left-8 z-10">
                    <span className="text-sm font-medium tracking-wide text-white/80">
                        {item.label}
                    </span>
                </div>

                {/* Oversized title — marquee scrolling left */}
                <div className="absolute right-0 bottom-16 left-0 z-10 overflow-hidden sm:bottom-20">
                    <div className="flex w-max animate-marquee">
                        <h2 className="pr-[10vw] text-[16vw] leading-none font-bold tracking-tight whitespace-nowrap text-white sm:text-[13vw]">
                            {item.title}
                        </h2>
                        <h2
                            className="pr-[10vw] text-[16vw] leading-none font-bold tracking-tight whitespace-nowrap text-white sm:text-[13vw]"
                            aria-hidden="true"
                        >
                            {item.title}
                        </h2>
                    </div>

                    {/* Animated tagline below title */}
                    {item.taglines?.length > 0 && (
                        <p
                            className={`mt-1 pl-4 text-xs font-light tracking-widest text-white/70 transition-opacity duration-[400ms] sm:mt-2 sm:pl-6 sm:text-sm ${
                                visible ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            {item.taglines[taglineIndex]}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

// ─── Progress Bars ────────────────────────────────────────────────────────────

function ProgressBars({
    total,
    barsContainerRef,
    barFillRefs,
}: ProgressBarsProps) {
    return (
        <div
            ref={barsContainerRef}
            className="pointer-events-none fixed right-4 bottom-4 left-4 z-50 flex gap-1.5 opacity-0 transition-opacity duration-300 sm:right-8 sm:bottom-8 sm:left-8 sm:gap-2"
        >
            {Array.from({ length: total }).map((_, i) => (
                <div
                    key={i}
                    className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/20"
                >
                    <div
                        ref={(el) => {
                            barFillRefs.current[i] = el;
                        }}
                        className="h-full w-0 rounded-full bg-white transition-none"
                    />
                </div>
            ))}
        </div>
    );
}

// ─── Main Export ─────────────────────────────────────────────────────────────

interface ScrollStackSectionProps {
    sections: SectionItem[];
}

export default function ScrollStackSection({
    sections,
}: ScrollStackSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const barsContainerRef = useRef<HTMLDivElement>(null);
    const barFillRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleProgress = useCallback((index: number, value: number) => {
        const fillEl = barFillRefs.current[index];
        if (fillEl) {
            fillEl.style.width = `${value * 100}%`;
        }
    }, []);

    // Show bars only while the stack container is in view (Direct DOM opacity manipulation)
    useEffect(() => {
        const onScroll = () => {
            const el = containerRef.current;
            const barsEl = barsContainerRef.current;
            if (!el || !barsEl) return;
            const { top, bottom } = el.getBoundingClientRect();
            const isVisible = top < window.innerHeight && bottom > 0;
            barsEl.style.opacity = isVisible ? '1' : '0';
        };

        const unSubLenis = subscribeLenis(onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });

        onScroll();
        return () => {
            unSubLenis();
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative">
            {sections.map((item, i) => (
                <Panel
                    key={i}
                    item={item}
                    index={i}
                    totalCount={sections.length}
                    onProgress={handleProgress}
                />
            ))}
            <ProgressBars
                total={sections.length}
                barsContainerRef={barsContainerRef}
                barFillRefs={barFillRefs}
            />
        </div>
    );
}
