import { useRef } from 'react';
import { useGrain } from '@/hooks/use-grain';

export default function CtaSection() {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <section className="relative bg-black overflow-hidden px-4 sm:px-10 py-10 sm:py-16">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="absolute inset-0 z-10 w-full h-full pointer-events-none"
            />

            <div className="relative z-20 w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '21/12' }}>

                {/* Background banner */}
                <img
                    src="/assets/homepage/ctabanner.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Center CTA */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
                    <p className="text-white/60 text-xs tracking-widest uppercase mb-3">
                        Let's work together
                    </p>
                    <h2 className="text-white text-[clamp(20px,3.5vw,56px)] font-extralight leading-tight tracking-tight mb-6">
                        Ready to make something great?
                    </h2>
                    <a
                        href="/contact"
                        className="px-8 py-3 bg-white text-black text-xs font-light tracking-widest uppercase hover:bg-white/90 transition-colors duration-300"
                    >
                        Get Started
                    </a>
                </div>

                {/* Hand 1 — top left */}
                <img
                    src="/assets/homepage/hand1.png"
                    alt=""
                    className="absolute w-[38%] h-auto object-contain pointer-events-none z-10"
                    style={{
                        left: '-4%',
                        top: '-5%',
                        animation: 'hand-left 1.2s cubic-bezier(0.22,1,0.36,1) 0.3s both',
                    }}
                />

                {/* Hand 2 — bottom right */}
                <img
                    src="/assets/homepage/hand2.png"
                    alt=""
                    className="absolute w-[38%] h-auto object-contain pointer-events-none z-10"
                    style={{
                        right: '-4%',
                        bottom: '-5%',
                        animation: 'hand-right 1.2s cubic-bezier(0.22,1,0.36,1) 0.3s both',
                    }}
                />
            </div>

            <style>{`
                @keyframes hand-left {
                    from { transform: translate(-110%, -110%); }
                    to   { transform: translate(0%, 0%); }
                }
                @keyframes hand-right {
                    from { transform: translate(110%, 110%); }
                    to   { transform: translate(0%, 0%); }
                }
            `}</style>
        </section>
    );
}
