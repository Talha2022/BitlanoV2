import { useRef } from 'react';
import { useGrain } from '@/hooks/use-grain';
import { motion } from 'motion/react';

export default function AgencyAbout() {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <section className="relative overflow-hidden bg-black text-white pt-[100px] md:pt-[130px] lg:pt-[150px] 2xl:pt-[200px] pb-[80px] md:pb-[100px] lg:pb-[120px]">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />

            {/* Container matching lay__container */}
            <div className="relative z-10 w-full max-w-[2000px] mx-auto px-[6vw] sm:px-10 lg:px-[60px]">
                {/* Lead text block matching utl-lead__block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
                    className="relative z-10 w-full"
                >
                    {/* Inline-block heading matching utl-lead__heading */}
                    <h5 className="inline-block text-[16px] font-normal leading-none tracking-normal text-[#fffffff5] mr-[4em] md:mr-[8em] align-baseline m-0">
                        This is Bitlano
                    </h5>

                    {/* Inline lead paragraph flowing from the heading matching utl-lead__paragraph */}
                    <p className="inline text-white font-light leading-[1.25] tracking-[-0.015em] text-[30px] sm:text-[40px] lg:text-[clamp(16px,4vw,75px)] align-baseline m-0">
                        Over the last five years, we have grown from a team of three to a team
                        of twenty. The three founders of Bitlano have built a prosperous
                        company from a high school graduation project. Everything is one hundred
                        percent &quot;self-made&quot;. While others read theory books, we feel the
                        spirit of the times, set high goals and give our all to achieve them.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export { default as AgencyWhyUs } from './AgencyWhyUs';
