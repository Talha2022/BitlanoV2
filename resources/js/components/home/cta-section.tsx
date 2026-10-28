import { useRef } from 'react';
import { Link } from '@inertiajs/react';
import { useGrain } from '@/hooks/use-grain';
import StaticBackground from '@/components/contact/static-background';

export default function CtaSection() {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <section className="relative overflow-hidden bg-black px-4 py-10 sm:px-10 sm:py-16">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            />

            <div
                className="relative z-20 w-full overflow-hidden rounded-2xl"
                style={{ aspectRatio: '21/12' }}
            >
                {/* Background banner */}
                <img
                    src="/assets/homepage/ctabanner.jpg"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Center CTA */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
                    <p className="mb-3 text-xs tracking-widest text-white/60 uppercase">
                        Let's work together
                    </p>
                    <h2 className="mb-6 text-[clamp(20px,3.5vw,56px)] leading-tight font-extralight tracking-tight text-white">
                        Ready to make something great?
                    </h2>
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-[#1a1a1a] px-8 py-3 text-xs font-light tracking-widest text-white uppercase no-underline transition-all duration-300 hover:border-white/50 hover:scale-[1.03]"
                    >
                        {/* Footer TV Static Background */}
                        <StaticBackground />

                        {/* Subtle hover overlay */}
                        <div className="pointer-events-none absolute inset-0 z-[1] bg-white/0 transition-colors duration-300 group-hover:bg-white/10" />

                        {/* Button text */}
                        <span className="relative z-10 text-white">
                            Get Started
                        </span>
                    </Link>
                </div>

                {/* Hand 1 — top left */}
                <img
                    src="/assets/homepage/hand1.png"
                    alt=""
                    className="pointer-events-none absolute z-10 h-auto w-[38%] object-contain"
                    style={{
                        left: '-4%',
                        top: '-5%',
                        animation:
                            'hand-left 1.2s cubic-bezier(0.22,1,0.36,1) 0.3s both',
                    }}
                />

                {/* Hand 2 — bottom right */}
                <img
                    src="/assets/homepage/hand2.png"
                    alt=""
                    className="pointer-events-none absolute z-10 h-auto w-[38%] object-contain"
                    style={{
                        right: '-4%',
                        bottom: '-5%',
                        animation:
                            'hand-right 1.2s cubic-bezier(0.22,1,0.36,1) 0.3s both',
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
