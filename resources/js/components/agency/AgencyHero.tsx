import { useRef } from 'react';
import { useGrain } from '@/hooks/use-grain';
import { motion } from 'motion/react';

export default function AgencyHero() {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <section className="relative overflow-hidden bg-black text-white pt-[100px] md:pt-[130px] lg:pt-[180px]">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />

            {/* Container matching lay__container */}
            <div className="relative z-10 w-full max-w-[2000px] mx-auto px-[6vw] sm:px-10 lg:px-[60px]">
                {/* Heading matching utl__h1 */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.165, 0.84, 0.44, 1] }}
                    className="text-[60px] md:text-[100px] lg:text-[150px] font-medium leading-[0.9] tracking-[-0.05em] text-[#fffffff5] m-0"
                >
                    Agency
                </motion.h1>

                {/* Divider line matching utl__line with rows-150 spacing */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1], delay: 0.2 }}
                    className="origin-left w-full h-px bg-white/20 mt-[100px] md:mt-[130px] lg:mt-[150px] 2xl:mt-[200px]"
                />
            </div>
        </section>
    );
}
