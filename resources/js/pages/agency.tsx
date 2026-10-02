import { Head } from '@inertiajs/react';
import AgencyHero from '@/components/agency/AgencyHero';
import AgencyAbout from '@/components/agency/AgencyAbout';
import { JourneySection } from '@/components/agency/JourneySection';
import WhoWeAreSection from '@/components/home/who-we-are-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import FAQ from '@/components/agency/FAQ';

export default function () {
    return (
        <>

            <Head title="Agency" />

            <AgencyHero />
            <AgencyAbout />
            <WhoWeAreSection/>
            <JourneySection />
            <TestimonialsSection/>
            <FAQ />


        </>
    )
};

/*
hero 
why us
about us
our process
testimonial
faq
cta


*/