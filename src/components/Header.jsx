import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const navLinks = [
    { name: "Startseite", href: "/" },
    { name: "Über uns", href: "/about" },
    { name: "Katalog", href: "/catalog" },
    { name: "Kontakt", href: "/contact" },
];

export default function MultiSchrankHeader() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="relative z-999 overflow-hidden bg-neutral-950 text-white">
            <nav
                className={`fixed top-0 z-50 w-full transition-all duration-500 ${
                    scrolled
                        ? "border-b border-white/10 bg-neutral-950/75 backdrop-blur-2xl"
                        : "bg-transparent"
                }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-10">
                    {/* Logo */}
                    <Link to="/" className="group relative inline-flex items-center gap-3">
                        <div className="pointer-events-none absolute -left-4 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full bg-orange-500/0 blur-2xl transition duration-500 group-hover:bg-orange-500/10" />

                        <img src="/logo.png" alt="logo" className="h-12 sm:h-16" />

                        <div>
                            <h1 className="text-lg font-semibold tracking-wide text-white transition duration-300 group-hover:text-orange-100">
                                MultiSchrank
                            </h1>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((item) => (
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

                    {/* Desktop CTA */}
                    <div className="hidden items-center gap-3 lg:flex">
                        <a
                            href="https://wa.me/4915563440433"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 backdrop-blur-xl transition duration-300 hover:scale-[1.03] hover:border-green-400/50 hover:bg-green-500/20"
                        >
                            <FaWhatsapp size={16} />
                            Jetzt anfragen
                        </a>

                        <Link
                            to="/catalog"
                            className="group inline-flex items-center gap-2 rounded-full bg-orange-400 px-5 py-2.5 text-sm font-semibold text-neutral-900 transition duration-300 hover:scale-[1.03] hover:bg-orange-300 hover:shadow-[0_10px_40px_rgba(249,115,22,0.22)]"
                        >
                            Katalog entdecken
                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:border-orange-300/20 hover:bg-white/10 hover:text-orange-200 lg:hidden"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`overflow-hidden border-t border-white/10 bg-neutral-950/90 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
                        mobileOpen ? "max-h-105 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((item) => (
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
                                Jetzt anfragen
                            </a>

                            <Link
                                to="/catalog"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-400 px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-orange-300"
                            >
                                Katalog entdecken
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}