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
                'relative border border-white/[0.08] bg-[#1a1a1a] overflow-hidden',
                className,
            )}
        >
            {/* TV static grain */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
            />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/20 z-10" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-white/20 z-10" />
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-white/20 z-10" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/20 z-10" />

            {/* Content above grain */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
