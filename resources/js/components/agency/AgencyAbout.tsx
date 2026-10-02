import { useGrain } from '@/hooks/use-grain';
import { useRef } from 'react';

export default function AgencyAbout() {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);
    return (
        <section className="bg-black text-white px-6 sm:px-10 relative">

            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />

            {/* Top row — small label + body text */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 pb-14 sm:pb-20">
                <p className="text-xs tracking-widest text-white/50 sm:whitespace-nowrap shrink-0">
                    Why us
                </p>
                <div className="flex-1 sm:flex sm:justify-end">
                    <p className="text-sm text-white/70 leading-relaxed sm:max-w-xl sm:text-right">
                        Yes, we're young. Yes, we live at the cutting edge and speak the language
                        of the present day fluently in and around the digital world. Yes, we mix
                        our visionary mindset with timeless quality. Yes, we are snappy,
                        provocative and competitive. But no, we haven't finished learning yet and
                        we're still a long way off.
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 mb-14 sm:mb-20" />

            {/* Bottom block — large text */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 pb-20 sm:pb-32">
                <p className="text-xs tracking-widest text-white/50 sm:whitespace-nowrap shrink-0 pt-2">
                    This is ESE
                </p>
                <p className="text-[clamp(22px,4vw,52px)] font-light leading-tight tracking-tight">
                    Over the last five years, we have grown from a team of three to a team
                    of twenty. The three founders of the ESE Agency have built a prosperous
                    company from a high school graduation project. Everything is one hundred
                    percent "self-made". While others read theory books, we feel the spirit
                    of the times, set high goals and give our all to achieve them.
                </p>
            </div>

        </section>
    )
}
