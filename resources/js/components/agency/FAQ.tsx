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
        <section className="relative bg-black py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Heading */}
                <div className="mb-16 text-center">
                    <h2 className="font-cardonas text-5xl md:text-6xl lg:text-7xl tracking-[0.12em] text-white mb-5 leading-tight uppercase">
                        Questions
                    </h2>
                    <p className="text-white/50 text-sm font-light tracking-[0.2em] uppercase">
                        Everything you need to know before we start.
                    </p>
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left — sticky label panel */}
                    <div className="lg:col-span-4">
                        <HudCard className="p-8 h-full flex flex-col justify-between min-h-[300px]">
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-1 h-1 bg-white/20" />
                                    <span className="text-white/40 text-[10px] font-mono tracking-[0.35em]">SYSTEM · FAQ</span>
                                </div>
                                <div className="relative h-px mb-8">
                                    <div className="absolute inset-0 bg-white/[0.08]" />
                                    <div className="absolute left-0 top-0 h-px bg-gradient-to-r from-white/30 to-transparent w-12" />
                                </div>
                                <h3 className="text-white text-3xl font-extralight tracking-[0.1em] leading-tight uppercase mb-6">
                                    Transformation<br />
                                    with Smart UX<br />
                                    &amp; Scalable Tech
                                </h3>
                                <p className="text-white/55 text-sm font-light tracking-wide leading-[1.8]">
                                    You have the vision — we engineer for the future. From predictive UX to autonomous
                                    maintenance, we build scalable digital products that think, adapt, and grow with
                                    your audience.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-white/20" />
                                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                                <span className="text-white/20 text-[8px] font-mono tracking-[0.3em]">{faqItems.length} ITEMS</span>
                            </div>
                        </HudCard>
                    </div>

                    {/* Right — accordion */}
                    <div className="lg:col-span-8 space-y-3">
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
                                {/* corner brackets */}
                                <svg className="absolute top-0 left-0 w-6 h-6 text-white/25 group-hover:text-white/50 transition-colors duration-500" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                                    <path d="M1 10 L1 1 L10 1" strokeWidth="0.7" />
                                </svg>
                                <svg className="absolute top-0 right-0 w-6 h-6 text-white/25 group-hover:text-white/50 transition-colors duration-500" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                                    <path d="M30 1 L39 1 L39 10" strokeWidth="0.7" />
                                </svg>

                                <div className="relative z-10 px-7 py-5">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <span className="text-white/25 text-[8px] font-mono tracking-[0.25em] flex-shrink-0">
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                            <h3 className="text-white/90 text-sm font-light tracking-wide">{item.question}</h3>
                                        </div>
                                        {/* toggle icon */}
                                        <div className={`w-6 h-6 border flex-shrink-0 flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'border-white/40 bg-white/10' : 'border-white/15'}`}>
                                            <svg
                                                className={`w-3 h-3 text-white/60 transition-transform duration-500 ${openIndex === i ? 'rotate-45' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* answer */}
                                    <div className={`grid transition-all duration-500 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                        <div className="overflow-hidden">
                                            <div className="relative h-px mb-4">
                                                <div className="absolute inset-0 bg-white/[0.08]" />
                                                <div className="absolute left-0 top-0 h-px bg-gradient-to-r from-white/20 to-transparent w-16" />
                                            </div>
                                            <p className="text-white/60 text-sm font-light tracking-wide leading-[1.8] pl-10">
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
