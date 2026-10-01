import { useRef } from 'react';
import { useGrain } from '@/hooks/use-grain';
import { HudCard } from '@/components/home/hud-card';

const testimonials = [
    {
        quote: "Jay's the real deal. Not only a Framer pro, but he truly cares—bringing ideas, polish, and extra miles we didn't even ask for. On Lorikeet, he turned loose homepage hero concepts into a live staging link in just a day, completely reshaping what we thought was possible. Creative, proactive, and lightning-fast with QA, he delivers unique animations, smart solutions, and clear comms. Funny, honest, and a joy to work with—we can't wait for the next project.",
        author: 'Dinesh Dave',
        role: 'CO-FOUNDER & CREATIVE DIRECTOR',
        company: 'WORK IS PLAY',
        avatar: 'https://i.pravatar.cc/150?u=dinesh',
    },
    {
        quote: "Jay is a one-of-a-kind creative mind (in the best way possible!). He's always coming up with mind-blowing ideas, and I've had the pleasure of working with him on various projects over the years. Jay consistently delivers exceptional results and never underperforms. I would highly recommend him for your next project—he's essentially a Swiss Army knife of content creation.",
        author: 'Max Trudel',
        role: 'DIRECTOR / DOP',
        company: 'SIDE HIT FILMS',
        avatar: 'https://i.pravatar.cc/150?u=max',
    },
    {
        quote: "The man's a chameleon, minus the clichés. While many designers get stuck in a \"house style\", Jay's versatility is his superpower. Over the years working with Boombox, he's proven time and time again that no creative challenge is too big, too niche, or too wild. From 2D animations to 3D renders and even web design, Jay's range is nothing short of extraordinary.",
        author: 'TJ Walker',
        role: 'HEAD OF PRODUCTION',
        company: 'BOOMBOX',
        avatar: 'https://i.pravatar.cc/150?u=tj',
    },
    {
        quote: "Jay is truly in a league of his own. Not only is he incredibly talented and creative, but he's also easy and fun to work with. The final result is hands down the best agency website I've ever seen. Couldn't recommend him more.",
        author: 'Max Gilberg',
        role: 'FOUNDING PARTNER & CREATIVE DIRECTOR',
        company: 'MAJOR MEDIA AGENCY',
        avatar: 'https://i.pravatar.cc/150?u=gilberg',
    },
];

export default function TestimonialsSection() {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <section className="relative overflow-hidden bg-black py-24">
            {/* Slider keyframes */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                @keyframes t-scroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .t-slider {
                    display: flex;
                    width: max-content;
                    animation: t-scroll 40s linear infinite;
                }
                .t-slider:hover { animation-play-state: paused; }
            `,
                }}
            />

            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            />

            <div className="relative z-20">
                {/* Heading — left aligned, matching blog section */}
                <div className="mb-16 px-6 sm:px-10">
                    <h2 className="text-2xl leading-tight font-black tracking-tight md:text-3xl">
                        Don't take our word for it
                    </h2>
                </div>

                {/* Slider */}
                <div className="relative py-8">
                    <div className="t-slider gap-5 px-6">
                        {[...testimonials, ...testimonials].map((t, i) => {
                            const offset =
                                i % 3 === 0
                                    ? '-translate-y-6'
                                    : i % 3 === 1
                                      ? 'translate-y-6'
                                      : 'translate-y-0';

                            return (
                                <HudCard
                                    key={i}
                                    className={`w-[380px] flex-shrink-0 rounded-xl transition-transform duration-500 ${offset} hover:!translate-y-0`}
                                >
                                    {/* Content */}
                                    <div className="relative z-10 flex min-h-[280px] flex-col p-8">
                                        {/* Quote */}
                                        <p className="flex-1 text-sm leading-[1.8] font-light tracking-wide text-white/80">
                                            "{t.quote}"
                                        </p>

                                        {/* Author */}
                                        <div className="mt-6 flex items-center gap-4 pt-5">
                                            <img
                                                src={t.avatar}
                                                alt={t.author}
                                                className="h-10 w-10 rounded-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                                            />
                                            <div>
                                                <p className="text-sm font-light tracking-wide text-white/90">
                                                    {t.author}
                                                </p>
                                                <p className="mt-0.5 text-[9px] tracking-widest text-white/40 uppercase">
                                                    {t.role}
                                                </p>
                                                <p className="text-[8px] tracking-widest text-white/25 uppercase">
                                                    {t.company}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </HudCard>
                            );
                        })}
                    </div>

                    {/* Edge fades */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />
                </div>
            </div>
        </section>
    );
}
