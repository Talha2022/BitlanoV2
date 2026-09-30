import { Head } from "@inertiajs/react";
import { useEffect } from "react";
import ServiceHero from "@/components/subservice/service-hero";
import ServiceIntro from "@/components/subservice/service-intro";
import ServiceOffers from "@/components/subservice/service-offers";
import ServiceStatement from "@/components/subservice/service-statement";
import OtherExpertise from "@/components/subservice/other-expertise";
import { services, type ServiceData } from "@/data/services";

interface SubserviceProps {
    slug: string;
}

export default function Subservice({ slug }: SubserviceProps) {
    useEffect(() => {
        // Ensure page starts at the top when navigating
        window.scrollTo(0, 0);
    }, [slug]);

    const serviceData: ServiceData | undefined = services[slug];

    if (!serviceData) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Service not found.
            </div>
        );
    }

    return (
        <>
            <Head title={serviceData.title} />
            
            <div className="w-full min-h-screen flex flex-col">
                <ServiceHero 
                    title={serviceData.title} 
                    label={serviceData.label} 
                    bgImage={serviceData.bg} 
                />
                
                <ServiceIntro text={serviceData.intro} />
                
                <ServiceOffers offers={serviceData.offers} />
                
                <ServiceStatement 
                    text={serviceData.statement} 
                    stats={serviceData.stats} 
                />
                
                <OtherExpertise currentSlug={slug} />
                
                {/* Other subservice specific components will be imported and placed here */}
            </div>
        </>
    );
}
