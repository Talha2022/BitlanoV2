import { useEffect, useRef } from 'react';

export default function AboutSection() {
    const grainRef = useRef<HTMLCanvasElement>(null);

    // Grain overlay — same technique as HeroSection
    useEffect(() => {
        const canvas = grainRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let raf: number;

        const resize = () => {
            canvas.width  = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const draw = () => {
            const { width, height } = canvas;
            if (width === 0 || height === 0) { raf = requestAnimationFrame(draw); return; }
            const imageData = ctx.createImageData(width, height);
            const buf = imageData.data;
            for (let i = 0; i < buf.length; i += 4) {
                const v = Math.random() * 255 | 0;
                buf[i]     = v;
                buf[i + 1] = v;
                buf[i + 2] = v;
                buf[i + 3] = 12;
            }
            ctx.putImageData(imageData, 0, 0);
            raf = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
        };
    }, []);

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
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-6 sm:gap-16">
                    <p className="text-xs tracking-widest text-white/50 sm:whitespace-nowrap pt-2 shrink-0">
                        This is ESE
                    </p>
                    <p className="text-[clamp(20px,3.5vw,48px)] font-light leading-tight tracking-tight text-white">
                        Culture-driven, creative and competitive. Our digital agency creates
                        impact for brands. In the disciplines Websites, social media, content
                        marketing, campaigning and branding. Between timeless and zeitgeist.
                        When we communicate: Effectively. Quick witted. Ambitious. This is ESE
                        Agency.
                    </p>
                </div>
            </div>
        </section>
    );
}
