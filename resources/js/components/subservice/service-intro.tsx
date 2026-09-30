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
        <section className="relative bg-black text-white overflow-hidden">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="absolute inset-0 z-0 w-full h-full pointer-events-none"
            />
            {/* Top border line */}
            <div className="border-t border-white/10 mx-6 sm:mx-10" />

            {/* Content */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-28 px-6 sm:px-10 py-12 sm:py-24 max-w-7xl mx-auto">
                {/* Left — label */}
                <div className="sm:w-[340px] shrink-0 pt-1">
                    <span className="text-xs tracking-widest text-white/50 uppercase">
                        {label}
                    </span>
                </div>

                {/* Right — body text */}
                <div className="flex-1 max-w-2xl">
                    <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/85">
                        {text}
                    </p>
                </div>
            </div>

            {/* Bottom border line */}
            <div className="border-b border-white/10 mx-6 sm:mx-10" />
        </section>
    );
}
