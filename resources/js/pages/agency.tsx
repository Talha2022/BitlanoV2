import { Head } from '@inertiajs/react';
import AgencyHero from '@/components/agency/AgencyHero';
import AgencyWhyUs from '@/components/agency/AgencyWhyUs';
import AgencyAbout from '@/components/agency/AgencyAbout';
import WhoWeAreSection from '@/components/home/who-we-are-section';
import { JourneySection } from '@/components/agency/JourneySection';
import TestimonialsSection from '@/components/home/testimonials-section';
import FAQ from '@/components/agency/FAQ';

export default function Agency() {
    return (
        <>
            <Head title="Agency" />

            {/* Section 1: Heading called Agency */}
            <AgencyHero />

            {/* Section 2: Why us */}
            <AgencyWhyUs />

            {/* Section 3: This is Bitlano */}
            <AgencyAbout />

            <WhoWeAreSection />
            <JourneySection />
            <TestimonialsSection />
            <FAQ />
        </>
    );
}

/*
hero 
why us
about us
our process
testimonial
faq
cta
*/
