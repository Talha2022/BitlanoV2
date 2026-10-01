import { useRef } from 'react';
import { useGrain } from '@/hooks/use-grain';

interface ServiceIntroProps {
    label?: string;
    text: string;
}

/**
 * ServiceIntro — the "Why Us" section below the hero.
 *
 * Props:
 *   label – left column label (default "Why Us")
 *   text  – the body paragraph
 */
export default function ServiceIntro({
    label = 'Why Us',
    text,
}: ServiceIntroProps) {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <section className="relative overflow-hidden bg-black text-white">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />
            {/* Top border line */}
            <div className="mx-6 border-t border-white/10 sm:mx-10" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-4 px-6 py-12 sm:flex-row sm:gap-28 sm:px-10 sm:py-24">
                {/* Left — label */}
                <div className="shrink-0 pt-1 sm:w-[340px]">
                    <span className="text-xs tracking-widest text-white/50 uppercase">
                        {label}
                    </span>
                </div>

                {/* Right — body text */}
                <div className="max-w-2xl flex-1">
                    <p className="text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
                        {text}
                    </p>
                </div>
            </div>

            {/* Bottom border line */}
            <div className="mx-6 border-b border-white/10 sm:mx-10" />
        </section>
    );
}
