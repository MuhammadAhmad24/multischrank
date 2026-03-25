import React, { useEffect, useRef, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const content = {
    de: {
        badge: "Kollektion",
        title1: "Maßgefertigte Möbel für",
        titleHighlight: "moderne Wohnräume",
        desc: "Entdecken Sie einen sorgfältig zusammengestellten Katalog aus Kleiderschränken, Stauraumlösungen, TV-Möbeln, Küchen, Schlafzimmermöbeln und individuellen Einrichtungskonzepten, die durch Zeitlosigkeit, Ausgewogenheit und hohe Qualität überzeugen.",
        cta: "Individuelles Design anfragen",
        cardLabel: "Signature-Serie",
        cardTitle: "Maßgefertigt und für lange Zeit gestaltet",
        imageAlt: "Katalog Hero",
    },
    en: {
        badge: "Collection",
        title1: "Custom-made furniture for",
        titleHighlight: "modern living spaces",
        desc: "Explore a carefully curated catalog of wardrobes, storage solutions, TV units, kitchens, bedroom furniture, and bespoke interior concepts that stand out for their timelessness, balance, and high quality.",
        cta: "Request a custom design",
        cardLabel: "Signature Series",
        cardTitle: "Custom-crafted and designed to last",
        imageAlt: "Catalog hero",
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 50, filter: "blur(12px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const noFadeUp = {
    hidden: { opacity: 0, y: 50, filter: "blur(0px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const stagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.08,
        },
    },
};

export default function CatalogHero() {
    const { lang } = useLanguage();
    const t = content[lang];

    const sectionRef = useRef(null);
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
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 22,
        mass: 0.35,
    });

    const progress = isMobile ? scrollYProgress : smoothProgress;

    const textY = useTransform(
        progress,
        [0, 0.5, 1],
        isMobile ? [16, 0, -16] : [80, 0, -80]
    );

    const textOpacity = useTransform(
        progress,
        [0, 0.18, 0.8, 1],
        isMobile ? [0.25, 1, 1, 1] : [0, 1, 1, 0.35]
    );

    const imageY = useTransform(
        progress,
        [0, 0.5, 1],
        isMobile ? [20, 0, -20] : [100, 0, -100]
    );

    const imageScale = useTransform(
        progress,
        [0, 0.5, 1],
        isMobile ? [0.98, 1, 1.01] : [0.9, 1, 1.08]
    );

    const imageRotate = useTransform(
        progress,
        [0, 0.5, 1],
        isMobile ? [0, 0, 0] : [2.5, 0, -2]
    );

    const glowLeftX = useTransform(progress, [0, 1], isMobile ? [0, 0] : [-60, 80]);
    const glowLeftY = useTransform(progress, [0, 1], isMobile ? [0, 0] : [-40, 60]);
    const glowRightX = useTransform(progress, [0, 1], isMobile ? [0, 0] : [60, -70]);
    const glowRightY = useTransform(progress, [0, 1], isMobile ? [0, 0] : [40, -50]);

    const headingY = useTransform(
        progress,
        [0, 0.5, 1],
        isMobile ? [8, 0, -8] : [40, 0, -40]
    );

    const badgeY = useTransform(
        progress,
        [0, 1],
        isMobile ? [0, 0] : [20, -20]
    );

    const imageInnerScale = useTransform(
        progress,
        [0, 0.5, 1],
        isMobile ? [1, 1, 1.02] : [1.15, 1.05, 1.18]
    );

    const imageInnerY = useTransform(
        progress,
        [0, 0.5, 1],
        isMobile ? [0, 0, -6] : [30, 0, -30]
    );

    const cardY = useTransform(
        progress,
        [0, 0.5, 1],
        isMobile ? [8, 0, -8] : [30, 0, -20]
    );

    const cardOpacity = useTransform(
        progress,
        [0, 0.2, 1],
        isMobile ? [0.7, 1, 1] : [0, 1, 1]
    );

    return (
        <section ref={sectionRef} className="relative z-50 overflow-hidden">
            <div className="absolute inset-0">
                <motion.div
                    style={{ x: glowLeftX, y: glowLeftY }}
                    className={`${isMobile ? "absolute" : "fixed"} left-[-10%] top-[-10%] h-80 w-[320px] rounded-full bg-orange-500/16 blur-3xl`}
                />
                <motion.div
                    style={{ x: glowRightX, y: glowRightY }}
                    className={`fixed bottom-[-20%] right-[-10%] h-85 w-85 rounded-full bg-orange-700/14 blur-3xl`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(249,115,22,0.10),transparent_28%)]" />
            </div>

            <div className="relative z-10 mx-auto grid min-h-screen max-w-360 grid-cols-1 gap-12 px-6 pb-14 pt-32 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-18 lg:pt-30">
                <motion.div
                    style={{ y: textY, opacity: textOpacity }}
                    variants={isMobile ? undefined : stagger}
                    initial={isMobile ? false : "hidden"}
                    whileInView={isMobile ? "show" : "show"}
                    viewport={{ once: isMobile, amount: isMobile ? 0.15 : 0.3 }}
                    className="max-w-2xl"
                >
                    <motion.div
                        variants={isMobile ? noFadeUp : fadeUp}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={isMobile ? { duration: 0.35, ease: "easeOut" } : undefined}
                        style={{ y: badgeY }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-orange-200 backdrop-blur-md"
                    >
                        <Sparkles className="h-4 w-4 text-orange-400" />
                        {t.badge}
                    </motion.div>

                    <motion.h1
                        variants={isMobile ? noFadeUp : fadeUp}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={isMobile ? { duration: 0.4, ease: "easeOut", delay: 0.05 } : undefined}
                        style={{ y: headingY }}
                        className="text-2xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
                    >
                        {t.title1}
                        <span className="block bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                            {t.titleHighlight}
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={isMobile ? noFadeUp : fadeUp}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={isMobile ? { duration: 0.4, ease: "easeOut", delay: 0.1 } : undefined}
                        className="mt-6 max-w-xl text-sm leading-7 text-white/65 md:text-base"
                    >
                        {t.desc}
                    </motion.p>

                    <a href="https://wa.me/4915563440433">
                        <motion.div
                            variants={isMobile ? noFadeUp : fadeUp}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={isMobile ? { duration: 0.4, ease: "easeOut", delay: 0.15 } : undefined}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <motion.button
                                whileHover={isMobile ? undefined : { y: -2, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 rounded-full bg-orange-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-white cursor-pointer"
                            >
                                {t.cta}
                                <ArrowUpRight className="h-4 w-4" />
                            </motion.button>
                        </motion.div>
                    </a>
                </motion.div>

                <motion.div
                    style={{
                        y: imageY,
                        scale: imageScale,
                        rotate: imageRotate,
                    }}
                    initial={isMobile ? { opacity: 0, y: 20 } : { opacity: 0, y: 60, scale: 0.92 }}
                    whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: isMobile, amount: isMobile ? 0.15 : 0.25 }}
                    transition={
                        isMobile
                            ? { duration: 0.45, ease: "easeOut" }
                            : { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
                    }
                    className="relative"
                >
                    <div className="absolute -inset-6 rounded-[40px] bg-orange-500/6 blur-2xl" />

                    <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-2xl">
                        <motion.img
                            src="/catalog-hero.jpg"
                            alt={t.imageAlt}
                            className="h-full w-full object-cover"
                            style={{
                                scale: imageInnerScale,
                                y: imageInnerY,
                            }}
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/15 to-transparent" />
                        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.10),transparent_35%,transparent_65%,rgba(255,255,255,0.08))]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.16),transparent_30%)]" />

                        <motion.div
                            style={{
                                y: cardY,
                                opacity: cardOpacity,
                            }}
                            className="absolute bottom-0 left-0 right-0 p-2 sm:p-6 md:p-8"
                        >
                            <div className="rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-md">
                                <p className="text-xs uppercase tracking-[0.2em] text-orange-300">
                                    {t.cardLabel}
                                </p>
                                <h3 className="mt-1 sm:mt-2 text-lg sm:text-xl font-medium text-white md:text-2xl">
                                    {t.cardTitle}
                                </h3>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}