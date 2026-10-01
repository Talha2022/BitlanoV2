import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { useGrain } from '@/hooks/use-grain';

const TOTAL_FRAMES = 200;
const URL_PREFIX =
    'https://andreatuysuzian.com/wastetide/sequence/Flag_DeMain_';

export default function SequenceCTA() {
    const sectionRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const grainRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useGrain(grainRef);

    // Preload image sequence frames
    useEffect(() => {
        let isCancelled = false;
        const loadedImages: HTMLImageElement[] = Array.from({
            length: TOTAL_FRAMES,
        });
        let loadedCount = 0;

        for (let i = 0; i < TOTAL_FRAMES; i++) {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            const frameStr = String(i + 1).padStart(5, '0');
            img.src = `${URL_PREFIX}${frameStr}.webp`;
            img.onload = () => {
                loadedImages[i] = img;
                loadedCount++;
                if (loadedCount === 1 && !isCancelled) {
                    imagesRef.current = loadedImages;
                    setIsLoaded(true);
                }
            };
            img.onerror = () => {
                loadedCount++;
            };
            loadedImages[i] = img;
        }
        imagesRef.current = loadedImages;

        return () => {
            isCancelled = true;
        };
    }, []);

    // Draw frame helper function using object-fit: cover math and white-background keying
    const drawFrame = (frameIndex: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        const imgs = imagesRef.current;
        const img = imgs[frameIndex];
        if (!img || !img.complete || img.naturalWidth === 0) return;

        const width = canvas.width;
        const height = canvas.height;
        ctx.clearRect(0, 0, width, height);

        const imgRatio = img.width / img.height;
        const canvasRatio = width / height;
        let drawWidth: number;
        let drawHeight: number;

        if (imgRatio > canvasRatio) {
            drawHeight = height;
            drawWidth = height * imgRatio;
        } else {
            drawWidth = width;
            drawHeight = width / imgRatio;
        }

        // Center draw
        const offsetX = (width - drawWidth) * 0.5;
        const offsetY = (height - drawHeight) * 0.5;

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

        // Key out white / near-white background from the frame images
        try {
            const imageData = ctx.getImageData(0, 0, width, height);
            const data = imageData.data;
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                if (r > 240 && g > 240 && b > 240) {
                    const minVal = Math.min(r, g, b);
                    const alpha = Math.max(0, 255 - (minVal - 240) * 17);
                    data[i + 3] = Math.min(data[i + 3], alpha);
                }
            }
            ctx.putImageData(imageData, 0, 0);
        } catch {
            // Fallback if cross-origin restricts getImageData
        }
    };

    // Update canvas resolution & handle resize / scroll
    useEffect(() => {
        const handleResizeAndScroll = () => {
            const canvas = canvasRef.current;
            const section = sectionRef.current;
            if (!canvas || !section) return;

            // Resize canvas to match display size
            const rect = canvas.getBoundingClientRect();
            if (canvas.width !== rect.width || canvas.height !== rect.height) {
                canvas.width = rect.width;
                canvas.height = rect.height;
            }

            // Calculate scroll progress across the section
            const secRect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const totalScrollDistance = secRect.height + windowHeight;
            const scrolled = windowHeight - secRect.top;
            const progress = Math.max(
                0,
                Math.min(1, scrolled / totalScrollDistance),
            );

            const frameIndex = Math.min(
                TOTAL_FRAMES - 1,
                Math.floor(progress * TOTAL_FRAMES),
            );

            drawFrame(frameIndex);
        };

        window.addEventListener('resize', handleResizeAndScroll);
        window.addEventListener('scroll', handleResizeAndScroll, {
            passive: true,
        });
        handleResizeAndScroll();

        return () => {
            window.removeEventListener('resize', handleResizeAndScroll);
            window.removeEventListener('scroll', handleResizeAndScroll);
        };
    }, [isLoaded]);

    return (
        <section
            ref={sectionRef}
            className="sequence_section relative w-full overflow-hidden bg-black font-sans text-white select-none"
        >
            {/* Grain overlay for the section background */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />

            <div className="sequence_wrap relative z-10 w-full">
                <div className="sequence_content relative flex items-center justify-center">
                    <div className="sequence_component relative w-full">
                        {/* Container Medium */}
                        <div className="container-medium relative mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-12">
                            {/* Sequence Container */}
                            <div className="sequence_container relative z-10 flex min-h-[550px] flex-col items-start justify-between px-4 py-16 sm:px-8 md:flex-row md:items-stretch md:py-24 lg:min-h-[680px]">
                                {/* TOP-LEFT / MAIN TITLE */}
                                <div className="sequence_title-wrap w-full md:max-w-[50%] lg:max-w-[45%]">
                                    <h2 className="sequence_title text-[2.75rem] leading-[0.92] font-black tracking-tighter text-white uppercase sm:text-6xl md:text-7xl lg:text-[5.25rem]">
                                        Turn ideas
                                        <br />
                                        into impact.
                                        <br />
                                        Hack the flow.
                                        <br />
                                        Join Bitlano.
                                    </h2>
                                </div>

                                {/* BOTTOM-RIGHT / DESCRIPTION & BUTTONS */}
                                <div className="sequence_contain-wrap mt-12 flex w-full flex-col items-start justify-end gap-6 self-end md:mt-0 md:max-w-[380px] md:items-start">
                                    <p className="text-[11px] leading-[1.9] font-medium tracking-[0.14em] text-white/60 uppercase sm:text-[12px]">
                                        At Bitlano, we turn bold concepts into
                                        new possibilities.
                                        <br />
                                        We combine strategic thinking and
                                        fearless execution to transform your
                                        brand into meaningful, sustainable
                                        value.
                                    </p>

                                    <div className="sequence_button-wrap flex flex-row flex-wrap items-center gap-3">
                                        {/* Primary Button */}
                                        <Link
                                            href="/contact"
                                            className="button inline-flex items-center justify-center rounded-none bg-white px-7 py-3.5 text-xs font-semibold tracking-wide whitespace-nowrap text-black uppercase transition-all duration-300 hover:bg-white/80 sm:text-sm"
                                        >
                                            Get in touch
                                        </Link>

                                        {/* Secondary Button */}
                                        <a
                                            href="mailto:info@bitlano.com"
                                            className="button_secondary group relative inline-flex items-center justify-center rounded-none border border-white/40 bg-transparent px-7 py-3.5 text-xs font-medium tracking-wide whitespace-nowrap text-white uppercase transition-all duration-300 hover:bg-white hover:text-black sm:text-sm"
                                        >
                                            <span className="relative z-10">
                                                Book a call
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* CANVAS WRAP (Desktop Canvas Animation) */}
                            <div className="canvas_wrap pointer-events-none absolute inset-0 z-0 hidden h-full w-full items-center justify-center md:flex">
                                <canvas
                                    ref={canvasRef}
                                    className="sequence_canvas h-full w-full translate-x-[2%] object-cover"
                                />
                            </div>

                            {/* MOBILE FALLBACK ILLUSTRATION */}
                            <div className="sequence_illu-mobile relative z-0 flex w-full items-center justify-center py-6 md:hidden">
                                <img
                                    src="/assets/subservice/sequence-illu.avif"
                                    alt="Bitlano sequence illustration"
                                    className="sequence_illu max-h-[360px] w-auto object-contain select-none"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAKE RUNWAY SECTION */}
            <div className="fake_wrap pointer-events-none relative mx-auto h-28 w-full max-w-[90rem] px-4 sm:px-6 md:h-48 lg:px-12">
                <div className="fake_container relative h-full w-full" />
            </div>
        </section>
    );
}
