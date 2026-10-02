import { Head } from '@inertiajs/react';
import AgencyHero from '@/components/agency/AgencyHero';
import AgencyAbout from '@/components/agency/AgencyAbout';

export default function () {
    return (
        <>

            <Head title="Agency" />

            <AgencyHero />
            <AgencyAbout />


        </>
    )
};