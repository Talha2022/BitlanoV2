import { useRef } from 'react';
import { useGrain } from '@/hooks/use-grain';
import ScrollStackSection from '@/components/home/scroll-stack-section';

const sections = [
    {
        label:           'Campaigning',
        title:           'Storytelling — Employer Branding',
        taglines:        ['Bold ideas. Real impact.', 'We make brands unforgettable.', 'From concept to campaign.'],
        background:      'linear-gradient(135deg, #F4A020 0%, #EE8020 25%, #E8551F 55%, #E8304A 80%, #DE2A3A 100%)',
        foregroundImage: '/assets/homepage/expertise-campaigning.jpg',
    },
    {
        label:           'Social Media',
        title:           'Content — Community — Growth',
        taglines:        ['Always-on brand presence.', 'Scroll-stopping content.', 'Built for the feed.'],
        background:      'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
        foregroundImage: '/assets/homepage/expertise-social.jpg',
    },
    {
        label:           'Websites',
        title:           'Design — Build — Launch',
        taglines:        ['Pixel-perfect execution.', 'Fast. Beautiful. Functional.', 'Your brand, online.'],
        background:      'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
        foregroundImage: '/assets/homepage/expertise-websites.jpg',
    },
    {
        label:           'Branding',
        title:           'Identity — Strategy — Voice',
        taglines:        ['Timeless meets zeitgeist.', 'Brands that mean something.', 'Consistency at every touchpoint.'],
        background:      'linear-gradient(135deg, #200122 0%, #6f0000 100%)',
        foregroundImage: '/assets/homepage/expertise-branding.jpg',
    },
];

export default function WhyUsSection() {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <>
            {/* Why us text block */}
            <section className="relative bg-black overflow-hidden text-white">
                {/* Grain overlay */}
                <canvas
                    ref={grainRef}
                    aria-hidden="true"
                    className="absolute inset-0 z-10 w-full h-full pointer-events-none"
                />

                <div className="relative z-20 px-6 sm:px-10 py-16 sm:py-24">
                    <div className="relative">
                        {/* "Why us" — floats top-left in the text-indent gap */}
                        <p className="absolute top-[3em] left-0 text-[10px] sm:text-xs tracking-widest text-white/50 whitespace-nowrap leading-none">
                            Why us
                        </p>

                        {/* Full-width paragraph, first line indented to clear the label */}
                        <p
                            className="text-[clamp(28px,4.5vw,64px)] font-light leading-[1.1] tracking-tight"
                            style={{ textIndent: 'clamp(80px, 12vw, 160px)' }}
                        >
                            We see our clients as strategic partners. This means: In close
                            cooperation, we are there for a wide range of marketing tasks. We
                            implement our ideas and concepts seamlessly — everything from a single
                            source. We are not satisfied with "run-of-the-mill". We challenge
                            ourselves and others. This is how we guarantee high-quality and
                            sustainable results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Scroll-stacking service panels */}
            <ScrollStackSection sections={sections} />
        </>
    );
}
