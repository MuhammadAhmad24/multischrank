import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ScrollCharacterHeading from "./ScrollCharacterHeading";
import {
    Sparkles,
    Layers3,
    Hammer,
    BadgeCheck,
    ScanSearch,
    ArrowUpRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";

const content = {
    de: {
        badge: "Materialien & Handwerkskunst",
        line1: "Entwickelt mit Blick fürs Detail.",
        line2: "Vollendet mit klarer Absicht.",
        desc: "Unser Fokus liegt auf Materialien, Präzision und Funktionalität, um Möbel zu schaffen, die in ihrer Optik anspruchsvoll, in ihrer Qualität hochwertig und im Alltag mühelos sind.",
        cta: "Besprechen Sie Ihr Projekt",
        featureLabel: "Merkmal",
        features: [
            {
                number: "01",
                title: "Hochwertige Materialien",
                text: "Sorgfältig ausgewählte Oberflächen, edle Texturen und raffinierte Materialien, die Wärme, Qualität und eine langanhaltende Ausstrahlung vermitteln.",
            },
            {
                number: "02",
                title: "Präzise Handwerkskunst",
                text: "Jedes Möbelkonzept wird mit Genauigkeit, Ausgewogenheit und einem hohen Anspruch an Details gestaltet – aus jeder Perspektive.",
            },
            {
                number: "03",
                title: "Intelligente Funktion",
                text: "Durchdachter Stauraum, praktische Aufteilungen und eine klare Nutzbarkeit schaffen Innenräume, die sich im Alltag mühelos anfühlen.",
            },
            {
                number: "04",
                title: "Raffinierte Ausführung",
                text: "Eine zeitlose Formensprache mit klaren Linien, sanfter Balance und hochwertigen Details – entwickelt für moderne Räume.",
            },
        ],
    },
    en: {
        badge: "Materials & Craftsmanship",
        line1: "Designed with an eye for detail.",
        line2: "Finished with clear intention.",
        desc: "Our focus is on materials, precision, and functionality to create furniture that feels refined in appearance, premium in quality, and effortless in everyday use.",
        cta: "Discuss your project",
        featureLabel: "Feature",
        features: [
            {
                number: "01",
                title: "Premium materials",
                text: "Carefully selected finishes, elegant textures, and refined materials that bring warmth, quality, and a lasting visual presence.",
            },
            {
                number: "02",
                title: "Precise craftsmanship",
                text: "Each furniture concept is shaped with accuracy, balance, and a strong attention to detail from every angle.",
            },
            {
                number: "03",
                title: "Intelligent function",
                text: "Thoughtful storage, practical layouts, and clear usability create interiors that feel effortless in daily life.",
            },
            {
                number: "04",
                title: "Refined execution",
                text: "A timeless design language with clean lines, soft balance, and premium details developed for modern spaces.",
            },
        ],
    },
};

function useIsMobile(breakpoint = 767) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= breakpoint);
        check();

        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, [breakpoint]);

    return isMobile;
}

function FeatureCard({ item, index, featureLabel, isMobile }) {
    const icons = [
        <Layers3 size={18} className="text-orange-400" />,
        <Hammer size={18} className="text-orange-400" />,
        <ScanSearch size={18} className="text-orange-400" />,
        <BadgeCheck size={18} className="text-orange-400" />,
    ];

    const mobileCardReveal = {
        hidden: {
            opacity: 0,
            scale: 1,
            filter: "blur(0px)",
        },
        show: (i) => ({
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.45,
                delay: i * 0.06,
                ease: "easeOut",
            },
        }),
    };

    const desktopCardReveal = {
        hidden: {
            opacity: 0,
            y: 36,
            scale: 0.985,
            filter: "blur(8px)",
        },
        show: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.85,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    return (
        <motion.div
            custom={index}
            variants={isMobile ? mobileCardReveal : desktopCardReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: isMobile ? 0.08 : 0.18 }}
            whileHover={
                isMobile
                    ? undefined
                    : {
                        y: -4,
                        transition: { duration: 0.25, ease: "easeOut" },
                    }
            }
            className={`group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-5 transition-all duration-500 md:p-8 ${isMobile
                    ? ""
                    : "backdrop-blur-2xl hover:border-orange-300/20 hover:shadow-[0_22px_60px_rgba(0,0,0,0.26)]"
                }`}
        >
            <div
                className={`pointer-events-none absolute inset-0 rounded-4xl bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_34%)] ${isMobile ? "opacity-45" : "opacity-70"
                    }`}
            />

            {!isMobile && (
                <motion.div
                    animate={{ x: ["-160%", "220%"] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.6,
                    }}
                    className="pointer-events-none absolute -top-[20%] left-0 h-[140%] w-[42%] -rotate-12 bg-linear-to-r from-transparent via-white/14 to-transparent blur-2xl"
                />
            )}

            <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                    <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 ${isMobile ? "" : "backdrop-blur-sm"
                            }`}
                    >
                        {icons[index]}
                    </div>

                    <div className="text-3xl font-semibold tracking-[-0.05em] text-orange-200/10 md:text-5xl">
                        {item.number}
                    </div>
                </div>

                <div className="mt-5 md:mt-6">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-orange-200/40 md:text-xs">
                        {featureLabel} {item.number}
                    </p>

                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white md:text-2xl">
                        {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/60 md:text-base md:leading-7">
                        {item.text}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default function MultiSchrankMaterials() {
    const sectionRef = useRef(null);
    const { lang } = useLanguage();
    const t = content[lang];
    const isMobile = useIsMobile();

    const introFade = isMobile
        ? {
            hidden: {
                opacity: 0,
                y: 0,
                filter: "blur(0px)",
            },
            show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                    duration: 0.45,
                    ease: "easeOut",
                },
            },
        }
        : {
            hidden: {
                opacity: 0,
                y: 30,
                filter: "blur(10px)",
            },
            show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                },
            },
        };

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-neutral-950 py-6 text-white md:py-18"
        >
            <div className="pointer-events-none absolute inset-0">
                {!isMobile ? (
                    <>
                        <motion.div
                            animate={{ y: [0, -24, 0], scale: [1, 1.04, 1] }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute left-[-10%] top-[8%] h-80 w-80 rounded-full bg-orange-500/10 blur-3xl"
                        />
                        <motion.div
                            animate={{ y: [0, 22, 0], scale: [1, 1.03, 1] }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute right-[-8%] bottom-[10%] h-96 w-96 rounded-full bg-orange-300/6 blur-3xl"
                        />
                    </>
                ) : (
                    <>
                        <div className="absolute left-[-18%] top-[8%] h-52 w-52 rounded-full bg-orange-500/8 blur-3xl" />
                        <div className="absolute right-[-18%] bottom-[8%] h-60 w-60 rounded-full bg-orange-300/5 blur-3xl" />
                    </>
                )}

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(249,115,22,0.08),transparent_26%)]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
                <motion.div
                    variants={introFade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <motion.div
                        whileHover={isMobile ? undefined : { y: -2, scale: 1.02 }}
                        className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-orange-200 ${isMobile ? "" : "backdrop-blur-xl"
                            }`}
                    >
                        {!isMobile ? (
                            <motion.span
                                animate={{
                                    rotate: [0, 8, -6, 0],
                                    scale: [1, 1.07, 1],
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <Sparkles size={14} className="text-orange-400" />
                            </motion.span>
                        ) : (
                            <span>
                                <Sparkles size={14} className="text-orange-400" />
                            </span>
                        )}
                        {t.badge}
                    </motion.div>

                    {isMobile ? (
                        <div className="mt-6 sm:mt-8">
                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                                {t.line1}
                                <br />
                                <span className="text-white/80">{t.line2}</span>
                            </h2>
                        </div>
                    ) : (
                        <ScrollCharacterHeading line1={t.line1} line2={t.line2} />
                    )}

                    <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/65 md:mt-6 md:text-lg md:leading-8">
                        {t.desc}
                    </p>

                    <div className="mt-7 flex justify-center md:mt-8">
                        <motion.a
                            href="https://wa.me/4915563440433"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={isMobile ? undefined : { y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-green-400/25 bg-green-500/10 px-5 py-3 text-sm font-medium text-green-300 transition duration-300 hover:border-green-400/50 hover:bg-green-500/20 sm:px-6 md:py-3.5 ${isMobile ? "" : "backdrop-blur-xl"
                                }`}
                        >
                            {!isMobile && (
                                <motion.span
                                    animate={{ x: ["-130%", "180%"] }}
                                    transition={{
                                        duration: 3.2,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="pointer-events-none absolute -top-[30%] left-0 h-[160%] w-[34%] -rotate-12 bg-linear-to-r from-transparent via-white/18 to-transparent blur-xl"
                                />
                            )}

                            <FaWhatsapp size={17} />
                            {t.cta}
                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </motion.a>
                    </div>
                </motion.div>

                <div className="mt-5 grid gap-4 sm:mt-16 md:grid-cols-2 md:gap-5 pb-10 sm:pb-0">
                    {t.features.map((item, index) => (
                        <FeatureCard
                            key={item.title}
                            item={item}
                            index={index}
                            featureLabel={t.featureLabel}
                            isMobile={isMobile}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}