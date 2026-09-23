import { useState, useRef, useEffect } from 'react'
import { Link, usePage } from '@inertiajs/react'

const links = [
    { label: 'Home',      to: '/' },
    { label: 'Work',      to: '/work' },
    { label: 'Expertise', to: null, dropdown: true },
    { label: 'Agency',    to: '/agency' },
    { label: 'Jobs',      to: '/work' },
    { label: 'Contact',   to: '/contact' },
]

const expertiseCategories = [
    { name: 'Campaigning',       to: '/expertise/campaigning',       img: '/assets/navbar/campaign.png' },
    { name: 'Social Media',      to: '/expertise/social-media',      img: '/assets/navbar/social.png' },
    { name: 'Branding & Design', to: '/expertise/branding-design',   img: '/assets/navbar/bd.png' },
    { name: 'Employer Branding', to: '/expertise/employer-branding', img: '/assets/navbar/empbd.png' },
    { name: 'Websites',          to: '/expertise/websites',          img: '/assets/navbar/website.png' },
]

type Props = {
    transparent?: boolean
}

export default function Navbar({ transparent = false }: Props) {
    const { url } = usePage()
    const pathname = url

    const [isDropdownOpen, setIsDropdownOpen]    = useState(false)
    const [hoveredIndex, setHoveredIndex]         = useState(0)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [mobileSubmenu, setMobileSubmenu]       = useState<null | 'expertise'>(null)
    const timeoutRef  = useRef<ReturnType<typeof setTimeout> | null>(null)
    const staticRef   = useRef<HTMLCanvasElement>(null)
    const staticRaf   = useRef<number | null>(null)
    const headerStaticRef = useRef<HTMLCanvasElement>(null)

    // Animated TV static for the dropdown
    useEffect(() => {
        const canvas = staticRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resize = () => {
            canvas.width  = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        resize()

        const draw = () => {
            const { width, height } = canvas
            if (width === 0 || height === 0) { staticRaf.current = requestAnimationFrame(draw); return }
            const imageData = ctx.createImageData(width, height)
            const buf = imageData.data
            for (let i = 0; i < buf.length; i += 4) {
                const v = Math.random() * 255 | 0
                buf[i]     = v
                buf[i + 1] = v
                buf[i + 2] = v
                buf[i + 3] = 22
            }
            ctx.putImageData(imageData, 0, 0)
            staticRaf.current = requestAnimationFrame(draw)
        }
        draw()

        window.addEventListener('resize', resize)
        return () => {
            if (staticRaf.current) cancelAnimationFrame(staticRaf.current)
            window.removeEventListener('resize', resize)
        }
    }, [])

    // Animated TV static for the header bar
    useEffect(() => {
        const canvas = headerStaticRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        let raf: number

        const resize = () => {
            canvas.width  = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        resize()

        const draw = () => {
            const { width, height } = canvas
            if (width === 0 || height === 0) { raf = requestAnimationFrame(draw); return }
            const imageData = ctx.createImageData(width, height)
            const buf = imageData.data
            for (let i = 0; i < buf.length; i += 4) {
                const v = Math.random() * 255 | 0
                buf[i]     = v
                buf[i + 1] = v
                buf[i + 2] = v
                buf[i + 3] = 22
            }
            ctx.putImageData(imageData, 0, 0)
            raf = requestAnimationFrame(draw)
        }
        draw()

        window.addEventListener('resize', resize)
        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('resize', resize)
        }
    }, [])

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [isMobileMenuOpen])

    useEffect(() => {
        setIsMobileMenuOpen(false)
        setMobileSubmenu(null)
    }, [pathname])

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setIsDropdownOpen(true)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsDropdownOpen(false)
        }, 180)
    }

    const EASING   = 'cubic-bezier(0.76, 0, 0.24, 1)'
    const DURATION = '0.6s'

    return (
        <header
            style={{
                backgroundColor: isDropdownOpen
                    ? '#000000'
                    : transparent
                    ? 'transparent'
                    : '#0d0d0e',
                borderBottom: 'none',
                transition: `background-color ${DURATION} ${EASING}, border-color ${DURATION} ${EASING}`,
            }}
            className="relative z-50 w-full"
            onMouseLeave={handleMouseLeave}
        >
            {/* TV static on header bar — only visible when dropdown is open */}
            <canvas
                ref={headerStaticRef}
                aria-hidden="true"
                style={{
                    position:      'absolute',
                    inset:         0,
                    width:         '100%',
                    height:        '100%',
                    pointerEvents: 'none',
                    zIndex:        0,
                    opacity:       isDropdownOpen ? 1 : 0,
                    transition:    'opacity 0.3s ease',
                }}
            />

            {/* Top Navbar Row */}
            <div className="relative z-[1] flex items-center justify-between px-6 sm:px-10 py-5 max-w-7xl mx-auto w-full">
                <Link
                    href="/"
                    className="text-sm font-semibold tracking-wide text-white no-underline flex items-center gap-0.5 z-10"
                >
                    ese agency
                    <span className="text-[10px] text-white/60 -mt-1">™</span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-6 sm:gap-8 list-none m-0 p-0">
                    {links.map(({ label, to, dropdown }) => {
                        const isActive = to && pathname === to

                        if (dropdown) {
                            return (
                                <li
                                    key={label}
                                    className="relative py-1"
                                    onMouseEnter={handleMouseEnter}
                                >
                                    <button
                                        onClick={() => setIsDropdownOpen(prev => !prev)}
                                        className={`inline-flex items-center gap-2 text-sm no-underline transition-colors duration-200 cursor-pointer bg-transparent border-none ${
                                            isDropdownOpen
                                                ? 'text-white font-semibold'
                                                : 'text-white/70 hover:text-white'
                                        }`}
                                    >
                                        <span>{label}</span>
                                        <span
                                            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${
                                                isDropdownOpen
                                                    ? 'bg-white/20 border-white text-white'
                                                    : 'border-white/30 text-white/70'
                                            }`}
                                        >
                                            <svg
                                                className={`w-2.5 h-2.5 transition-transform duration-300 ${
                                                    isDropdownOpen ? 'rotate-180 text-white' : 'rotate-0 text-white/70'
                                                }`}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M12 5v14M5 12l7 7 7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </li>
                            )
                        }

                        return (
                            <li key={label}>
                                {to ? (
                                    <Link
                                        href={to}
                                        className={`text-sm no-underline transition-colors duration-200 ${
                                            isActive
                                                ? 'text-white font-semibold'
                                                : 'text-white/70 hover:text-white'
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                ) : (
                                    <a
                                        href="#"
                                        className="text-sm text-white/70 hover:text-white no-underline transition-colors duration-200"
                                    >
                                        {label}
                                    </a>
                                )}
                            </li>
                        )
                    })}
                </ul>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2 text-white bg-transparent border-none cursor-pointer focus:outline-none z-10"
                    aria-label="Open mobile menu"
                >
                    <span className="w-5 h-[1.5px] bg-white block rounded-full" />
                    <span className="w-5 h-[1.5px] bg-white block rounded-full" />
                </button>
            </div>

            {/* Desktop Mega Dropdown */}
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    clipPath: isDropdownOpen ? 'inset(0% 0% -100% 0%)' : 'inset(0% 0% 100% 0%)',
                    transition: isDropdownOpen
                        ? `clip-path ${DURATION} ${EASING}, opacity ${DURATION} ${EASING}`
                        : `clip-path ${DURATION} ${EASING}, opacity ${DURATION} ${EASING}, visibility 0s ${DURATION}`,
                    opacity:      isDropdownOpen ? 1 : 0,
                    visibility:   isDropdownOpen ? 'visible' : 'hidden',
                    pointerEvents: isDropdownOpen ? 'auto' : 'none',
                }}
                className="hidden md:block absolute top-full left-0 right-0 w-full bg-black border-b border-white/10 shadow-2xl origin-top z-50"
            >
                {/* TV static overlay */}
                <canvas
                    ref={staticRef}
                    aria-hidden="true"
                    style={{
                        position:      'absolute',
                        inset:         0,
                        width:         '100%',
                        height:        '100%',
                        pointerEvents: 'none',
                        zIndex:        0,
                    }}
                />
                <div className="relative z-[1] max-w-7xl mx-auto px-6 sm:px-10 py-8 lg:py-10">
                    <div className="flex items-start gap-12">
                        {/* Left label */}
                        <div className="w-48 shrink-0 pt-2">
                            <span className="text-xs sm:text-sm font-medium tracking-wide text-white/50 uppercase">
                                Our Expertise
                            </span>
                        </div>

                        {/* Category list */}
                        <div className="flex flex-col flex-1">
                            {expertiseCategories.map(({ name, to }, i) => (
                                <Link
                                    key={name}
                                    href={to}
                                    onClick={() => setIsDropdownOpen(false)}
                                    onMouseEnter={() => setHoveredIndex(i)}
                                    className="group flex items-center justify-between text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight no-underline transition-all duration-200 hover:translate-x-2 py-1.5"
                                    style={{ color: hoveredIndex === i ? '#ffffff' : 'rgba(255,255,255,0.45)' }}
                                >
                                    <span>{name}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Right — image changes on hover */}
                        <div
                            className="shrink-0 hidden lg:block relative overflow-hidden rounded-lg"
                            style={{ width: '380px', height: '260px' }}
                        >
                            {expertiseCategories.map(({ name, img }, i) => (
                                <img
                                    key={name}
                                    src={img}
                                    alt={name}
                                    className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500"
                                    style={{ opacity: hoveredIndex === i ? 1 : 0 }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Fullscreen Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-[100] bg-[#121212] text-white flex flex-col justify-between overflow-y-auto">
                    {/* Header row */}
                    <div className="flex items-center justify-between px-6 py-5 w-full shrink-0">
                        <Link
                            href="/"
                            onClick={() => { setIsMobileMenuOpen(false); setMobileSubmenu(null) }}
                            className="text-sm font-semibold tracking-wide text-white no-underline flex items-center gap-0.5"
                        >
                            ese agency
                            <span className="text-[10px] text-white/60 -mt-1">™</span>
                        </Link>
                        <button
                            onClick={() => { setIsMobileMenuOpen(false); setMobileSubmenu(null) }}
                            className="p-2 text-white/80 hover:text-white bg-transparent border-none cursor-pointer focus:outline-none"
                            aria-label="Close mobile menu"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation list */}
                    <div className="flex-1 px-6 pt-8 pb-12 flex flex-col justify-start">
                        {mobileSubmenu === null ? (
                            <div className="flex flex-col space-y-4">
                                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl sm:text-5xl font-semibold tracking-tight text-white no-underline hover:text-white/80 transition-colors">Home</Link>
                                <Link href="/work" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl sm:text-5xl font-semibold tracking-tight text-white no-underline hover:text-white/80 transition-colors">Work</Link>

                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setMobileSubmenu('expertise')}
                                        className="flex items-center gap-3 text-4xl sm:text-5xl font-semibold tracking-tight text-white bg-transparent border-none p-0 cursor-pointer text-left hover:text-white/80 transition-colors"
                                    >
                                        <span>Expertise</span>
                                        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                            <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 5v14M5 12l7 7 7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>

                                <Link href="/agency" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl sm:text-5xl font-semibold tracking-tight text-white no-underline hover:text-white/80 transition-colors">Agency</Link>
                                <Link href="/work" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl sm:text-5xl font-semibold tracking-tight text-white no-underline hover:text-white/80 transition-colors">Jobs</Link>
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl sm:text-5xl font-semibold tracking-tight text-white no-underline hover:text-white/80 transition-colors">Contact</Link>
                            </div>
                        ) : (
                            <div className="flex flex-col space-y-4">
                                <button
                                    onClick={() => setMobileSubmenu(null)}
                                    className="flex items-center gap-3 text-4xl sm:text-5xl font-semibold tracking-tight text-white/40 bg-transparent border-none p-0 cursor-pointer text-left hover:text-white/60 transition-colors mb-2"
                                >
                                    <span>Expertise</span>
                                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <svg className="w-3.5 h-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 19V5M5 12l7-7 7 7" />
                                        </svg>
                                    </span>
                                </button>

                                {expertiseCategories.map(({ name, to }) => (
                                    <Link
                                        key={name}
                                        href={to}
                                        onClick={() => { setIsMobileMenuOpen(false); setMobileSubmenu(null) }}
                                        className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white no-underline leading-tight hover:text-white/80 transition-colors max-w-xs"
                                    >
                                        {name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    )
}
