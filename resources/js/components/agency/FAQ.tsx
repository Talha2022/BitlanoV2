import { useState, useRef } from 'react';
import { HudCard } from '@/components/home/hud-card';
import { useGrain } from '@/hooks/use-grain';

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "How long does it take to design and develop a custom website?",
        answer: "The timeline for a custom website typically ranges from 4 to 12 weeks, depending on complexity, features, and the depth of the brand identity process. We prioritize quality and strategic alignment at every stage.",
    },
    {
        question: "Can you help with rebranding or improving an existing website?",
        answer: "Yes, we specialize in digital transformation. Whether it's a complete brand overhaul or a targeted UX/UI refresh, we analyze your current performance to create a more impactful and modern digital presence.",
    },
    {
        question: "Will the website be optimized for search engines (SEO)?",
        answer: "Absolutely. Every website we build includes professional on-page SEO. From semantic HTML and fast loading speeds to schema markup and metadata optimization, we ensure your site is built to rank and convert.",
    },
    {
        question: "Is responsive and mobile-first design included?",
        answer: "Mobile traffic accounts for over 60% of web usage. We design with a mobile-first mindset, ensuring your experience is flawless, fast, and high-converting across all devices.",
    },
    {
        question: "Do you offer ongoing support after the project is live?",
        answer: "We provide comprehensive maintenance and support packages including regular security updates, performance monitoring, content updates, and technical SEO support to ensure your digital asset remains at its peak.",
    },
    {
        question: "What technical stack do you use for development?",
        answer: "We use modern, high-performance technologies like React, Next.js, and TypeScript, often paired with Headless CMS or robust backend solutions. This ensures your site is scalable, secure, and future-proof.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <section className="relative overflow-hidden bg-black px-6 py-16 md:px-12 md:py-24 lg:px-16">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mb-10 text-center md:mb-16">
                    <h2 className="font-display mb-4 text-4xl leading-tight tracking-[0.12em] text-white uppercase md:mb-5 md:text-6xl lg:text-7xl">
                        Questions
                    </h2>
                    <p className="text-xs font-light tracking-[0.2em] text-white/50 uppercase md:text-sm">
                        Everything you need to know before we start.
                    </p>
                </div>

                {/* Two-column layout — stacks on mobile */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
                    {/* Left panel — full width on mobile, col-span-4 on lg */}
                    <div className="lg:col-span-4">
                        <HudCard className="flex flex-col justify-between p-6 md:p-8 lg:h-full lg:min-h-[300px]">
                            <div>
                                <h3 className="font-display mb-4 text-2xl font-extralight leading-tight tracking-[0.1em] text-white uppercase md:mb-6 md:text-3xl">
                                    Transformation<br />
                                    with Smart UX<br />
                                    &amp; Scalable Tech
                                </h3>
                                <p className="text-xs font-light leading-[1.8] tracking-wide text-white/55 md:text-sm">
                                    You have the vision — we engineer for the future. From predictive UX to autonomous
                                    maintenance, we build scalable digital products that think, adapt, and grow with
                                    your audience.
                                </p>
                            </div>
                        </HudCard>
                    </div>

                    {/* Right — accordion */}
                    <div className="space-y-2 lg:col-span-8 lg:space-y-3">
                        {faqItems.map((item, i) => (
                            <div
                                key={i}
                                className="group relative cursor-pointer"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                {/* glass bg */}
                                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-sm" />
                                {/* border */}
                                <div className={`absolute inset-0 border transition-colors duration-500 ${openIndex === i ? 'border-white/25' : 'border-white/[0.10] group-hover:border-white/[0.18]'}`} />
                                {/* inset border */}
                                <div className="absolute inset-[3px] border border-white/[0.03]" />

                                <div className="relative z-10 px-4 py-4 sm:px-7 sm:py-5">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <span className="mt-0.5 flex-shrink-0 font-mono text-[8px] tracking-[0.25em] text-white/25">
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                            <h3 className="text-xs font-light leading-snug tracking-wide text-white/90 sm:text-sm">
                                                {item.question}
                                            </h3>
                                        </div>
                                        {/* toggle icon */}
                                        <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center border transition-all duration-500 sm:h-6 sm:w-6 ${openIndex === i ? 'border-white/40 bg-white/10' : 'border-white/15'}`}>
                                            <svg
                                                className={`h-2.5 w-2.5 text-white/60 transition-transform duration-500 sm:h-3 sm:w-3 ${openIndex === i ? 'rotate-45' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* answer */}
                                    <div className={`grid transition-all duration-500 ease-in-out ${openIndex === i ? 'mt-4 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden">
                                            <div className="relative mb-3 h-px">
                                                <div className="absolute inset-0 bg-white/[0.08]" />
                                                <div className="absolute left-0 top-0 h-px w-16 bg-gradient-to-r from-white/20 to-transparent" />
                                            </div>
                                            <p className="pl-6 text-xs font-light leading-[1.8] tracking-wide text-white/60 sm:pl-10 sm:text-sm">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
