import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Catalog", href: "#catalog" },
    { name: "Contact", href: "#contact" },
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
        <header className="relative overflow-hidden bg-neutral-950 text-white z-90">

            {/* Navbar */}
            <nav
                className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
                    ? "border-b border-white/10 bg-neutral-950/75 backdrop-blur-2xl"
                    : "bg-transparent"
                    }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 py-4 lg:px-10">
                    {/* Logo */}
                    <a href="#" className="group relative inline-flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.06)] backdrop-blur-xl transition duration-300 group-hover:scale-105 group-hover:border-amber-400/40">
                            <span className="text-sm font-semibold text-white">
                                M
                            </span>
                        </div>
                        <div>
                            <p className="text-[11px] uppercase tracking-[0.45em] text-white/45">
                                Premium Interiors
                            </p>
                            <h1 className="text-lg font-semibold tracking-wide text-white">
                                MultiSchrank
                            </h1>
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="group relative text-sm font-medium text-white/75 transition hover:text-white"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden items-center gap-3 lg:flex">
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 backdrop-blur-xl transition duration-300 hover:scale-[1.03] hover:border-green-400/50 hover:bg-green-500/20"
                        >
                            <MessageCircle size={16} />
                            Contact Us
                        </a>

                        <a
                            href="#catalog"
                            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition duration-300 hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(255,255,255,0.18)]"
                        >
                            Explore Catalog
                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:bg-white/10 lg:hidden"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`overflow-hidden border-t border-white/10 bg-neutral-950/90 backdrop-blur-2xl transition-all duration-500 lg:hidden ${mobileOpen ? "max-h-105 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="mx-auto max-w-7xl px-5 sm:px-6 py-5">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="rounded-xl border border-white/8 bg-white/3 px-4 py-3 text-sm text-white/80 transition hover:border-white/15 hover:bg-white/5 hover:text-white"
                                >
                                    {item.name}
                                </a>
                            ))}

                            <a
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-green-400/20 bg-green-500/10 px-4 py-3 text-sm font-medium text-green-300 transition hover:bg-green-500/20"
                            >
                                <MessageCircle size={16} />
                                Contact Us
                            </a>

                            <a
                                href="#catalog"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:opacity-90"
                            >
                                Explore Catalog
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}