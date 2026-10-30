import { useRef } from 'react';
import { useGrain } from '@/hooks/use-grain';
import { motion } from 'motion/react';
import ScrollStackSection from '@/components/home/scroll-stack-section';

const sections = [
    {
        title: 'Brand Identity & Strategy',
        background:
            'linear-gradient(135deg, #200122 0%, #6f0000 100%)',
        foregroundImage: '/assets/homepage/expertise-branding.jpg',
    },
    {
        title: 'Websites & Digital Products',
        background:
            'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
        foregroundImage: '/assets/homepage/expertise-websites.jpg',
    },
    {
        title: 'Marketing & Growth',
        background:
            'linear-gradient(135deg, #F4A020 0%, #EE8020 25%, #E8551F 55%, #E8304A 80%, #DE2A3A 100%)',
        foregroundImage: '/assets/homepage/expertise-campaigning.jpg',
    },
    {
        title: 'AI & Automation',
        background:
            'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
        foregroundImage: '/assets/homepage/expertise-social.jpg',
    },
];

export default function WhyUsSection() {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <>
            {/* Why us text block */}
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
                            Why us
                        </h5>

                        {/* Inline lead paragraph flowing from the heading matching utl-lead__paragraph */}
                        <p className="inline text-white font-light leading-[1.25] tracking-[-0.015em] text-[30px] sm:text-[40px] lg:text-[clamp(16px,4vw,75px)] align-baseline m-0">
                            We see our clients as strategic partners. This
                            means: In close cooperation, we are there for a wide
                            range of marketing tasks. We implement our ideas and
                            concepts seamlessly — everything from a single
                            source. We are not satisfied with &quot;run-of-the-mill&quot;.
                            We challenge ourselves and others. This is how we
                            guarantee high-quality and sustainable results.
                        </p>
                    </motion.div>

                    
                </div>
            </section>

            {/* Scroll-stacking service panels */}
            <ScrollStackSection sections={sections} />
        </>
    );
}
