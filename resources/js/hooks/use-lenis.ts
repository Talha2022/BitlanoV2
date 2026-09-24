import { useEffect } from 'react';
import Lenis from 'lenis';

type LenisScrollCallback = (e: any) => void;

let lenisInstance: Lenis | null = null;
const scrollSubscribers = new Set<LenisScrollCallback>();

export function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 1.5,
        });

        lenisInstance = lenis;
        scrollSubscribers.forEach((cb) => lenis.on('scroll', cb));

        let raf: number;
        const tick = (time: number) => {
            lenis.raf(time);
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(raf);
            scrollSubscribers.forEach((cb) => lenis.off('scroll', cb));
            lenis.destroy();
            lenisInstance = null;
        };
    }, []);
}

/** Access the Lenis instance from outside React (e.g. scroll event listeners) */
export function getLenis() {
    return lenisInstance;
}

/** Subscribe to Lenis scroll events reliably regardless of component mount order */
export function subscribeLenis(callback: LenisScrollCallback): () => void {
    scrollSubscribers.add(callback);
    if (lenisInstance) {
        lenisInstance.on('scroll', callback);
    }
    return () => {
        scrollSubscribers.delete(callback);
        if (lenisInstance) {
            lenisInstance.off('scroll', callback);
        }
    };
}

