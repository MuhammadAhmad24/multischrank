import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";

// TRANSLATIONS
const content = {
    de: {
        badge: "Projekt starten",
        title1: "Lassen Sie uns einen Raum schaffen, der",
        highlight: "präzise, warm und hochwertig wirkt.",
        desc: "Vom Konzept bis zur finalen Umsetzung gestalten wir Möbel und Innenräume mit Fokus auf Details, Balance und Handwerkskunst. Schaffen Sie einen Raum, der Qualität in jeder Linie widerspiegelt.",
        primaryBtn: "Jetzt starten",
        whatsappBtn: "Per WhatsApp kontaktieren",
        imageAlt: "Hochwertiges Interieur",
        imageBadge: "Premium Design",
        cardLabel: "Beratung buchen",
        cardText:
            "Verwirklichen Sie Ihre Vision mit anspruchsvollem Design und individueller Umsetzung.",
    },
    en: {
        badge: "Start project",
        title1: "Let us create a space that feels",
        highlight: "precise, warm, and premium.",
        desc: "From concept to final execution, we design furniture and interiors with a focus on detail, balance, and craftsmanship. Create a space that reflects quality in every line.",
        primaryBtn: "Start now",
        whatsappBtn: "Contact via WhatsApp",
        imageAlt: "Premium interior",
        imageBadge: "Premium Design",
        cardLabel: "Book consultation",
        cardText:
            "Bring your vision to life with refined design and a tailored execution.",
    },
};

export default function AboutCTASection() {
    const { lang } = useLanguage();
    const t = content[lang] || content.en;

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

    // Desktop bilkul same rakha hai, sirf mobile ke liye halka animation
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: isMobile ? 0.08 : 0.14,
                delayChildren: isMobile ? 0.04 : 0.12,
            },
        },
    };

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: isMobile ? 18 : 40,
            filter: isMobile ? "blur(4px)" : "blur(10px)",
        },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: isMobile ? 0.55 : 0.9,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const scaleIn = {
        hidden: {
            opacity: 0,
            scale: isMobile ? 0.985 : 0.96,
            filter: isMobile ? "blur(4px)" : "blur(10px)",
        },
        show: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: isMobile ? 0.6 : 1,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const infoCardMotion = isMobile
        ? {
            initial: { y: 10, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            transition: {
                delay: 0.12,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
            },
        }
        : {
            initial: { y: 24, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            transition: {
                delay: 0.35,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        };

    return (
        <section className="relative overflow-hidden bg-[#0b0b0b] px-4 py-12 text-white sm:px-6 sm:py-20 lg:px-8">
            <div
                className={`pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] ${isMobile ? "bg-size-[30px_30px]" : "bg-size-[42px_42px]"
                    }`}
            />

            <div className="pointer-events-none absolute inset-0">
                <div
                    className={`absolute left-[-10%] top-[-15%] rounded-full bg-orange-500/12 ${isMobile ? "h-44 w-44 blur-2xl" : "h-72 w-72 blur-3xl"
                        }`}
                />
                <div
                    className={`absolute bottom-[-20%] right-[-10%] rounded-full bg-orange-600/10 ${isMobile ? "h-56 w-56 blur-2xl" : "h-96 w-96 blur-3xl"
                        }`}
                />
                <div
                    className={`absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)] ${isMobile ? "opacity-70" : ""
                        }`}
                />
                <div
                    className={`absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.10),transparent_28%)] ${isMobile ? "opacity-80" : ""
                        }`}
                />
                <div
                    className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] ${isMobile
                            ? "opacity-[0.05] bg-size-[30px_30px]"
                            : "opacity-[0.08] bg-size-[42px_42px]"
                        }`}
                />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: isMobile ? 0.15 : 0.3 }}
                className="relative mx-auto max-w-7xl"
            >
                <motion.div
                    variants={scaleIn}
                    className={`relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 ${isMobile ? "backdrop-blur-md" : "backdrop-blur-xl"
                        }`}
                >
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-200/25 to-transparent" />
                        <div
                            className={`absolute left-10 top-10 rounded-full bg-orange-500/10 ${isMobile
                                    ? "h-24 w-24 blur-2xl"
                                    : "h-40 w-40 blur-3xl"
                                }`}
                        />
                        <div
                            className={`absolute bottom-0 right-0 rounded-full bg-orange-500/10 ${isMobile
                                    ? "h-32 w-32 blur-2xl"
                                    : "h-56 w-56 blur-3xl"
                                }`}
                        />
                    </div>

                    <div className="grid items-center gap-10 px-4 py-10 sm:px-8 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-14 lg:py-14">
                        <div className="relative z-10">
                            <motion.div
                                variants={fadeUp}
                                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-orange-200"
                            >
                                <Sparkles size={14} className="text-orange-400" />
                                {t.badge}
                            </motion.div>

                            <motion.h2
                                variants={fadeUp}
                                className="max-w-3xl text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl lg:text-[64px]"
                            >
                                {t.title1}
                                <span className="block bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                                    {t.highlight}
                                </span>
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base"
                            >
                                {t.desc}
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                className="mt-8 flex flex-col gap-4 sm:flex-row"
                            >
                                <a
                                    href="/contact"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-400 px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-orange-300"
                                >
                                    {t.primaryBtn}
                                    <ArrowUpRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </a>

                                <a
                                    href="https://wa.me/4915563440433"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/3 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:border-orange-300/20 hover:bg-white/[0.07]"
                                >
                                    {t.whatsappBtn}
                                    <FaWhatsapp
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                                    />
                                </a>
                            </motion.div>
                        </div>

                        <motion.div variants={fadeUp} className="relative z-10">
                            <div
                                className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-[#151515] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] ${isMobile ? "backdrop-blur-0" : ""
                                    }`}
                            >
                                <div className="relative overflow-hidden rounded-[22px]">
                                    <img
                                        src="/about-cta-img.jpg"
                                        alt={t.imageAlt}
                                        className="h-80 w-full object-cover md:h-95"
                                        loading="lazy"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />

                                    <div
                                        className={`absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/70 ${isMobile
                                                ? "backdrop-blur-sm"
                                                : "backdrop-blur-md"
                                            }`}
                                    >
                                        {t.imageBadge}
                                    </div>

                                    <motion.div
                                        initial={infoCardMotion.initial}
                                        whileInView={infoCardMotion.whileInView}
                                        viewport={{ once: true, amount: isMobile ? 0.2 : 0.3 }}
                                        transition={infoCardMotion.transition}
                                        className={`absolute bottom-4 left-4 right-4 rounded-[20px] border border-white/10 bg-white/10 p-4 ${isMobile
                                                ? "backdrop-blur-md"
                                                : "backdrop-blur-xl"
                                            }`}
                                    >
                                        <p className="text-xs uppercase tracking-[0.22em] text-orange-300">
                                            {t.cardLabel}
                                        </p>
                                        <p className="mt-2 text-lg font-light text-white">
                                            {t.cardText}
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}