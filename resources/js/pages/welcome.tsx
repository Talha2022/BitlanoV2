import { Head } from '@inertiajs/react';
import HeroSection from '@/components/home/hero-section';
import AboutSection from '@/components/home/about-section';
import WhyUsSection from '@/components/home/why-us-section';

export default function Welcome() {
    return (
        <>
            <Head title="Home" />
            <HeroSection />
            <AboutSection />
            <WhyUsSection />
        </>
    );
}
