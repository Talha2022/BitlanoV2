import { useGrain } from '@/hooks/use-grain';
import { useRef } from 'react';

export default function AgencyHero() {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);
    return (
        <>
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />

            {/* Hero */}
            <div className="relative z-10 px-6 sm:px-10 pt-8 sm:pt-12 pb-10 sm:pb-16">
                <h1 className="text-[clamp(56px,16vw,200px)] font-bold leading-none tracking-tight mt-12 mb-16 sm:mb-32">
                    Agency
                </h1>
                <div className="border-t border-white/10" />
            </div>
        </>
    )
}