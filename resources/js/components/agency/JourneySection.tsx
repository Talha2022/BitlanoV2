import React, { useEffect, useRef, useState } from 'react';
import { useGrain } from '@/hooks/use-grain';
import { HudCard } from '@/components/home/hud-card';

export function JourneySection() {
    const journeyWrapperRef = useRef<HTMLDivElement>(null);
    const fullImageRef = useRef<HTMLDivElement>(null);
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);
    const front1Ref = useRef<HTMLDivElement>(null);
    const front2Ref = useRef<HTMLDivElement>(null);
    const front3Ref = useRef<HTMLDivElement>(null);
    const back1Ref = useRef<HTMLDivElement>(null);
    const back2Ref = useRef<HTMLDivElement>(null);
    const back3Ref = useRef<HTMLDivElement>(null);
    const grainRef = useRef<HTMLCanvasElement>(null);
    const grainMobileRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);
    useGrain(grainMobileRef);
    const [flippedCards, setFlippedCards] = useState([false, false, false]);

    const toggleCardFlip = (index: number) => {
        setFlippedCards(prev => {
            const next = [...prev];
            next[index] = !next[index];
            return next;
        });
    };

    useEffect(() => {
        if (window.innerWidth < 768) return;
        import('gsap').then(({ gsap }) => {
            import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger);

                const wrapper = journeyWrapperRef.current;
                const fullImg = fullImageRef.current;
                const c1 = card1Ref.current;
                const c2 = card2Ref.current;
                const c3 = card3Ref.current;
                if (!wrapper || !fullImg || !c1 || !c2 || !c3) return;

                // Initial state — cards hidden, full image visible
                gsap.set([c1, c2, c3], { opacity: 0, rotateY: 0 });
                gsap.set(fullImg, { opacity: 1, scale: 1 });

                const heading = wrapper.querySelector('#journey-heading');
                if (heading) gsap.set(heading, { opacity: 0, y: 20 });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: wrapper,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1.5,
                    }
                });

                // Phase 0: heading fades in on entry
                if (heading) {
                    tl.to(heading, { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' });
                }

                // Phase 1: HOLD - image sits, user focuses
                tl.to({}, { duration: 0.2 });

                // Phase 2: full image fades out, split panels fade in
                tl.to(fullImg, {
                    opacity: 0,
                    scale: 0.97,
                    duration: 0.2,
                    ease: 'power2.inOut'
                });
                tl.to([c1, c2, c3], {
                    opacity: 1,
                    duration: 0.15,
                    ease: 'power2.out'
                }, '<');

                // NEW: Hide fullImg completely once faded
                tl.set(fullImg, { display: 'none' });

                // Phase 3: panels drift apart slowly
                tl.to(c1, { x: '-6vw', duration: 0.25, ease: 'power3.inOut' });
                tl.to(c3, { x: '6vw', duration: 0.25, ease: 'power3.inOut' }, '<');

                // Phase 4: brief hold with cards separated
                tl.to({}, { duration: 0.05 });

                // Phase 5: staggered card flips
                tl.to(c1, { rotateY: 180, duration: 0.2, ease: 'power2.inOut' });
                tl.to(c2, { rotateY: 180, duration: 0.2, ease: 'power2.inOut' }, '<+0.05');
                tl.to(c3, { rotateY: 180, duration: 0.2, ease: 'power2.inOut' }, '<+0.05');

                // Fade in back faces as cards flip
                tl.to([back1Ref.current, back2Ref.current, back3Ref.current], { opacity: 1, duration: 0.1, ease: 'power2.out' }, '<+0.1');

                // NEW: Remove front images completely when flipped
                tl.set([front1Ref.current, front2Ref.current, front3Ref.current], { display: 'none' });

                // Ensure section background stays solid black
                if (wrapper) {
                    tl.to(wrapper, { backgroundColor: '#000', duration: 0.2 }, '<');
                }

                return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
            });
        });
    }, []);

    return (
        <>
            {/* Journey section — 300vh for scroll room */}
            <div ref={journeyWrapperRef} className="relative h-[300vh] bg-black hidden md:block">
                <div className="sticky top-20 h-screen overflow-hidden flex items-center justify-center bg-black">

                    {/* Grain overlay */}
                    <canvas ref={grainRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full" />

                    {/* Heading */}
                    <div className="absolute top-12 z-40 text-center px-4" style={{ opacity: 0 }} id="journey-heading">
                        <h2 className="text-4xl md:text-5xl font-extralight text-white tracking-[0.12em] uppercase">
                            Where are you <em className="not-italic font-light">in</em> your journey?
                        </h2>
                    </div>

                    {/* Full image — fades out as panels reveal */}
                    <div
                        ref={fullImageRef}
                        className="absolute z-30 overflow-hidden bg-black"
                        style={{ width: '70vw', height: '30vw' }}
                    >
                        <img src="/assets/agency/fullcard.webp" alt="" className="w-full h-full object-cover" />
                    </div>

                    {/* Split cards container */}
                    <div
                        className="relative z-20"
                        style={{ width: '70vw', height: '30vw', perspective: '1600px' }}
                    >
                        {/* Card 1 — left third */}
                        <div
                            ref={card1Ref}
                            className="absolute top-0 left-0"
                            style={{ width: '23.33vw', height: '30vw', opacity: 0, transformStyle: 'preserve-3d' }}
                        >
                            {/* Front — left slice of full image */}
                            <div ref={front1Ref} className="absolute inset-0 overflow-hidden" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                                <img src="/assets/agency/card1.webp" className="w-full h-full object-cover"
                                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <span className="text-white/70 text-[9px] font-mono tracking-[0.3em] uppercase">Starting Out</span>
                                </div>
                            </div>
                            {/* Back — HudCard */}
                            <div ref={back1Ref} className="absolute inset-0" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', zIndex: 10, opacity: 0 }}>
                                <HudCard className="w-full h-full flex flex-col justify-between p-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-1 h-1 bg-white/40" />
                                            <span className="text-white/30 text-[8px] font-mono tracking-[0.4em] uppercase">01 · STRATEGY</span>
                                        </div>
                                        <div className="relative h-px mb-6">
                                            <div className="absolute inset-0 bg-white/[0.08]" />
                                            <div className="absolute left-0 top-0 h-px bg-gradient-to-r from-white/40 to-transparent w-12" />
                                        </div>
                                        <h3 className="text-white/90 text-xl font-extralight tracking-[0.18em] uppercase mb-4 leading-none">Strategy</h3>
                                        <p className="text-white/50 text-[11px] font-light tracking-wide leading-relaxed">
                                            We craft tailored strategies that align with your vision and market dynamics.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-white/30" />
                                        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                                        <span className="text-white/30 text-[7px] font-mono tracking-[0.3em] uppercase">Phase · Alpha</span>
                                    </div>
                                </HudCard>
                            </div>
                        </div>

                        {/* Card 2 — center third */}
                        <div
                            ref={card2Ref}
                            className="absolute top-0 left-[23.33vw]"
                            style={{ width: '23.33vw', height: '30vw', opacity: 0, transformStyle: 'preserve-3d' }}
                        >
                            {/* Front — center slice */}
                            <div ref={front2Ref} className="absolute inset-0 overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
                                <img src="/assets/agency/card2.webp" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <span className="text-white/70 text-[9px] font-mono tracking-[0.3em] uppercase">Scaling Up</span>
                                </div>
                            </div>
                            {/* Back — HudCard */}
                            <div ref={back2Ref} className="absolute inset-0" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', zIndex: 10, opacity: 0 }}>
                                <HudCard className="w-full h-full flex flex-col justify-between p-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-1 h-1 bg-white/40" />
                                            <span className="text-white/30 text-[8px] font-mono tracking-[0.4em] uppercase">02 · EXECUTION</span>
                                        </div>
                                        <div className="relative h-px mb-6">
                                            <div className="absolute inset-0 bg-white/[0.08]" />
                                            <div className="absolute left-0 top-0 h-px bg-gradient-to-r from-white/40 to-transparent w-12" />
                                        </div>
                                        <h3 className="text-white/90 text-xl font-extralight tracking-[0.18em] uppercase mb-4 leading-none">Execution</h3>
                                        <p className="text-white/50 text-[11px] font-light tracking-wide leading-relaxed">
                                            We bring ideas to life with precision, creativity, and technical excellence.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-white/30" />
                                        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                                        <span className="text-white/30 text-[7px] font-mono tracking-[0.3em] uppercase">Phase · Beta</span>
                                    </div>
                                </HudCard>
                            </div>
                        </div>

                        {/* Card 3 — right third */}
                        <div
                            ref={card3Ref}
                            className="absolute top-0 left-[46.66vw]"
                            style={{ width: '23.33vw', height: '30vw', opacity: 0, transformStyle: 'preserve-3d' }}
                        >
                            {/* Front — right slice */}
                            <div ref={front3Ref} className="absolute inset-0 overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
                                <img src="/assets/agency/card3.webp" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <span className="text-white/70 text-[9px] font-mono tracking-[0.3em] uppercase">Established</span>
                                </div>
                            </div>
                            {/* Back — HudCard */}
                            <div ref={back3Ref} className="absolute inset-0" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', zIndex: 10, opacity: 0 }}>
                                <HudCard className="w-full h-full flex flex-col justify-between p-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-1 h-1 bg-white/40" />
                                            <span className="text-white/30 text-[8px] font-mono tracking-[0.4em] uppercase">03 · GROWTH</span>
                                        </div>
                                        <div className="relative h-px mb-6">
                                            <div className="absolute inset-0 bg-white/[0.08]" />
                                            <div className="absolute left-0 top-0 h-px bg-gradient-to-r from-white/40 to-transparent w-12" />
                                        </div>
                                        <h3 className="text-white/90 text-xl font-extralight tracking-[0.18em] uppercase mb-4 leading-none">Growth</h3>
                                        <p className="text-white/50 text-[11px] font-light tracking-wide leading-relaxed">
                                            We partner with you to scale sustainably and achieve lasting impact.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-white/30" />
                                        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                                        <span className="text-white/30 text-[7px] font-mono tracking-[0.3em] uppercase">Phase · Gamma</span>
                                    </div>
                                </HudCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Journey Section */}
            <div className="block md:hidden bg-black py-20 px-6 relative overflow-hidden">
                {/* Grain overlay */}
                <canvas ref={grainMobileRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full" />

                <div className="relative z-10 max-w-xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-extralight text-white tracking-[0.12em] uppercase leading-tight">
                        Where are you <em className="not-italic font-light">in</em> your journey?
                    </h2>
                    <p className="text-white/30 text-[9px] font-mono tracking-[0.2em] uppercase mt-3">
                        Tap a card to view details
                    </p>
                </div>

                <div className="relative z-10 flex flex-col gap-6 max-w-sm mx-auto">
                    {/* Card 1 */}
                    <div className="relative w-full" style={{ height: '300px', perspective: '1200px', WebkitPerspective: '1200px' }}>
                        <div
                            onClick={() => toggleCardFlip(0)}
                            className="w-full h-full relative cursor-pointer transition-transform duration-700"
                            style={{
                                transformStyle: 'preserve-3d',
                                WebkitTransformStyle: 'preserve-3d',
                                transform: flippedCards[0] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                WebkitTransform: flippedCards[0] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                            }}
                        >
                            {/* Front — Strategy Slice */}
                            <div className="absolute inset-0 overflow-hidden"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    opacity: flippedCards[0] ? 0 : 1,
                                    transition: 'opacity 0.3s ease-in-out',
                                    pointerEvents: flippedCards[0] ? 'none' : 'auto'
                                }}>
                                <img src="/assets/agency/card1.webp" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <div>
                                        <span className="text-white/70 text-[10px] font-mono tracking-[0.3em] uppercase">Starting Out</span>
                                        <h3 className="text-white text-xl font-extralight tracking-widest uppercase mt-1">Strategy</h3>
                                    </div>
                                    <span className="text-white/30 text-[8px] font-mono tracking-wider uppercase border border-white/20 px-2 py-1 rounded">FLIP</span>
                                </div>
                            </div>
                            {/* Back — HudCard */}
                            <div className="absolute inset-0"
                                style={{
                                    transform: 'rotateY(180deg)',
                                    WebkitTransform: 'rotateY(180deg)',
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    zIndex: 10,
                                    opacity: flippedCards[0] ? 1 : 0,
                                    transition: 'opacity 0.3s ease-in-out',
                                    pointerEvents: flippedCards[0] ? 'auto' : 'none'
                                }}
                            >
                                <HudCard className="w-full h-full flex flex-col justify-between p-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-1 h-1 bg-white/40" />
                                            <span className="text-white/30 text-[8px] font-mono tracking-[0.4em] uppercase">01 · STRATEGY</span>
                                        </div>
                                        <div className="relative h-px mb-6">
                                            <div className="absolute inset-0 bg-white/[0.08]" />
                                            <div className="absolute left-0 top-0 h-px bg-gradient-to-r from-white/40 to-transparent w-12" />
                                        </div>
                                        <h3 className="text-white/90 text-xl font-extralight tracking-[0.18em] uppercase mb-4 leading-none">Strategy</h3>
                                        <p className="text-white/50 text-[11px] font-light tracking-wide leading-relaxed">
                                            We craft tailored strategies that align with your vision and market dynamics.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-white/30" />
                                        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                                        <span className="text-white/30 text-[7px] font-mono tracking-[0.3em] uppercase">Phase · Alpha</span>
                                    </div>
                                </HudCard>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative w-full" style={{ height: '300px', perspective: '1200px', WebkitPerspective: '1200px' }}>
                        <div
                            onClick={() => toggleCardFlip(1)}
                            className="w-full h-full relative cursor-pointer transition-transform duration-700"
                            style={{
                                transformStyle: 'preserve-3d',
                                WebkitTransformStyle: 'preserve-3d',
                                transform: flippedCards[1] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                WebkitTransform: flippedCards[1] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                            }}
                        >
                            {/* Front — Execution Slice */}
                            <div className="absolute inset-0 overflow-hidden"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    opacity: flippedCards[1] ? 0 : 1,
                                    transition: 'opacity 0.3s ease-in-out',
                                    pointerEvents: flippedCards[1] ? 'none' : 'auto'
                                }}>
                                <img src="/assets/agency/card2.webp" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <div>
                                        <span className="text-white/70 text-[10px] font-mono tracking-[0.3em] uppercase">Scaling Up</span>
                                        <h3 className="text-white text-xl font-extralight tracking-widest uppercase mt-1">Execution</h3>
                                    </div>
                                    <span className="text-white/30 text-[8px] font-mono tracking-wider uppercase border border-white/20 px-2 py-1 rounded">FLIP</span>
                                </div>
                            </div>
                            {/* Back — HudCard */}
                            <div className="absolute inset-0"
                                style={{
                                    transform: 'rotateY(180deg)',
                                    WebkitTransform: 'rotateY(180deg)',
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    zIndex: 10,
                                    opacity: flippedCards[1] ? 1 : 0,
                                    transition: 'opacity 0.3s ease-in-out',
                                    pointerEvents: flippedCards[1] ? 'auto' : 'none'
                                }}
                            >
                                <HudCard className="w-full h-full flex flex-col justify-between p-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-1 h-1 bg-white/40" />
                                            <span className="text-white/30 text-[8px] font-mono tracking-[0.4em] uppercase">02 · EXECUTION</span>
                                        </div>
                                        <div className="relative h-px mb-6">
                                            <div className="absolute inset-0 bg-white/[0.08]" />
                                            <div className="absolute left-0 top-0 h-px bg-gradient-to-r from-white/40 to-transparent w-12" />
                                        </div>
                                        <h3 className="text-white/90 text-xl font-extralight tracking-[0.18em] uppercase mb-4 leading-none">Execution</h3>
                                        <p className="text-white/50 text-[11px] font-light tracking-wide leading-relaxed">
                                            We bring ideas to life with precision, creativity, and technical excellence.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-white/30" />
                                        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                                        <span className="text-white/30 text-[7px] font-mono tracking-[0.3em] uppercase">Phase · Beta</span>
                                    </div>
                                </HudCard>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative w-full" style={{ height: '300px', perspective: '1200px', WebkitPerspective: '1200px' }}>
                        <div
                            onClick={() => toggleCardFlip(2)}
                            className="w-full h-full relative cursor-pointer transition-transform duration-700"
                            style={{
                                transformStyle: 'preserve-3d',
                                WebkitTransformStyle: 'preserve-3d',
                                transform: flippedCards[2] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                WebkitTransform: flippedCards[2] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                            }}
                        >
                            {/* Front — Growth Slice */}
                            <div className="absolute inset-0 overflow-hidden"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    opacity: flippedCards[2] ? 0 : 1,
                                    transition: 'opacity 0.3s ease-in-out',
                                    pointerEvents: flippedCards[2] ? 'none' : 'auto'
                                }}>
                                <img src="/assets/agency/card3.webp" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <div>
                                        <span className="text-white/70 text-[10px] font-mono tracking-[0.3em] uppercase">Established</span>
                                        <h3 className="text-white text-xl font-extralight tracking-widest uppercase mt-1">Growth</h3>
                                    </div>
                                    <span className="text-white/30 text-[8px] font-mono tracking-wider uppercase border border-white/20 px-2 py-1 rounded">FLIP</span>
                                </div>
                            </div>
                            {/* Back — HudCard */}
                            <div className="absolute inset-0"
                                style={{
                                    transform: 'rotateY(180deg)',
                                    WebkitTransform: 'rotateY(180deg)',
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    zIndex: 10,
                                    opacity: flippedCards[2] ? 1 : 0,
                                    transition: 'opacity 0.3s ease-in-out',
                                    pointerEvents: flippedCards[2] ? 'auto' : 'none'
                                }}
                            >
                                <HudCard className="w-full h-full flex flex-col justify-between p-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-1 h-1 bg-white/40" />
                                            <span className="text-white/30 text-[8px] font-mono tracking-[0.4em] uppercase">03 · GROWTH</span>
                                        </div>
                                        <div className="relative h-px mb-6">
                                            <div className="absolute inset-0 bg-white/[0.08]" />
                                            <div className="absolute left-0 top-0 h-px bg-gradient-to-r from-white/40 to-transparent w-12" />
                                        </div>
                                        <h3 className="text-white/90 text-xl font-extralight tracking-[0.18em] uppercase mb-4 leading-none">Growth</h3>
                                        <p className="text-white/50 text-[11px] font-light tracking-wide leading-relaxed">
                                            We partner with you to scale sustainably and achieve lasting impact.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-white/30" />
                                        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                                        <span className="text-white/30 text-[7px] font-mono tracking-[0.3em] uppercase">Phase · Gamma</span>
                                    </div>
                                </HudCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
