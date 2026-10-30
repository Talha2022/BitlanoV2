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

            

            {/* Content above grain */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
