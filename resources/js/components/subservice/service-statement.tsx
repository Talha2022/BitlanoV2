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
        <section className="relative overflow-hidden bg-black text-white">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />

            {/* Top border */}
            <div className="relative z-10 mx-6 border-t border-white/10 sm:mx-10" />

            {/* Upper block — label + large text */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 pt-12 pb-14 sm:px-10 sm:pt-16 sm:pb-20">
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-16">
                    {/* Left — small label */}
                    <div className="shrink-0 pt-2 sm:w-64">
                        <span className="text-xs tracking-widest text-white/50 uppercase">
                            {label}
                        </span>
                    </div>

                    {/* Right — large statement */}
                    <div className="flex-1">
                        <p className="text-2xl leading-tight font-light tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl">
                            {text}
                        </p>
                    </div>
                </div>
            </div>

            {/* Mid divider */}
            <div className="relative z-10 mx-6 border-t border-white/10 sm:mx-10" />

            {/* Lower block — stats */}
            <div className="relative z-10 px-6 pt-10 pb-12 sm:px-10 sm:pt-12 sm:pb-16">
                <div className="flex flex-wrap justify-center gap-10 sm:gap-24 lg:gap-72">
                    {stats.map(({ value, label: statLabel }) => (
                        <div key={statLabel} className="flex flex-col gap-2">
                            <span className="text-4xl leading-none font-light text-white sm:text-5xl lg:text-6xl">
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
            <div className="relative z-10 mx-6 border-b border-white/10 sm:mx-10" />
        </section>
    );
}
