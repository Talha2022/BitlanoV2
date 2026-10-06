import { useRef } from 'react';
import { useGrain } from '@/hooks/use-grain';

export default function AboutSection() {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <section className="relative overflow-hidden bg-black">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            />

            {/* Content */}
            <div className="relative z-20 px-6 py-12 sm:px-10 sm:py-24">
                <div className="relative">
                    {/* BITLANO label — absolute at top-[3em] on all sizes, aligns with a paragraph line */}
                    <p className="absolute top-[1em] left-0 text-[10px] leading-none tracking-widest whitespace-nowrap text-white/50 sm:top-[3em] sm:left-2 sm:text-xs">
                        BITLANO
                    </p>

                    {/* Paragraph — indent clears the label on all sizes */}
                    <p
                        className="text-[clamp(22px,6vw,64px)] leading-[1.15] font-light tracking-tight text-white sm:text-[clamp(28px,4.5vw,64px)] sm:leading-[1.1]"
                        style={{ textIndent: 'clamp(60px, 12vw, 160px)' } as React.CSSProperties}
                    >
                        Culture-driven, creative and competitive. Our digital
                        agency creates impact for brands. In the disciplines
                        Websites, Social Media, Content Marketing, Campaigning
                        and Branding. Between timeless and zeitgeist. When we
                        communicate: Effective. Quick-witted. Ambitious. This is
                        ESE Agency.
                    </p>
                </div>
            </div>
        </section>
    );
}
