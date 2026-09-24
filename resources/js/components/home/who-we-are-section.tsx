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
    { name: 'Framer',         icon: 'https://cdn.worldvectorlogo.com/logos/framer-icon.svg' },
    { name: 'After Effects',  icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg' },
    { name: 'Davinci Resolve',icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png' },
    { name: 'Illustrator',    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg' },
    { name: 'Figma',          icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
    { name: 'Premiere Pro',   icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg' },
    { name: 'Photoshop',      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
    { name: 'Blender',        icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg' },
    { name: 'React',          icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Node.js',        icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'MySQL',          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Database-mysql.svg' },
    { name: 'TypeScript',     icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
    { name: 'MongoDB',        icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
    { name: 'JavaScript',     icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
];


export default function WhoWeAreSection() {
    const grainRef = useRef<HTMLCanvasElement>(null);
    useGrain(grainRef);

    return (
        <section className="relative bg-black py-12 px-3 overflow-hidden">
            {/* Grain overlay */}
            <canvas
                ref={grainRef}
                aria-hidden="true"
                className="absolute inset-0 z-10 w-full h-full pointer-events-none"
            />
            {/* Inline slider keyframes */}
            <style dangerouslySetInnerHTML={{ __html: `
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
            `}} />



            <div className="relative z-20 max-w-7xl mx-auto space-y-4">

                {/* Heading */}
                <div className="mb-12 text-left">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-[0.12em] text-white leading-tight uppercase font-extralight">
                        Who We Are
                    </h2>
                </div>

                {/* ── Desktop grid ── */}
                <div className="hidden md:grid grid-cols-12 gap-3">

                    {/* Stats — col-span-2: compact boxes, big numbers */}
                    <div className="col-span-2 flex flex-col gap-2 h-full">
                        {stats.map((stat, i) => (
                            <HudCard key={i} className="flex-1 px-5 py-4 flex flex-col justify-center">
                                <div className="text-white/90 text-5xl font-extralight tracking-tight leading-none mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-white/50 text-[9px] font-mono tracking-[0.2em] uppercase leading-relaxed whitespace-pre-line">
                                    {stat.label}
                                </div>
                            </HudCard>
                        ))}
                    </div>

                    {/* Globe — col-span-4 (narrow card) */}
                    <HudCard className="col-span-4 p-0 flex flex-col">
                        <div className="h-full w-full flex flex-col items-center justify-center relative py-8">
                            <div className="absolute top-6 text-center z-10 w-full">
                                <h3 className="text-white/85 text-lg font-extralight tracking-[0.12em] mb-3 uppercase">
                                    Based in Europe
                                </h3>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-2 h-2 bg-green-400/70 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                                    <span className="text-white/60 text-xs font-mono tracking-[0.25em] uppercase">Available Worldwide</span>
                                </div>
                            </div>
                            <div className="relative w-[75%] aspect-square flex items-center justify-center">
                                <Globe />
                            </div>
                        </div>
                    </HudCard>

                    {/* Mission statement — col-span-6 (wide card) */}
                    <HudCard className="col-span-6 p-8 flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-1 h-1 bg-white/20" />
                            <span className="text-white/50 text-[10px] font-mono tracking-[0.35em]">MISSION · STATEMENT</span>
                        </div>
                        <div className="relative h-px mb-6">
                            <div className="absolute inset-0 bg-white/[0.08]" />
                            <div className="absolute left-0 top-0 h-px bg-gradient-to-r from-white/30 to-transparent w-12" />
                        </div>
                        <p className="text-white text-sm font-extralight tracking-[0.06em] leading-[1.9]">
                            To empower ambitious brands with precision-crafted digital experiences — blending strategy, design, and technology into systems that move culture forward.
                        </p>
                    </HudCard>

                    {/* Why Work With Us — removed */}

                </div>

                {/* ── Mobile layout ── */}
                <div className="flex md:hidden flex-col gap-4">

                    {/* Globe */}
                    <HudCard className="p-0 min-h-[380px]">
                        <div className="h-full w-full flex flex-col items-center justify-center relative pb-8">
                            <div className="absolute top-6 text-center z-10 w-full">
                                <h3 className="text-white/85 text-xl font-extralight tracking-[0.12em] mb-2 uppercase">
                                    Based in Europe
                                </h3>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-2 h-2 bg-green-400/70 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                                    <span className="text-white/60 text-[10px] font-mono tracking-[0.25em] uppercase">Available Worldwide</span>
                                </div>
                            </div>
                            <div className="relative w-[60%] aspect-square flex items-center justify-center mt-20">
                                <Globe />
                            </div>
                        </div>
                    </HudCard>

                    {/* Stats — compact with big numbers */}
                    <div className="flex flex-row gap-3">
                        {stats.map((stat, i) => (
                            <HudCard key={i} className="flex-1 px-4 py-4 flex flex-col justify-center">
                                <div className="text-white/90 text-4xl font-extralight tracking-tight leading-none mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-white/50 text-[9px] font-mono tracking-[0.2em] uppercase leading-relaxed whitespace-pre-line">
                                    {stat.label}
                                </div>
                            </HudCard>
                        ))}
                    </div>

                    {/* Mission */}
                    <HudCard className="p-8 flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-1 h-1 bg-white/20" />
                            <span className="text-white/50 text-[10px] font-mono tracking-[0.35em]">MISSION · STATEMENT</span>
                        </div>
                        <div className="relative h-px mb-6">
                            <div className="absolute inset-0 bg-white/[0.08]" />
                            <div className="absolute left-0 top-0 h-px bg-gradient-to-r from-white/30 to-transparent w-12" />
                        </div>
                        <p className="text-white text-sm font-extralight tracking-[0.06em] leading-[1.9]">
                            To empower ambitious brands with precision-crafted digital experiences — blending strategy, design, and technology into systems that move culture forward.
                        </p>
                    </HudCard>

                </div>

                {/* Toolbox slider — shared desktop + mobile */}
                <HudCard className="p-4 md:p-6 flex flex-row items-center justify-between gap-4 overflow-hidden">
                    <div className="min-w-[100px] md:min-w-[150px] z-10">
                        <p className="text-white/80 text-[10px] md:text-sm font-extralight tracking-[0.2em] uppercase mb-0.5">
                            Everyday's Toolbox
                        </p>
                        <p className="text-white/30 text-[8px] md:text-[10px] font-mono tracking-[0.2em] uppercase">
                            Mastered for every project.
                        </p>
                    </div>
                    <div className="relative flex-1 overflow-hidden">
                        <div className="who-logo-slider gap-2 md:gap-4 py-1 md:py-2">
                            {[...tools, ...tools].map((tool, i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 md:w-14 md:h-14 border border-white/[0.10] hover:border-white/25 flex-shrink-0 flex items-center justify-center p-1.5 md:p-3 transition-colors duration-300 cursor-pointer group"
                                >
                                    <img
                                        src={tool.icon}
                                        alt={tool.name}
                                        className="w-full h-full object-contain filter invert opacity-40 group-hover:opacity-80 transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
                        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
                    </div>
                </HudCard>

            </div>
        </section>
    );
}
