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
            <div className="relative z-20 px-6 py-16 sm:px-10 sm:py-24">
                <div className="relative">
                    {/* "This is ESE" — floats top-left in the text-indent gap */}
                    <p className="absolute top-[3em] left-2 text-[10px] leading-none tracking-widest whitespace-nowrap text-white/50 sm:text-xs">
                        This is BITLANO
                    </p>

                    {/* Full-width paragraph, first line indented to clear the label */}
                    <p
                        className="text-[clamp(28px,4.5vw,64px)] leading-[1.1] font-light tracking-tight text-white"
                        style={{ textIndent: 'clamp(80px, 12vw, 160px)' }}
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
