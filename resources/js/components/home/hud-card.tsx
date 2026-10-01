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
                'relative overflow-hidden border border-white/[0.08] bg-[#1a1a1a]',
                className,
            )}
        >
            {/* TV static grain */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 z-10 h-1.5 w-1.5 border-t border-l border-white/20" />
            <div className="absolute top-0 right-0 z-10 h-1.5 w-1.5 border-t border-r border-white/20" />
            <div className="absolute bottom-0 left-0 z-10 h-1.5 w-1.5 border-b border-l border-white/20" />
            <div className="absolute right-0 bottom-0 z-10 h-1.5 w-1.5 border-r border-b border-white/20" />

            {/* Content above grain */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
