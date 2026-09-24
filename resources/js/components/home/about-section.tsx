import { useRef } from 'react';
import { useGrain } from '@/hooks/use-grain';

export default function AboutSection() {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <section className="relative bg-black overflow-hidden">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="absolute inset-0 z-10 w-full h-full pointer-events-none"
            />

            {/* Content */}
            <div className="relative z-20 px-6 sm:px-10 py-16 sm:py-24">
                <div className="relative">
                    {/* "This is ESE" — floats top-left in the text-indent gap */}
                    <p className="absolute top-[3em] left-2 text-[10px] sm:text-xs tracking-widest text-white/50 whitespace-nowrap leading-none">
                        This is BITLANO
                    </p>

                    {/* Full-width paragraph, first line indented to clear the label */}
                    <p
                        className="text-[clamp(28px,4.5vw,64px)] font-light leading-[1.1] tracking-tight text-white"
                        style={{ textIndent: 'clamp(80px, 12vw, 160px)' }}
                    >
                        Culture-driven, creative and competitive. Our digital agency creates
                        impact for brands. In the disciplines Websites, Social Media, Content
                        Marketing, Campaigning and Branding. Between timeless and zeitgeist.
                        When we communicate: Effective. Quick-witted. Ambitious. This is ESE
                        Agency.
                    </p>
                </div>
            </div>
        </section>
    );
}
