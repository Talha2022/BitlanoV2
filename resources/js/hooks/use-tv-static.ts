import { useEffect, useRef } from 'react';

/**
 * Attaches an animated TV static canvas to a container element.
 * The canvas is absolutely positioned, covers the full container,
 * and runs at the display's refresh rate.
 *
 * @param alpha  Per-pixel opacity 0–255. Default 14 (~5.5%) — subtle grain.
 */
export function useTvStatic(alpha = 10) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
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
            if (width === 0 || height === 0) {
                raf = requestAnimationFrame(draw);
                return;
            }
            const imageData = ctx.createImageData(width, height);
            const buf = imageData.data;
            for (let i = 0; i < buf.length; i += 4) {
                // 4% of pixels get a dim speckle, rest are transparent black
                // This keeps the bg visually black while still showing grain texture
                if (Math.random() < 0.04) {
                    const v    = Math.random() * 120 | 0;
                    buf[i]     = v;
                    buf[i + 1] = v;
                    buf[i + 2] = v;
                    buf[i + 3] = 180;
                } else {
                    buf[i + 3] = 0; // fully transparent
                }
            }
            ctx.putImageData(imageData, 0, 0);
            raf = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
        };
    }, [alpha]);

    return canvasRef;
}
