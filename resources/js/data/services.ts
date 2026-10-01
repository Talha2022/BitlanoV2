export type ServiceData = {
    title: string;
    label: string;
    bg: string;
    intro: string;
    offers: string[];
    statement: string;
    stats: { value: string; label: string }[];
};

export const services: Record<string, ServiceData> = {
    campaigning: {
        title: 'Campaigning',
        label: 'Campaigning',
        bg: '/assets/hero/frame01.webp',
        intro: 'We create campaigns that cut through the noise — provocative, precise, and built to move people. From concept to execution, we combine strategic thinking with creative boldness to deliver campaigns that generate real impact for your brand.',
        offers: [
            'Creative Concept & Strategy',
            'Campaign Production',
            'Cross-Channel Media',
            'Performance & Analytics',
        ],
        statement:
            'We turn bold ideas into campaigns that move people. Strategic at the core, fearless in execution — we create work that sticks, spreads, and delivers measurable results.',
        stats: [
            { value: '80+', label: 'Campaigns' },
            { value: '17', label: 'Awards' },
            { value: '7', label: 'Years of Experience' },
        ],
    },
    'social-media': {
        title: 'Social Media',
        label: 'Social Media',
        bg: '/assets/hero/frame01.webp',
        intro: 'Social media is where culture happens. We craft content that fits natively into feeds, sparks conversation, and builds communities. From TikTok to Instagram, we speak the language of every platform — and the people on it.',
        offers: [
            'Content Strategy & Creation',
            'Community Management',
            'Short-form & Reels Production',
            'Paid Social Ads',
        ],
        statement:
            "We speak fluent social — across every platform, format, and algorithm. Our content doesn't interrupt the feed. It belongs there.",
        stats: [
            { value: '50+', label: 'Brands' },
            { value: '17', label: 'Awards' },
            { value: '7', label: 'Years of Experience' },
        ],
    },
    'branding-design': {
        title: 'Branding & Design',
        label: 'Branding & Design',
        bg: '/assets/hero/frame01.webp',
        intro: 'A strong brand is more than a logo — it is a feeling, a promise, a world. We build visual identities that are coherent, timeless, and unmistakably yours. Every touchpoint considered, every detail intentional.',
        offers: [
            'Brand Strategy & Positioning',
            'Visual Identity & Logo Design',
            'Design Systems & Guidelines',
            'Brand Collateral',
        ],
        statement:
            'A brand is the sum of every impression it leaves. We design identities that are coherent, timeless, and unmistakably yours — from the first glance to the last touchpoint.',
        stats: [
            { value: '80+', label: 'Brands Built' },
            { value: '17', label: 'Awards' },
            { value: '7', label: 'Years of Experience' },
        ],
    },
    'employer-branding': {
        title: 'Employer Branding',
        label: 'Employer Branding',
        bg: '/assets/hero/frame01.webp',
        intro: 'The best talent chooses companies with a story worth joining. We help you tell yours — authentically and compellingly. From culture communication to recruitment campaigns, we position you as the employer people want to work for.',
        offers: [
            'EVP & Employer Positioning',
            'Recruitment Campaigns',
            'Employee Storytelling',
            'Culture & Onboarding Asset Design',
        ],
        statement:
            'The best people choose companies with a story worth joining. We help you tell yours — with honesty, clarity, and creative power that attracts talent and keeps it.',
        stats: [
            { value: '40+', label: 'Companies' },
            { value: '17', label: 'Awards' },
            { value: '7', label: 'Years of Experience' },
        ],
    },
    websites: {
        title: 'Websites',
        label: 'Websites',
        bg: '/assets/homepage/expertise-websites.jpg',
        intro: 'Our web experiences are based on coherent concepts — individually tailored to the use case. Our focus: functionality, storyline, gamification, or other web experiences. Key in all our over 80 projects: efficient user guidance, modern design, high-quality programming, and the cutting-edge web development tool Webflow.',
        offers: [
            'Concept/Wireframing',
            'Web Design',
            'Web Development',
            'SEO measures',
        ],
        statement:
            'We can turn (almost) any idea into reality. We believe in the innovative and dynamic CMS Webflow. We merge innovation with performance — Webflow even ranks us among the «Top Rated» worldwide developers.',
        stats: [
            { value: '80', label: 'Projects' },
            { value: '17', label: 'Awards' },
            { value: '7', label: 'Years of Experience' },
        ],
    },
};
