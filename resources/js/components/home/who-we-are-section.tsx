import { useRef } from 'react';
import { useGrain } from '@/hooks/use-grain';
import { HudCard } from '@/components/home/hud-card';
import { Globe } from '@/components/home/globe';

const stats = [
    { value: '13+', label: 'Years of\nExperience' },
    { value: '15+', label: 'Awards &\nRecognition' },
    { value: '350+', label: 'Satisfied\nClients' },
];

const tools = [
    {
        name: 'Framer',
        icon: 'https://cdn.worldvectorlogo.com/logos/framer-icon.svg',
    },
    {
        name: 'After Effects',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg',
    },
    {
        name: 'Davinci Resolve',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png',
    },
    {
        name: 'Illustrator',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg',
    },
    {
        name: 'Figma',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    },
    {
        name: 'Premiere Pro',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg',
    },
    {
        name: 'Photoshop',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
    },
    {
        name: 'Blender',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg',
    },
    {
        name: 'React',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
        name: 'Node.js',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    },
    {
        name: 'MySQL',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Database-mysql.svg',
    },
    {
        name: 'TypeScript',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    },
    {
        name: 'MongoDB',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
    },
    {
        name: 'JavaScript',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    },
];

export default function WhoWeAreSection() {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <section className="relative overflow-hidden bg-black px-3 py-12">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            />
            {/* Inline slider keyframes */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                @keyframes who-scroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .who-logo-slider {
                    display: flex;
                    width: max-content;
                    animation: who-scroll 30s linear infinite;
                }
                .who-logo-slider:hover { animation-play-state: paused; }
            `,
                }}
            />

            <div className="relative z-20 mx-auto max-w-7xl space-y-4">
                {/* Heading */}
                <div className="mb-12 text-left">
                    <h2 className="text-[clamp(24px,12vw,90px)] leading-none font-extrabold tracking-tight whitespace-nowrap">
                        Who We Are
                    </h2>
                </div>

                {/* ── Desktop grid ── */}
                <div className="hidden grid-cols-12 gap-3 md:grid">
                    {/* Stats — col-span-2: compact boxes, big numbers */}
                    <div className="col-span-2 flex h-full flex-col gap-2">
                        {stats.map((stat, i) => (
                            <HudCard
                                key={i}
                                className="flex flex-1 flex-col justify-center px-5 py-4"
                            >
                                <div className="mb-2 text-5xl leading-none font-extralight tracking-tight text-white/90">
                                    {stat.value}
                                </div>
                                <div className="text-[9px] leading-relaxed tracking-widest whitespace-pre-line text-white/50 uppercase">
                                    {stat.label}
                                </div>
                            </HudCard>
                        ))}
                    </div>

                    {/* Globe — col-span-4 (narrow card) */}
                    <HudCard className="col-span-4 flex flex-col p-0">
                        <div className="relative flex h-full w-full flex-col items-center justify-center py-8">
                            <div className="absolute top-6 z-10 w-full text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-400/70 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                                    <span className="text-xs tracking-widest text-white/60 uppercase">
                                        Available Worldwide
                                    </span>
                                </div>
                            </div>
                            <div className="relative flex aspect-square w-[75%] items-center justify-center">
                                <Globe />
                            </div>
                        </div>
                    </HudCard>

                    {/* Mission statement — col-span-6 (wide card) */}
                    <HudCard className="col-span-6 flex flex-col p-8">
                        <div className="relative">
                            <p className="absolute top-[1.5em] left-2 text-[10px] leading-none tracking-widest whitespace-nowrap text-white/50 sm:text-xs">
                                This is BITLANO
                            </p>
                            <p
                                className="text-[clamp(18px,2.2vw,36px)] leading-[1.1] font-light tracking-tight text-white"
                                style={{
                                    textIndent: 'clamp(80px, 12vw, 160px)',
                                }}
                            >
                                Culture-driven, creative and competitive. Our
                                digital agency creates impact for brands. In the
                                disciplines Websites, Social Media, Content
                                Marketing, Campaigning and Branding. Between
                                timeless and zeitgeist. When we communicate:
                                Effective. Quick-witted. Ambitious. This is ESE
                                Agency.
                            </p>
                        </div>
                    </HudCard>

                    {/* Why Work With Us — removed */}
                </div>

                {/* ── Mobile layout ── */}
                <div className="flex flex-col gap-4 md:hidden">
                    {/* Globe */}
                    <HudCard className="min-h-[380px] p-0">
                        <div className="relative flex h-full w-full flex-col items-center justify-center pb-8">
                            <div className="absolute top-6 z-10 w-full text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-400/70 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                                    <span className="text-[10px] tracking-widest text-white/60 uppercase">
                                        Available Worldwide
                                    </span>
                                </div>
                            </div>
                            <div className="relative mt-20 flex aspect-square w-[60%] items-center justify-center">
                                <Globe />
                            </div>
                        </div>
                    </HudCard>

                    {/* Stats — compact with big numbers */}
                    <div className="flex flex-row gap-3">
                        {stats.map((stat, i) => (
                            <HudCard
                                key={i}
                                className="flex flex-1 flex-col justify-center px-4 py-4"
                            >
                                <div className="mb-2 text-4xl leading-none font-extralight tracking-tight text-white/90">
                                    {stat.value}
                                </div>
                                <div className="text-[9px] leading-relaxed tracking-widest whitespace-pre-line text-white/50 uppercase">
                                    {stat.label}
                                </div>
                            </HudCard>
                        ))}
                    </div>

                    {/* Mission */}
                    <HudCard className="flex flex-col p-8">
                        <p className="absolute top-[1.5em] left-2 text-[10px] leading-none tracking-widest whitespace-nowrap text-white/50">
                            This is BITLANO
                        </p>
                        <p
                            className="text-[clamp(18px,4vw,28px)] leading-[1.1] font-light tracking-tight text-white"
                            style={{ textIndent: 'clamp(80px, 12vw, 160px)' }}
                        >
                            Culture-driven, creative and competitive. Our
                            digital agency creates impact for brands. In the
                            disciplines Websites, Social Media, Content
                            Marketing, Campaigning and Branding. Between
                            timeless and zeitgeist. When we communicate:
                            Effective. Quick-witted. Ambitious. This is ESE
                            Agency.
                        </p>
                    </HudCard>
                </div>

                {/* Toolbox slider — shared desktop + mobile */}
                <HudCard className="flex flex-row items-center justify-between gap-4 overflow-hidden p-4 md:p-6">
                    <div className="z-10 min-w-[100px] md:min-w-[150px]">
                        <p className="mb-0.5 text-[10px] font-light tracking-widest text-white/80 uppercase md:text-sm">
                            Everyday's Toolbox
                        </p>
                        <p className="text-[8px] tracking-widest text-white/30 uppercase md:text-[10px]">
                            Mastered for every project.
                        </p>
                    </div>
                    <div className="relative flex-1 overflow-hidden">
                        <div className="who-logo-slider gap-2 py-1 md:gap-4 md:py-2">
                            {[...tools, ...tools].map((tool, i) => (
                                <div
                                    key={i}
                                    className="group flex h-8 w-8 flex-shrink-0 cursor-pointer items-center justify-center border border-white/[0.10] p-1.5 transition-colors duration-300 hover:border-white/25 md:h-14 md:w-14 md:p-3"
                                >
                                    <img
                                        src={tool.icon}
                                        alt={tool.name}
                                        className="h-full w-full object-contain opacity-60 invert filter transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-black to-transparent" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-black to-transparent" />
                    </div>
                </HudCard>
            </div>
        </section>
    );
}
