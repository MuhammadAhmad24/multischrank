import React from "react";
import { ArrowUpRight, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Catalog", href: "#catalog" },
    { name: "Contact", href: "#contact" },
];

export default function MultiSchrankFooter() {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-neutral-950 text-white">
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
                <div className="absolute right-[-8%] bottom-[-10%] h-80 w-80 rounded-full bg-white/5 blur-3xl" />
            </div>

            {/* Fine Grid Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] hidden" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 pt-16 lg:px-10">
                <div className="grid gap-10 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <a href="#" className="group inline-flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.06)] backdrop-blur-xl transition duration-300 group-hover:scale-105 group-hover:border-amber-400/40">
                                <span className="text-sm font-semibold text-white">M</span>
                            </div>
                            <div>
                                <p className="text-[11px] uppercase tracking-[0.45em] text-white/45">
                                    Premium Interiors
                                </p>
                                <h2 className="text-lg font-semibold tracking-wide text-white">
                                    MultiSchrank
                                </h2>
                            </div>
                        </a>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
                            Modern premium wardrobes and interior solutions crafted with
                            elegance, functionality, and timeless design.
                        </p>

                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 px-4 py-2.5 text-sm font-medium text-green-300 backdrop-blur-xl transition duration-300 hover:scale-[1.03] hover:border-green-400/50 hover:bg-green-500/20"
                        >
                            <MessageCircle size={16} />
                            Start Your Project
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/45">
                            Quick Links
                        </h3>
                        <div className="mt-5 flex flex-col gap-3">
                            {footerLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="w-fit text-sm text-white/70 transition hover:text-white"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/45">
                            Contact
                        </h3>
                        <div className="mt-5 space-y-4">
                            <a
                                href="mailto:info@multischrank.com"
                                className="flex items-start gap-3 text-sm text-white/70 transition hover:text-white"
                            >
                                <Mail size={16} className="mt-0.5 text-amber-400" />
                                <span>info@multischrank.com</span>
                            </a>

                            <a
                                href="tel:+923001234567"
                                className="flex items-start gap-3 text-sm text-white/70 transition hover:text-white"
                            >
                                <Phone size={16} className="mt-0.5 text-amber-400" />
                                <span>+49 111 1234567</span>
                            </a>

                            <div className="flex items-start gap-3 text-sm text-white/70">
                                <MapPin size={16} className="mt-0.5 text-amber-400" />
                                <span>Germany</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA / Catalog */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/45">
                            Explore
                        </h3>

                        <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                            <p className="text-sm leading-7 text-white/70">
                                Discover elegant wardrobe concepts, premium materials, and
                                custom interior solutions designed for modern living.
                            </p>

                            <a
                                href="#catalog"
                                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition duration-300 hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(255,255,255,0.18)]"
                            >
                                Explore Catalog
                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-white/45 md:flex-row">
                    <p>© {new Date().getFullYear()} MultiSchrank. All rights reserved.</p>

                    <p className="text-center md:text-right">
                        Designed by{" "}
                        <a
                            href="https://gplusagency.com"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-white/75 transition hover:text-amber-400"
                        >
                            G+ Agency
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}