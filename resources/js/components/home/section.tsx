import { forwardRef, type ElementType, type PropsWithChildren } from 'react';
import { useTvStatic } from '@/hooks/use-tv-static';

type Width = 'full' | 'wide' | 'default' | 'narrow' | 'tight';

type Props = PropsWithChildren<{
    width?: Width;
    className?: string;
    innerClassName?: string;
    /** Static grain intensity 0–255. Default 14 (~5.5%). Pass 0 to disable. */
    staticAlpha?: number;
    as?: ElementType;
}>;


const maxWidths: Record<Width, string> = {
    full:    'max-w-none',
    wide:    'max-w-[1400px]',
    default: 'max-w-7xl',
    narrow:  'max-w-5xl',
    tight:   'max-w-3xl',
};

/**
 * Base wrapper for every home page section.
 * Provides: black background, animated TV static, consistent horizontal padding,
 * and a centred max-width container.
 */
const Section = forwardRef<HTMLElement, Props>(function Section(
    {
        width = 'default',
        className = '',
        innerClassName = '',
        staticAlpha = 10,
        as: Tag = 'section',
        children,
    },
    ref,
) {
    const grainRef = useTvStatic(staticAlpha);

    return (
        <Tag
            ref={ref}
            className={`relative w-full overflow-hidden bg-black px-6 sm:px-10 ${className}`}
        >
            {/* TV static overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full"
                style={{ zIndex: 0 }}
            />

            {/* Content */}
            <div className={`relative z-10 ${maxWidths[width]} mx-auto w-full ${innerClassName}`}>
                {children}
            </div>
        </Tag>
    );
});

export default Section;
