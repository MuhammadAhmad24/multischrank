import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../LanguageContext";

// TRANSLATIONS
const content = {
    de: {
        badge: "Unsere Partner",
        title1: "Vertrauenswürdige Partner für",
        highlight: "Materialien und Beschläge",
        desc: "Wir arbeiten mit ausgewählten Herstellern zusammen, die für Qualität, Langlebigkeit und präzise Verarbeitung im Möbelbau stehen.",
        partners: [
            {
                name: "Swiss Krono",
                desc: "Korpus- und Frontmaterialien",
                url: "https://www.swisskrono.com/ch-de/produkte/interiors/one-world-collection/?popup=redirectInfo",
                logo: "/logos/swiss-krono-logo.svg",
                whiteBg: true,
            },
            {
                name: "Egger",
                desc: "Arbeitsplatten",
                url: "https://www.egger.com/de/moebel-innenausbau/sortiment/produkte/worktops?country=DE",
                logo: "/logos/gen_egger_logo_de.svg",
                whiteBg: true,
            },
            {
                name: "Blum",
                desc: "Scharniersysteme",
                url: "https://www.blum.com/de/de/produkte/scharniersysteme/uebersicht/",
                logo: "/logos/blum.svg",
            },
            {
                name: "Hettich",
                desc: "Beschläge und Scharniere",
                url: "https://www.hettich.com/de-de/startseite",
                logo: "/logos/hettich.svg",
                whiteBg: true,
            },
            {
                name: "Inoxa",
                desc: "Küchenzubehör",
                url: "https://inoxa.it/en/kitchen",
                logo: "/logos/Inoxa_logo_bianco.svg",
            },
            {
                name: "Blanco",
                desc: "Küchensysteme",
                url: "https://www.blanco.de/",
                logo: "/logos/blanco.svg",
            },
        ],
    },
    en: {
        badge: "Our Partners",
        title1: "Trusted partners for",
        highlight: "materials and fittings",
        desc: "We work with selected manufacturers known for quality, durability, and precise workmanship in furniture production.",
        partners: [
            {
                name: "Swiss Krono",
                desc: "Cabinet and front materials",
                url: "https://www.swisskrono.com/ch-de/produkte/interiors/one-world-collection/?popup=redirectInfo",
                logo: "/logos/swiss-krono-logo.svg",
                whiteBg: true,
            },
            {
                name: "Egger",
                desc: "Worktops",
                url: "https://www.egger.com/de/moebel-innenausbau/sortiment/produkte/worktops?country=DE",
                logo: "/logos/gen_egger_logo_de.svg",
                whiteBg: true,
            },
            {
                name: "Blum",
                desc: "Hinge systems",
                url: "https://www.blum.com/de/de/produkte/scharniersysteme/uebersicht/",
                logo: "/logos/blum.svg",
            },
            {
                name: "Hettich",
                desc: "Fittings and hinges",
                url: "https://www.hettich.com/de-de/startseite",
                logo: "/logos/hettich.svg",
                whiteBg: true,
            },
            {
                name: "Inoxa",
                desc: "Kitchen accessories",
                url: "https://inoxa.it/en/kitchen",
                logo: "/logos/Inoxa_logo_bianco.svg",
            },
            {
                name: "Blanco",
                desc: "Kitchen systems",
                url: "https://www.blanco.de/",
                logo: "/logos/blanco.svg",
            },
        ],
    },
};

export default function OurPartnersSection() {
    const ref = useRef(null);
    const { lang } = useLanguage();
    const t = content[lang];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(max-width: 767px)");

        const updateIsMobile = () => setIsMobile(media.matches);
        updateIsMobile();

        if (media.addEventListener) {
            media.addEventListener("change", updateIsMobile);
            return () => media.removeEventListener("change", updateIsMobile);
        } else {
            media.addListener(updateIsMobile);
            return () => media.removeListener(updateIsMobile);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // mobile par very light movement
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? [10, -10] : [80, -80]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.15, 0.85, 1],
        isMobile ? [0.92, 1, 1, 0.95] : [0, 1, 1, 0]
    );

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: isMobile ? 0.08 : 0.1,
                delayChildren: isMobile ? 0.05 : 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: isMobile ? 18 : 36,
            scale: isMobile ? 0.985 : 0.96,
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: isMobile ? 0.45 : 0.65,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section
            ref={ref}
            className="relative overflow-hidden bg-[#070707] pb-12 pt-0 text-white sm:py-20"
        >
            {/* glow */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className={`absolute left-1/2 top-24 -translate-x-1/2 rounded-full bg-orange-500/8 ${
                        isMobile ? "h-64 w-64 blur-[90px]" : "h-96 w-md blur-[140px]"
                    }`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(249,115,22,0.06),transparent_26%)]" />
            </div>

            <div className="relative mx-auto max-w-6xl px-5 md:px-10">
                {/* heading */}
                <motion.div
                    style={{ y, opacity }}
                    className="mx-auto mb-10 max-w-3xl text-center sm:mb-16"
                >
                    <span className="text-[0.68rem] uppercase tracking-[0.32em] text-orange-200/50">
                        {t.badge}
                    </span>

                    <h2 className="mt-4 text-[2rem] font-semibold leading-tight text-white/90 sm:text-4xl md:text-5xl">
                        {t.title1}
                        <span className="block bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                            {t.highlight}
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60 md:text-base">
                        {t.desc}
                    </p>
                </motion.div>

                {/* partners grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: isMobile ? 0.08 : 0.2 }}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3"
                >
                    {t.partners.map((partner, index) => (
                        <motion.a
                            key={index}
                            variants={cardVariants}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={
                                isMobile
                                    ? {}
                                    : {
                                          y: -6,
                                          scale: 1.01,
                                      }
                            }
                            whileTap={
                                isMobile
                                    ? { scale: 0.985 }
                                    : { scale: 0.995 }
                            }
                            className={`group relative flex min-h-37.5 flex-col items-center justify-center overflow-hidden rounded-[28px] border border-white/10 bg-white/4.5 p-6 text-center backdrop-blur-md transition-all duration-300 ${
                                isMobile
                                    ? "active:border-orange-300/20"
                                    : "hover:border-orange-300/20 hover:bg-white/[0.07]"
                            }`}
                        >
                            {/* soft glow */}
                            <div className="pointer-events-none absolute inset-0 rounded-[28px]">
                                <div
                                    className={`absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent transition-opacity duration-500 ${
                                        isMobile
                                            ? "opacity-100"
                                            : "opacity-0 group-hover:opacity-100"
                                    }`}
                                />
                                <div
                                    className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl transition-opacity duration-500 ${
                                        isMobile
                                            ? "opacity-100"
                                            : "opacity-0 group-hover:opacity-100"
                                    }`}
                                />
                            </div>

                            <div className="relative z-10 flex items-center justify-center">
                                <div
                                    className={`flex w-32 items-center justify-center rounded-2xl transition-transform duration-300 ${
                                        partner.whiteBg ? "bg-white p-4" : ""
                                    } ${isMobile ? "" : "group-hover:scale-[1.03]"}`}
                                >
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-10 w-auto object-contain opacity-90 transition duration-300 group-hover:opacity-100"
                                    />
                                </div>
                            </div>

                            <p className="relative z-10 mt-4 text-sm leading-6 text-white/60">
                                {partner.desc}
                            </p>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}