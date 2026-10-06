import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';

/* ─── Shared style objects ─── */
const headingStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 500,
    color: '#fff',
    margin: '0 0 20px',
    lineHeight: 1,
};

const linkStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 400,
    color: 'rgba(255,255,255,0.85)',
    textDecoration: 'none',
    lineHeight: '1.6',
    transition: 'color 0.2s ease',
    display: 'inline-block',
};

const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
};

const legalStyle: React.CSSProperties = {
    fontSize: '13px',
    color: '#9d9d9d',
    margin: 0,
};

const legalLinkStyle: React.CSSProperties = {
    fontSize: '13px',
    color: '#9d9d9d',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
};

/* ─── Accordion item (mobile only) ─── */
function AccordionItem({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
            <button
                onClick={() => setOpen((v) => !v)}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    padding: '18px 0',
                    cursor: 'pointer',
                    color: '#fff',
                    fontSize: '15px',
                    fontWeight: 500,
                    fontFamily: "'Inter', system-ui, sans-serif",
                }}
            >
                {label}
                <span
                    style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'background 0.2s',
                    }}
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            transition: 'transform 0.3s ease',
                            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                    >
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </span>
            </button>

            <div
                style={{
                    overflow: 'hidden',
                    maxHeight: open ? '600px' : '0',
                    transition: 'max-height 0.35s ease',
                }}
            >
                <div style={{ paddingBottom: '20px' }}>{children}</div>
            </div>
        </div>
    );
}

export default function Footer() {
    const staticRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = staticRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let raf: number;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const draw = () => {
            const { width, height } = canvas;
            const imageData = ctx.createImageData(width, height);
            const buf = imageData.data;
            for (let i = 0; i < buf.length; i += 4) {
                const v = (Math.random() * 255) | 0;
                buf[i] = v;
                buf[i + 1] = v;
                buf[i + 2] = v;
                buf[i + 3] = 18;
            }
            ctx.putImageData(imageData, 0, 0);
            raf = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
        };
    }, []);

    const contactContent = (
        <div>
            <address style={{ fontStyle: 'normal', marginBottom: '16px' }}>
                <span style={{ ...linkStyle, display: 'block', lineHeight: '1.8' }}>
                    ESE Agency
                    <br />
                    Grubenstrasse 54
                    <br />
                    8045 Zürich
                    <br />
                    Schweiz
                </span>
            </address>
            <a
                href="mailto:info@eseagency.ch"
                style={{ ...linkStyle, display: 'block', marginBottom: '6px' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.85)')}
            >
                info@eseagency.ch
            </a>
            <a
                href="tel:+41522123071"
                style={{ ...linkStyle, display: 'block' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.85)')}
            >
                +41 52 212 30 71
            </a>
        </div>
    );

    const pagesContent = (
        <ul style={listStyle}>
            {[
                { name: 'Home', to: '/' },
                { name: 'Work', to: '/work' },
                { name: 'Agency', to: '/agency' },
                { name: 'Team', to: '/team' },
                { name: 'Jobs', to: '/jobs' },
                { name: 'Contact', to: '/contact' },
                { name: 'For You', to: '/for-you' },
                { name: 'Web-Showcase', to: '/web-showcase' },
                { name: 'Blog', to: '/blog' },
                { name: 'History', to: '/history' },
            ].map((item) => (
                <li key={item.name} style={{ marginBottom: '10px' }}>
                    <Link
                        href={item.to}
                        style={linkStyle}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.85)')}
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );

    const expertiseContent = (
        <ul style={listStyle}>
            {[
                { name: 'Campaigning', to: '/expertise/campaigning' },
                { name: 'Social Media', to: '/expertise/social-media' },
                { name: 'Branding & Design', to: '/expertise/branding-design' },
                { name: 'Employer Branding', to: '/expertise/employer-branding' },
                { name: 'Websites', to: '/expertise/websites' },
            ].map((item) => (
                <li key={item.name} style={{ marginBottom: '10px' }}>
                    <Link
                        href={item.to}
                        style={linkStyle}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.85)')}
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );

    const linksContent = (
        <ul style={listStyle}>
            {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/eseagency' },
                { name: 'TikTok', url: 'https://tiktok.com' },
                { name: 'Webflow', url: 'https://webflow.com' },
                { name: 'Awwwards', url: 'https://awwwards.com' },
            ].map((item) => (
                <li key={item.name} style={{ marginBottom: '10px' }}>
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.85)')}
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );

    return (
        <footer
            style={{
                background: '#1a1a1a',
                position: 'relative',
                overflow: 'hidden',
                fontFamily: "'Inter', system-ui, sans-serif",
            }}
        >
            {/* Animated TV static */}
            <canvas
                ref={staticRef}
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            {/* Main footer content */}
            <div style={{ position: 'relative', zIndex: 1 }}>

                {/* ── MOBILE LAYOUT (hidden on sm+) ── */}
                <div className="block sm:hidden" style={{ padding: '48px 24px 0' }}>
                    {/* Logo */}
                    <Link
                        href="/"
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '30px',
                            fontWeight: 600,
                            letterSpacing: '-0.01em',
                            lineHeight: 1,
                            display: 'inline-block',
                            marginBottom: '40px',
                        }}
                    >
                        ese agency
                        <span style={{ fontSize: '8px', verticalAlign: 'super', marginLeft: '1px' }}>™</span>
                    </Link>

                    {/* Accordion sections */}
                    <div>
                        <AccordionItem label="Contact">{contactContent}</AccordionItem>
                        <AccordionItem label="Pages">{pagesContent}</AccordionItem>
                        <AccordionItem label="Expertise">{expertiseContent}</AccordionItem>
                        <AccordionItem label="Links">{linksContent}</AccordionItem>
                        {/* bottom border */}
                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }} />
                    </div>

                    {/* Legal */}
                    <div style={{ padding: '28px 0' }}>
                        <p style={{ ...legalStyle, marginBottom: '6px' }}>All rights reserved 2026 © ESE Agency</p>
                        <div style={{ display: 'flex', gap: '24px' }}>
                            <a
                                href="/datenschutz"
                                style={legalLinkStyle}
                                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
                                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#9d9d9d')}
                            >
                                Data Protection
                            </a>
                            <a
                                href="/impressum"
                                style={legalLinkStyle}
                                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
                                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#9d9d9d')}
                            >
                                Imprint
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── DESKTOP LAYOUT (hidden on mobile) ── */}
                <div className="hidden sm:block" style={{ padding: '80px 60px 0' }}>
                    {/* Top row: Logo + 4 Columns */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '80px',
                            marginBottom: '80px',
                            flexWrap: 'wrap',
                            alignItems: 'flex-start',
                        }}
                    >
                        {/* Logo */}
                        <div style={{ flexShrink: 0, minWidth: '130px', paddingTop: '2px' }}>
                            <Link
                                href="/"
                                style={{
                                    color: '#fff',
                                    textDecoration: 'none',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    letterSpacing: '-0.01em',
                                    lineHeight: 1,
                                }}
                            >
                                ese agency
                                <span style={{ fontSize: '8px', verticalAlign: 'super', marginLeft: '1px' }}>™</span>
                            </Link>
                        </div>

                        {/* Columns grid */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(4, auto)',
                                gap: '60px',
                                flex: 1,
                                minWidth: 0,
                            }}
                        >
                            {/* Contact */}
                            <div>
                                <p style={headingStyle}>Contact</p>
                                {contactContent}
                            </div>
                            {/* Pages */}
                            <div>
                                <p style={headingStyle}>Pages</p>
                                {pagesContent}
                            </div>
                            {/* Expertise */}
                            <div>
                                <p style={headingStyle}>Expertise</p>
                                {expertiseContent}
                            </div>
                            {/* Links */}
                            <div>
                                <p style={headingStyle}>Links</p>
                                {linksContent}
                            </div>
                        </div>
                    </div>

                    {/* Legal bar */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '20px',
                            padding: '20px 0',
                            flexWrap: 'wrap',
                        }}
                    >
                        <p style={legalStyle}>All rights reserved 2026 © ESE Agency</p>
                        <div style={{ display: 'flex', gap: '40px' }}>
                            <a
                                href="/datenschutz"
                                style={legalLinkStyle}
                                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
                                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#9d9d9d')}
                            >
                                Data Protection
                            </a>
                            <a
                                href="/impressum"
                                style={legalLinkStyle}
                                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
                                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#9d9d9d')}
                            >
                                Imprint
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Giant animated CTA marquee — both layouts */}
            <div
                style={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    paddingTop: '10px',
                    lineHeight: 0.88,
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <Link
                    href="/contact"
                    style={{
                        textDecoration: 'none',
                        display: 'inline-flex',
                        animation: 'footerMarquee 22s linear infinite',
                    }}
                    aria-label="Get in Contact"
                >
                    {Array(6)
                        .fill(null)
                        .map((_, i) => (
                            <span
                                key={i}
                                style={{
                                    fontSize: 'clamp(80px, 13vw, 210px)',
                                    fontWeight: 500,
                                    color: 'rgba(255,255,255,0.97)',
                                    letterSpacing: '-0.03em',
                                    lineHeight: 0.88,
                                    paddingRight: '0.4em',
                                    fontFamily: "'Inter', system-ui, sans-serif",
                                    display: 'inline-block',
                                }}
                            >
                                Get in Contact
                            </span>
                        ))}
                </Link>
            </div>

            {/* Keyframe animation */}
            <style>{`
                @keyframes footerMarquee {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
            `}</style>
        </footer>
    );
}
