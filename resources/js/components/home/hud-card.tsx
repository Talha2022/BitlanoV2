import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useGrain } from '@/hooks/use-grain';
import type { ReactNode } from 'react';

interface HudCardProps {
    children: ReactNode;
    className?: string;
}

export function HudCard({ children, className }: HudCardProps) {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <div
            className={cn(
                'relative overflow-hidden bg-[#1a1a1a]',
                className,
            )}
            style={{
                boxShadow: 'inset 0 0 0 1px transparent',
            }}
        >
            {/* Gradient border — top bright, fades down */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                    background: 'transparent',
                    borderRadius: 'inherit',
                }}
            >
                {/* Top edge — brightest */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                {/* Bottom edge — faintest */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
                {/* Left edge — fades downward */}
                <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/25 via-white/10 to-white/[0.04]" />
                {/* Right edge — fades downward */}
                <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-white/25 via-white/10 to-white/[0.04]" />
            </div>

            {/* TV static grain */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />

            {/* Corner accents — slightly larger and brighter */}
            <div className="absolute top-0 left-0 z-20 h-3 w-3 border-t-[1.5px] border-l-[1.5px] border-white/40" />
            <div className="absolute top-0 right-0 z-20 h-3 w-3 border-t-[1.5px] border-r-[1.5px] border-white/40" />
            <div className="absolute bottom-0 left-0 z-20 h-3 w-3 border-b-[1.5px] border-l-[1.5px] border-white/40" />
            <div className="absolute right-0 bottom-0 z-20 h-3 w-3 border-r-[1.5px] border-b-[1.5px] border-white/40" />

            {/* Content above grain */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
