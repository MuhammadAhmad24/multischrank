import React from "react";
import { motion } from "framer-motion";
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
        legalLinks: [
            { name: "Impressum", href: "/Impressum" },
            { name: "Datenschutz", href: "/PrivacyPolicy" },
            { name: "AGB", href: "/Terms" },
        ],
        desc: "Hochwertige Kleiderschränke und Innenraumlösungen, gefertigt mit Eleganz, Präzision und zeitlosem Design.",
        cta: "Projekt starten",
        developedBy: "Design & Entwicklung von",
    },
    en: {
        navLinks: [
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Catalog", href: "/catalog" },
            { name: "Contact", href: "/contact" },
        ],
        legalLinks: [
            { name: "Imprint", href: "/Impressum" },
            { name: "Privacy Policy", href: "/PrivacyPolicy" },
            { name: "Terms & Conditions", href: "/Terms" },
        ],
        desc: "High-quality wardrobes and interior solutions crafted with elegance, precision, and timeless design.",
        cta: "Start your project",
        developedBy: "Design & Development by",
    },
};

const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
];

const brand = "MultiSchrank";

function AnimatedBrandText({ text }) {
    return (
        <h2 className="select-none leading-none text-white text-[2.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[12rem] 2xl:text-[14rem] font-semibold whitespace-nowrap">
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
                    className="inline-block mx-px origin-bottom transition-colors duration-300"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </h2>
    );
}

export default function MultiSchrankFooter() {
    const { lang } = useLanguage();
    const t = content[lang];

    return (
        <footer className="relative overflow-hidden bg-neutral-950 text-white">
            {/* bg */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-orange-300/6 blur-3xl" />
                <div className="absolute right-[-10%] bottom-[-20%] h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_40%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(249,115,22,0.08),transparent_24%)]" />
            </div>

            <div className="relative mx-auto max-w-400 px-5 pb-5 pt-8 sm:px-8 md:px-10 lg:px-12 lg:pt-10">
                <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.7fr] lg:gap-12">

                    {/* brand */}
                    <div>
                        <Link to="/" className="group inline-flex items-center gap-3">
                            <img src="/logo.png" alt="logo" className="h-12 sm:h-16" />
                            <h1 className="text-lg font-semibold text-white group-hover:text-orange-100">
                                MultiSchrank
                            </h1>
                        </Link>

                        <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
                            {t.desc}
                        </p>

                        <a
                            href="https://wa.me/4915563440433"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 px-4 py-2.5 text-sm font-medium text-green-300 backdrop-blur-xl hover:scale-[1.03]"
                        >
                            <FaWhatsapp size={16} />
                            {t.cta}
                        </a>
                    </div>

                    {/* nav */}
                    <div>
                        <ul className="space-y-2.5">
                            {t.navLinks.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.href} className="hover:text-orange-200">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* contact */}
                    <div className="space-y-2.5 text-[15px]">
                        <p className="text-white/80">
                            MultiSchrank <br /> Oleg Morawski <br />
                            Gartenstr. 72 <br />
                            D-01445 Radebeul <br />
                        </p>
                        <a href="tel:4915563440433">+49 155 63440433</a> <br />
                        <a href="mailto:post@multischrank.de">post@multischrank.de</a> <br />
                    </div>

                    {/* socials */}
                    <div>
                        <ul className="space-y-2.5">
                            {socialLinks.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* brand text */}
                <div className="overflow-hidden pt-2">
                    <AnimatedBrandText text={brand} />
                </div>

                {/* bottom */}
                <div className="mt-4 flex flex-col gap-4 border-t border-white/20 pt-4 text-xs sm:flex-row sm:justify-between">
                    <p className="leading-5 sm:leading-normal">
                        © {new Date().getFullYear()} MultiSchrank | {t.developedBy}{" "}
                        <a
                            href="https://ggagentur.de/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex whitespace-nowrap text-orange-200 hover:text-orange-100"
                        >
                            G+G Agency
                        </a>
                    </p>

                    <div className="flex gap-4">
                        {t.legalLinks.map((item) => (
                            <Link key={item.name} to={item.href}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}