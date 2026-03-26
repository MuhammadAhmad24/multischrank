import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const content = {
    de: {
        navLinks: [
            { name: "Startseite", href: "/" },
            { name: "Über uns", href: "/about" },
            { name: "Katalog", href: "/catalog" },
            { name: "Kontakt", href: "/contact" },
        ],
        whatsapp: "Jetzt anfragen",
        catalog: "Katalog entdecken",
    },
    en: {
        navLinks: [
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Catalog", href: "/catalog" },
            { name: "Contact", href: "/contact" },
        ],
        whatsapp: "Get in touch",
        catalog: "Explore catalog",
    },
};

export default function MultiSchrankHeader() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { lang, setLang } = useLanguage();

    const t = content[lang];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="relative z-999 overflow-hidden bg-[#009cde] text-white">
            {/* ${
                    scrolled
                        ? "border-b border-white/10 bg-neutral-950/75 backdrop-blur-2xl"
                        : "bg-neutral-950"
                } */}
            <nav
                className={`relative top-0 z-50 w-full transition-all duration-500 bg-[#009cde]`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-10">
                    <Link to="/" className="group relative inline-flex items-center gap-3">
                        <img src="/logo.png" alt="logo" className="h-12 sm:h-16" />
                        <div>
                            <h1 className="text-lg font-semibold tracking-wide text-white transition duration-300 group-hover:text-orange-100">
                                MultiSchrank
                            </h1>
                        </div>
                    </Link>

                    <div className="hidden items-center gap-8 lg:flex">
                        {t.navLinks.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="group relative text-sm font-medium text-white/75 transition hover:text-white"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    <div className="hidden items-center gap-3 lg:flex">

                        <a
                            href="https://wa.me/4915563440433"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 backdrop-blur-xl transition duration-300 hover:scale-[1.03] hover:border-green-400/50 hover:bg-green-500/20"
                        >
                            <FaWhatsapp size={16} />
                            {t.whatsapp}
                        </a>

                        <div className="flex overflow-hidden rounded-full border border-white/10 bg-white/5 text-xs">
                            <button
                                onClick={() => setLang("de")}
                                className={`px-3 py-1.5 cursor-pointer transition ${lang === "de"
                                        ? "bg-orange-400 text-black"
                                        : "text-white/70 hover:text-white"
                                    }`}
                            >
                                DE
                            </button>
                            <button
                                onClick={() => setLang("en")}
                                className={`px-3 py-1.5 cursor-pointer transition ${lang === "en"
                                        ? "bg-orange-400 text-black"
                                        : "text-white/70 hover:text-white"
                                    }`}
                            >
                                EN
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:border-orange-300/20 hover:bg-white/10 hover:text-orange-200 lg:hidden"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <div
                    className={`overflow-hidden border-t border-white/10 bg-neutral-950/90 backdrop-blur-2xl transition-all duration-500 lg:hidden ${mobileOpen ? "max-h-105 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
                        <div className="mb-4 flex justify-center">
                            <div className="flex overflow-hidden rounded-full border border-white/10 bg-white/5 text-xs">
                                <button
                                    onClick={() => setLang("de")}
                                    className={`px-3 py-1.5 transition ${lang === "de"
                                            ? "bg-orange-400 text-black"
                                            : "text-white/70 hover:text-white"
                                        }`}
                                >
                                    DE
                                </button>
                                <button
                                    onClick={() => setLang("en")}
                                    className={`px-3 py-1.5 transition ${lang === "en"
                                            ? "bg-orange-400 text-black"
                                            : "text-white/70 hover:text-white"
                                        }`}
                                >
                                    EN
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            {t.navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="rounded-xl border border-white/8 bg-white/3 px-4 py-3 text-sm text-white/80 transition hover:border-orange-300/20 hover:bg-white/5 hover:text-white"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <a
                                href="https://wa.me/4915563440433"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-green-400/20 bg-green-500/10 px-4 py-3 text-sm font-medium text-green-300 transition hover:bg-green-500/20"
                            >
                                <FaWhatsapp size={16} />
                                {t.whatsapp}
                            </a>

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}