import { useEffect } from "react";
import { Head } from "@inertiajs/react";
import StaticBackground from "@/components/contact/static-background";

const keyvisual = "/assets/contact/main.jpg";

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Head title="Contact" />

            {/* Main Split Layout */}
            <div className="flex-1 w-full flex flex-col lg:flex-row min-h-screen">

                {/* LEFT COLUMN: Contact Cards & Details */}
                <div
                    className="w-full lg:w-[48%] xl:w-[45%] 2xl:w-[42%] relative px-6 sm:px-10 lg:px-14 pt-24 sm:pt-28 pb-10 sm:pb-14 flex flex-col justify-between z-10"
                    style={{ backgroundColor: "#1a1a1a" }}
                >
                    {/* TV static overlay scoped to left column */}
                    <StaticBackground />

                    <div className="relative z-10">
                        {/* Main Title */}
                        <h1 className="text-[56px] sm:text-[68px] lg:text-[76px] font-bold tracking-tight text-white mb-6 sm:mb-8 leading-none">
                            Contact
                        </h1>

                        {/* Card 1: Greeting */}
                        <div className="bg-transparent hover:bg-[#313131] border border-white/5 rounded-2xl p-5 sm:p-6 mb-4 sm:mb-5 transition-all duration-300 shadow-lg">
                            <div className="flex items-start gap-4 sm:gap-5">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shrink-0 border border-white/10 shadow-md bg-gradient-to-br from-neutral-600 to-neutral-800 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white/60" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                                    </svg>
                                </div>
                                <div className="text-sm sm:text-base text-white/80 leading-snug sm:leading-relaxed">
                                    Hi, we would be happy to help you with your project. 👏
                                    <br />
                                    <span className="font-bold text-white">Just write us an email</span>
                                    <br />
                                    <a
                                        href="mailto:info@bitlano.com"
                                        className="font-bold text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
                                    >
                                        info@bitlano.com
                                    </a>
                                    .
                                </div>
                            </div>
                        </div>

                        {/* 3 Quick Action Buttons */}
                        <div className="grid grid-cols-3 gap-3 mb-3">
                            {/* Call */}
                            <button
                                type="button"
                                onClick={() => (window.location.href = "tel:+41522123071")}
                                className="bg-[#313131] hover:bg-[#3a3a3a] rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-colors"
                            >
                                <svg
                                    className="w-5 h-5 text-white mb-2"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                                <span className="text-sm text-[#a0a0a0]">
                                    Anrufen
                                </span>
                            </button>

                            {/* Email */}
                            <button
                                type="button"
                                onClick={() => (window.location.href = "mailto:info@eseagency.ch")}
                                className="bg-[#313131] hover:bg-[#3a3a3a] rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-colors"
                            >
                                <svg
                                    className="w-5 h-5 text-white mb-2"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                <span className="text-sm text-[#a0a0a0]">
                                    E-Mail
                                </span>
                            </button>

                            {/* Route */}
                            <button
                                type="button"
                                onClick={() =>
                                    window.open("https://maps.google.com/?q=Grubenstrasse+54+8045+Zurich+Switzerland", "_blank")
                                }
                                className="bg-[#313131] hover:bg-[#3a3a3a] rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-colors"
                            >
                                <svg
                                    className="w-5 h-5 text-white mb-2"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                                </svg>
                                <span className="text-sm text-[#a0a0a0]">
                                    Route
                                </span>
                            </button>
                        </div>

                        {/* Phone Detail */}
                        <div className="bg-[#313131] hover:bg-[#3a3a3a] rounded-xl p-4 mb-3 transition-colors cursor-pointer">
                            <p className="text-sm text-[#a0a0a0] mb-1">Telefon</p>
                            <a
                                href="tel:+41522123071"
                                className="text-base text-white no-underline block"
                            >
                                +41 52 212 30 71
                            </a>
                        </div>

                        {/* Email Detail */}
                        <div className="bg-[#313131] hover:bg-[#3a3a3a] rounded-xl p-4 mb-3 transition-colors cursor-pointer">
                            <p className="text-sm text-[#a0a0a0] mb-1">E-Mail</p>
                            <a
                                href="mailto:info@eseagency.ch"
                                className="text-base text-white no-underline block"
                            >
                                info@eseagency.ch
                            </a>
                        </div>

                        {/* Address Detail */}
                        <div className="bg-[#313131] rounded-xl p-4 transition-colors">
                            <p className="text-sm text-[#a0a0a0] mb-1">Adresse</p>
                            <div className="text-base text-white leading-snug">
                                ESE Agency
                                <br />
                                Grubenstrasse 54
                                <br />
                                8045 Zürich
                                <br />
                                Schweiz
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Keyvisual — hidden on small mobile */}
                <div className="hidden sm:flex w-full lg:w-[52%] xl:w-[55%] 2xl:w-[58%] min-h-[400px] lg:min-h-screen relative flex-col justify-end items-center overflow-hidden">
                    {/* Keyvisual background image */}
                    <img
                        src={keyvisual}
                        alt="Bitlano contact"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />

                    
                    
                </div>

            </div>
        </>
    );
}
