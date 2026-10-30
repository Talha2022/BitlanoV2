import { useRef } from 'react';
import { useGrain } from '@/hooks/use-grain';
import { motion } from 'motion/react';

export default function BlogHero() {
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

            <div className="relative z-10 mx-auto w-full max-w-[2000px] px-[6vw] sm:px-10 lg:px-[60px]">
                <div className="flex flex-col gap-[60px] md:gap-[80px] lg:gap-[100px]">
                    <div className="lay__block rows-80">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: [0.165, 0.84, 0.44, 1] }}
                            className="utl__h1 m-0 text-[60px] font-medium leading-[0.9] tracking-[-0.05em] text-[#fffffff5] md:text-[100px] lg:text-[150px]"
                        >
                            Blog
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1], delay: 0.2 }}
                        className="utl__line h-px w-full origin-left bg-white/20"
                    />
                </div>
            </div>
        </section>
    );
}
