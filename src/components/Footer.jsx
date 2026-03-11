import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Catalog", href: "/catalog" },
    { name: "Contact", href: "/contact" },
];

const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
];

const brand = "MultiSchrank";

function AnimatedBrandText({ text }) {
    return (
        <h2
            className="
                select-none
                leading-none
                tracking-[-0.08em]
                text-white
                text-[3.4rem]
                sm:text-[6rem]
                md:text-[8rem]
                lg:text-[11rem]
                xl:text-[14rem]
                2xl:text-[16rem]
                font-semibold
                whitespace-nowrap
            "
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    whileHover={{
                        scaleY: 1.08,
                        scaleX: 1.03,
                        y: -4,
                        color: "#fdba74",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 16,
                    }}
                    className="inline-block origin-bottom transition-colors duration-300"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </h2>
    );
}

export default function MultiSchrankFooter() {
    return (
        <footer className="relative overflow-hidden bg-neutral-950 text-white">
            {/* subtle background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-orange-300/6 blur-3xl" />
                <div className="absolute right-[-10%] bottom-[-20%] h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_40%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(249,115,22,0.08),transparent_24%)]" />
            </div>

            <div className="relative mx-auto max-w-400 px-5 pb-5 pt-8 sm:px-8 md:px-10 lg:px-12 lg:pt-10">
                {/* top area */}
                <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.7fr] lg:gap-12">
                    {/* brand / logo */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <Link to="/" className="group relative inline-flex items-center gap-3">
                                <div className="pointer-events-none absolute -left-4 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full bg-orange-500/0 blur-2xl transition duration-500 group-hover:bg-orange-500/10" />
                                <img src="/logo.png" alt="logo" className="h-12 sm:h-16" />
                                <div>
                                    <h1 className="text-lg font-semibold tracking-wide text-white transition duration-300 group-hover:text-orange-100">
                                        MultiSchrank
                                    </h1>
                                </div>
                            </Link>

                            <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
                                Premium wardrobes and interior solutions crafted with
                                elegance, precision, and timeless design.
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
                    </div>

                    {/* nav */}
                    <div>
                        <ul className="space-y-2.5">
                            {navLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                        className="text-[15px] text-white transition duration-300 hover:text-orange-200"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* contact */}
                    <div>
                        <div className="space-y-2.5 text-[15px] leading-relaxed text-white">
                            <a
                                href="mailto:info@multischrank.com"
                                className="block transition duration-300 hover:text-orange-200"
                            >
                                info@multischrank.com
                            </a>
                            <a
                                href="tel:+491111234567"
                                className="block transition duration-300 hover:text-orange-200"
                            >
                                +49 111 1234567
                            </a>
                            <div className="pt-1 text-white/85">
                                <p>MultiSchrank Interiors</p>
                                <p>Germany</p>
                            </div>
                        </div>
                    </div>

                    {/* socials */}
                    <div>
                        <ul className="space-y-2.5">
                            {socialLinks.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-[15px] text-white transition duration-300 hover:text-orange-200"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* huge brand text */}
                <div className="overflow-hidden pt-2">
                    <AnimatedBrandText text={brand} />
                </div>

                {/* bottom bar */}
                <div className="mt-4 flex flex-col gap-3 border-t border-white/20 pt-4 text-xs text-white sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} MultiSchrank | Designed &
                        developed by{" "}
                        <a href="#" className="text-orange-200 transition duration-300 hover:text-orange-300">
                            G+ Agency
                        </a>
                    </p>

                    <a
                        href="#"
                        className="transition duration-300 hover:text-orange-200"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
}