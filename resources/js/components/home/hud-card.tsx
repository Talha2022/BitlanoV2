import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface HudCardProps {
    children: ReactNode;
    className?: string;
}

export function HudCard({ children, className }: HudCardProps) {
    return (
        <div
            className={cn(
                'relative border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm overflow-hidden',
                className,
            )}
        >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/20" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-white/20" />
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-white/20" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/20" />

            {children}
        </div>
    );
}
