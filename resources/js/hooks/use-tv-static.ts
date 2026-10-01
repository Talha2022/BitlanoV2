import { useEffect, useRef } from 'react';

const TILE_SIZE = 256;
const NUM_TILES = 4;
const STATIC_FPS = 12;

let tileCanvases: HTMLCanvasElement[] | null = null;

function getTileCanvases(): HTMLCanvasElement[] {
    if (tileCanvases) return tileCanvases;

    tileCanvases = [];
    for (let t = 0; t < NUM_TILES; t++) {
        const tile = document.createElement('canvas');
        tile.width = TILE_SIZE;
        tile.height = TILE_SIZE;
        const tileCtx = tile.getContext('2d');
        if (tileCtx) {
            const imageData = tileCtx.createImageData(TILE_SIZE, TILE_SIZE);
            const buf = imageData.data;
            for (let i = 0; i < buf.length; i += 4) {
                if (Math.random() < 0.04) {
                    const v = (Math.random() * 120) | 0;
                    buf[i] = v;
                    buf[i + 1] = v;
                    buf[i + 2] = v;
                    buf[i + 3] = 180;
                } else {
                    buf[i + 3] = 0;
                }
            }
            tileCtx.putImageData(imageData, 0, 0);
            tileCanvases.push(tile);
        }
    }
    return tileCanvases;
}

/**
 * Attaches an animated TV static canvas to a container element.
 * Uses pre-rendered offscreen tiles for optimal performance.
 */
export function useTvStatic(alpha = 10) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const tiles = getTileCanvases();
        if (tiles.length === 0) return;

        let raf: number;
        let last = 0;
        let isVisible = true;
        const interval = 1000 / STATIC_FPS;

        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
            },
            { threshold: 0 },
        );
        observer.observe(canvas);

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const draw = (now: number) => {
            raf = requestAnimationFrame(draw);
            if (!isVisible) return;
            if (now - last < interval) return;
            last = now;

            const { width, height } = canvas;
            if (width === 0 || height === 0) return;

            const randomTile = tiles[Math.floor(Math.random() * tiles.length)];
            const pattern = ctx.createPattern(randomTile, 'repeat');
            if (pattern) {
                ctx.clearRect(0, 0, width, height);
                ctx.fillStyle = pattern;
                ctx.fillRect(0, 0, width, height);
            }
        };
        raf = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(raf);
            observer.disconnect();
            window.removeEventListener('resize', resize);
        };
    }, [alpha]);

    return canvasRef;
}
