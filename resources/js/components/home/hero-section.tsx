import { useEffect, useRef } from 'react';
import { useGrain } from '@/hooks/use-grain';
import { subscribeLenis } from '@/hooks/use-lenis';

const marqueeText =
    'OVERTAKE TIME WITH US - OVERTAKE TIME WITH US - OVERTAKE TIME WITH US - ';

const FPS = 24;

const TOTAL = 49;
const FRAMES = Array.from(
    { length: TOTAL },
    (_, i) => `/assets/hero/frame${String(i + 1).padStart(2, '0')}.webp`,
);

const getScrollRange = () => (window.innerWidth < 768 ? 500 : 800);

export default function HeroSection() {
    const wrapperRef     = useRef<HTMLDivElement>(null);
    const labelsRef      = useRef<HTMLDivElement>(null);
    const marqueeRef     = useRef<HTMLDivElement>(null);
    const blackRef       = useRef<HTMLDivElement>(null);
    const grainRef       = useRef<HTMLCanvasElement>(null);
    const canvasRef      = useRef<HTMLCanvasElement>(null);
    const imagesRef      = useRef<HTMLImageElement[]>([]);
    const lastDrawnRef   = useRef(-1);
    const introsDoneRef  = useRef(false);
    const rafRef         = useRef<number | null>(null);
    const lastTimeRef    = useRef<number | null>(null);
    const scrollRangeRef = useRef(getScrollRange());

    const drawFrame = (idx: number) => {
        const canvas = canvasRef.current;
        const imgs   = imagesRef.current;
        if (!canvas || !imgs[idx]) return;
        if (lastDrawnRef.current === idx) return;
        lastDrawnRef.current = idx;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const img = imgs[idx];
        const dpr = window.devicePixelRatio || 1;

        const cw = canvas.width;
        const ch = canvas.height;
        const lw = cw / dpr;
        const lh = ch / dpr;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;
        const isMobile = window.innerWidth < 768;

        // Always cover — fill the viewport, crop as needed
        // On mobile anchor slightly toward top so subject stays visible
        const scale = Math.max(lw / iw, lh / ih);
        const sw = iw * scale;
        const sh = ih * scale;
        const sx = (lw - sw) / 2;
        const sy = isMobile
            ? (lh - sh) * 0.25  // anchor 25% from top on mobile
            : (lh - sh) / 2;    // dead center on desktop

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, sx * dpr, sy * dpr, sw * dpr, sh * dpr);
    };

    useGrain(grainRef);

    // Resize canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            const w   = canvas.offsetWidth;
            const h   = canvas.offsetHeight;
            canvas.width  = Math.round(w * dpr);
            canvas.height = Math.round(h * dpr);
            scrollRangeRef.current = getScrollRange();
            if (wrapperRef.current) {
                wrapperRef.current.style.height = `calc(100svh + ${scrollRangeRef.current}px)`;
            }
            const f = lastDrawnRef.current >= 0 ? lastDrawnRef.current : 0;
            lastDrawnRef.current = -1;
            drawFrame(f);
        };

        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    // Phase 1: preload → play intro 0 → last frame
    useEffect(() => {
        let loaded = 0;
        const imgs: HTMLImageElement[] = Array(TOTAL);

        const startIntro = () => {
            imagesRef.current = imgs;
            drawFrame(0);
            lastDrawnRef.current = 0;

            const tick = (timestamp: number) => {
                if (!lastTimeRef.current) lastTimeRef.current = timestamp;
                const elapsed = timestamp - lastTimeRef.current;
                if (elapsed >= 1000 / FPS) {
                    lastTimeRef.current = timestamp;
                    const next = lastDrawnRef.current + 1;
                    if (next < TOTAL) {
                        drawFrame(next);
                    } else {
                        introsDoneRef.current = true;
                        return;
                    }
                }
                rafRef.current = requestAnimationFrame(tick);
            };
            rafRef.current = requestAnimationFrame(tick);
        };

        FRAMES.forEach((src, i) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                imgs[i] = img;
                loaded++;
                if (loaded === TOTAL) startIntro();
            };
        });

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    // Phase 2: scroll → scrub frames in reverse
    useEffect(() => {
        const onScroll = () => {
            const wrapper = wrapperRef.current;
            if (!wrapper) return;

            const SCROLL_RANGE = scrollRangeRef.current;
            const top      = wrapper.getBoundingClientRect().top;
            const scrolled = Math.max(-top, 0);
            const progress = Math.min(scrolled / SCROLL_RANGE, 1);

            if (introsDoneRef.current) {
                const frameProgress = Math.min(scrolled / SCROLL_RANGE, 1);
                const frameIdx = Math.round((1 - frameProgress) * (TOTAL - 1));
                drawFrame(frameIdx);
            }

            if (labelsRef.current) {
                const travel = window.innerWidth < 768 ? 120 : 220;
                labelsRef.current.style.transform = `translateY(calc(-50% - ${progress * travel}px))`;
                labelsRef.current.style.opacity   = `${1 - progress * 2}`;
            }

            if (marqueeRef.current) {
                const travel = window.innerWidth < 768 ? 200 : 400;
                marqueeRef.current.style.transform = `translateY(calc(0px - ${progress * travel}px))`;
                marqueeRef.current.style.opacity   = `${1 - progress * 1.5}`;
            }

            if (blackRef.current) {
                const blackProgress = Math.max((progress - 0.5) / 0.5, 0);
                blackRef.current.style.opacity = `${blackProgress}`;
            }
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
        <div
            ref={wrapperRef}
            style={{ height: `calc(100svh + ${scrollRangeRef.current}px)` }}
        >
            <div className="sticky top-0 h-svh w-full overflow-hidden flex flex-col text-white">

                {/* Frame canvas */}
                <div className="absolute inset-0 z-0" style={{ background: '#000' }}>
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full"
                        style={{ display: 'block' }}
                    />
                </div>

                {/* Black overlay */}
                <div
                    ref={blackRef}
                    className="absolute inset-0 z-[1] bg-black opacity-0 will-change-[opacity]"
                />

                {/* Grain overlay */}
                <canvas
                    ref={grainRef}
                    aria-hidden="true"
                    className="absolute inset-0 z-[2] w-full h-full pointer-events-none"
                />

                {/* Descriptor labels */}
                <div
                    ref={labelsRef}
                    className="absolute z-20 w-full top-1/2 -translate-y-1/2 flex justify-between px-6 sm:px-10 text-[10px] sm:text-xs tracking-widest pointer-events-none will-change-transform"
                >
                    <span>modern</span>
                    <span className="hidden sm:inline">high quality</span>
                    <span>fresh</span>
                </div>

                {/* Marquee */}
                <div
                    ref={marqueeRef}
                    className="absolute top-[55%] sm:top-[60%] left-0 w-full z-20 overflow-hidden will-change-transform"
                    aria-label="Overtake time with us"
                >
                    <div className="flex w-max animate-marquee">
                        <span className="text-[clamp(48px,12vw,180px)] font-extrabold leading-none whitespace-nowrap tracking-tight">
                            {marqueeText}
                        </span>
                        <span
                            className="text-[clamp(48px,12vw,180px)] font-extrabold leading-none whitespace-nowrap tracking-tight"
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
