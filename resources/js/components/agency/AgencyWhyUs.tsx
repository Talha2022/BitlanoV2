import { useRef } from 'react';
import { useGrain } from '@/hooks/use-grain';
import { motion } from 'motion/react';

export default function AgencyWhyUs() {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <section className="relative overflow-hidden bg-black text-white pt-[100px] md:pt-[130px] lg:pt-[150px] 2xl:pt-[200px]">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />

            {/* Container matching lay__container */}
            <div className="relative z-10 w-full max-w-[2000px] mx-auto px-[6vw] sm:px-10 lg:px-[60px]">
                {/* 12-column Swiss grid matching utl__grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
                    className="grid grid-cols-12 gap-5 w-full"
                >
                    {/* Left: Side heading matching utl__side-heading */}
                    <h3 className="col-span-12 md:col-span-3 lg:col-span-5 text-[16px] font-normal leading-[1.1] text-[#fffffff5] m-0">
                        Why us
                    </h3>

                    {/* Right: Paragraph block matching utl__grid-block & utl__paragraph */}
                    <div className="col-span-12 md:col-span-9 lg:col-span-7">
                        <p className="text-left text-[#fffffff5] text-[20px] md:text-[22px] leading-[1.3] font-normal m-0">
                            Yes, we're young. Yes, we live at the cutting edge and speak the language
                            of the present day fluently in and around the digital world. Yes, we mix
                            our visionary mindset with timeless quality. Yes, we are snappy,
                            provocative and competitive. But no, we haven't finished learning yet and
                            we're still a long way off.
                        </p>
                    </div>
                </motion.div>

                {/* Divider line matching utl__line with rows-150 spacing */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
                    className="origin-left w-full h-px bg-white/20 mt-[100px] md:mt-[130px] lg:mt-[150px] 2xl:mt-[200px]"
                />
            </div>
        </section>
    );
}

