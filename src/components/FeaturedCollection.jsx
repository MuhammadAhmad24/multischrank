import React, { useEffect, useRef, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";

// TRANSLATIONS
const content = {
    de: {
        badge: "Ausgewählte Kollektion",
        title1: "Signature-Kleiderschranksysteme",
        title2: "maßgeschneidert für moderne Wohnräume",
        desc: "Präzise gestaltet mit klarer Verarbeitung, ausgewogenen Stauraumlösungen und Oberflächen, die den Raum aufwerten, ohne ihn zu überladen.",
        cta: "Projekt starten",
        imageAlt: "Ausgewählte Kollektion",
    },
    en: {
        badge: "Featured Collection",
        title1: "Signature wardrobe systems",
        title2: "tailored for modern living spaces",
        desc: "Precisely designed with clean craftsmanship, balanced storage solutions, and finishes that elevate the space without overwhelming it.",
        cta: "Start your project",
        imageAlt: "Featured collection",
    },
};

export default function FeaturedCollection() {
    const { lang } = useLanguage();
    const t = content[lang];

    const sectionRef = useRef(null);
    const prefersReducedMotion = useReducedMotion();

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
        offset: isMobile ? ["start 96%", "end 35%"] : ["start 85%", "end 25%"],
    });

    // ✅ Desktop exactly as before
    // ✅ Mobile smoother / lighter
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: isMobile ? 55 : 90,
        damping: isMobile ? 20 : 22,
        mass: isMobile ? 0.5 : 0.35,
        restDelta: 0.001,
    });

    const progress = prefersReducedMotion ? scrollYProgress : smoothProgress;

    const opacity = useTransform(progress, [0, 0.35, 1], [0, 1, 1]);

    const y = useTransform(
        progress,
        [0, 1],
        isMobile ? [28, 0] : [70, 0]
    );

    const scale = useTransform(
        progress,
        [0, 1],
        isMobile ? [0.985, 1] : [0.96, 1]
    );

    const imageScale = useTransform(
        progress,
        [0, 1],
        isMobile ? [1.03, 1] : [1.08, 1]
    );

    const overlayOpacity = useTransform(
        progress,
        [0, 1],
        isMobile ? [0.5, 0.42] : [0.58, 0.42]
    );

    return (
        <section
            ref={sectionRef}
            className="relative z-50 mt-10 mx-auto max-w-360 px-6 pb-16 md:px-10 md:pb-20"
        >
            <motion.div
                style={{
                    opacity,
                    y,
                    scale,
                    willChange: isMobile ? "transform, opacity" : "auto",
                }}
                className="relative overflow-hidden rounded-[34px] border border-white/10"
            >
                <div className="absolute inset-0">
                    <motion.img
                        style={{
                            scale: imageScale,
                            willChange: isMobile ? "transform" : "auto",
                        }}
                        src="/featured.jpg"
                        alt={t.imageAlt}
                        className="h-full w-full object-cover"
                    />
                    <motion.div
                        style={{ opacity: overlayOpacity }}
                        className="absolute inset-0 bg-black"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.16),transparent_32%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_35%,transparent_70%,rgba(249,115,22,0.08))]" />
                </div>

                <div className="relative z-50 grid min-h-110 items-end p-4 sm:p-7 md:p-10 lg:p-14">
                    <div className="max-w-2xl">
                        <p className="text-xs uppercase tracking-[0.24em] text-orange-200/65">
                            {t.badge}
                        </p>

                        <h2 className="mt-1 text-xl font-semibold leading-tight text-white sm:mt-4 sm:text-3xl md:text-5xl">
                            {t.title1}
                            <span className="block bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                                {t.title2}
                            </span>
                        </h2>

                        <p className="my-1 max-w-xl text-sm text-white/70 sm:mt-5 sm:leading-7">
                            {t.desc}
                        </p>

                        <a
                            href="https://wa.me/4915563440433"
                            className="mt-3 inline-flex items-center gap-2 rounded-full bg-orange-400 px-6 py-3 text-sm font-medium text-[#111] transition hover:scale-[1.02] hover:bg-orange-300 sm:mt-7"
                        >
                            <FaWhatsapp size={17} />
                            {t.cta}
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}