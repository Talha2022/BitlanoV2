import type { PropsWithChildren } from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { useLenis } from '@/hooks/use-lenis';

export default function GuestLayout({ children }: PropsWithChildren) {
    useLenis();

    return (
        <div className="relative bg-black">
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar transparent />
            </div>
            <main>{children}</main>
            <Footer />
        </div>
    );
}
