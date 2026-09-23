import { Head } from '@inertiajs/react';
import HeroSection from '@/components/home/hero-section';
import AboutSection from '@/components/home/about-section';

export default function Welcome() {
    return (
        <>
            <Head title="Home" />
            <HeroSection />
            <AboutSection />
        </>
    );
}
