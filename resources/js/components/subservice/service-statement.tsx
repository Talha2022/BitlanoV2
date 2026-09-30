import { useRef } from 'react';
import { useGrain } from '@/hooks/use-grain';

interface Stat {
    value: string;
    label: string;
}

interface ServiceStatementProps {
    label?: string;
    text: string;
    stats?: Stat[];
}

/**
 * ServiceStatement — large editorial quote with stats below a divider.
 *
 * Props:
 *   label  – small top-left label (default "This is Bitlano")
 *   text   – the large statement paragraph
 *   stats  – array of { value, label } objects (default: Projects / Awards / Years)
 */
export default function ServiceStatement({
    label = 'This is Bitlano',
    text,
    stats = [
        { value: '80', label: 'Projects' },
        { value: '17', label: 'Awards' },
        { value: '7', label: 'Years of Experience' },
    ],
}: ServiceStatementProps) {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <section className="relative bg-black text-white overflow-hidden">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="absolute inset-0 z-0 w-full h-full pointer-events-none"
            />

            {/* Top border */}
            <div className="border-t border-white/10 mx-6 sm:mx-10 relative z-10" />

            {/* Upper block — label + large text */}
            <div className="relative z-10 px-6 sm:px-10 pt-12 sm:pt-16 pb-14 sm:pb-20 max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-16">
                    {/* Left — small label */}
                    <div className="sm:w-64 shrink-0 pt-2">
                        <span className="text-xs tracking-widest text-white/50 uppercase">
                            {label}
                        </span>
                    </div>

                    {/* Right — large statement */}
                    <div className="flex-1">
                        <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight tracking-tight text-white">
                            {text}
                        </p>
                    </div>
                </div>
            </div>

            {/* Mid divider */}
            <div className="border-t border-white/10 mx-6 sm:mx-10 relative z-10" />

            {/* Lower block — stats */}
            <div className="relative z-10 px-6 sm:px-10 pt-10 sm:pt-12 pb-12 sm:pb-16">
                <div className="flex justify-center gap-10 sm:gap-24 lg:gap-72 flex-wrap">
                    {stats.map(({ value, label: statLabel }) => (
                        <div key={statLabel} className="flex flex-col gap-2">
                            <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-none">
                                {value}
                            </span>
                            <span className="text-xs tracking-widest text-white/50 uppercase">
                                {statLabel}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom border */}
            <div className="border-b border-white/10 mx-6 sm:mx-10 relative z-10" />
        </section>
    );
}
