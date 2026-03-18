import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, BadgeCheck, Ruler, Layers3 } from "lucide-react";
import { useLanguage } from "../LanguageContext";

// TRANSLATIONS
const content = {
    de: {
        badge: "Über MultiSchrank",
        title1: "Entwickelt, um",
        highlight: "Schönheit und Funktion",
        title2: "in den Alltag zu bringen",
        desc: "MultiSchrank entwickelt hochwertige Möbel- und Innenraumlösungen, die moderne Ästhetik, durchdachte Funktionalität und zeitlose Handwerkskunst miteinander verbinden.",
        features: [
            {
                title: "Hochwertige Materialien",
                text: "Sorgfältig ausgewählte Oberflächen und Materialien, die Wärme, Eleganz und langlebige Qualität vermitteln.",
            },
            {
                title: "Individuelles Design",
                text: "Möbelkonzepte, die auf reale Räume, praktische Anforderungen und einen anspruchsvollen modernen Lebensstil abgestimmt sind.",
            },
            {
                title: "Zeitlose Ästhetik",
                text: "Klare Linien, ausgewogene Proportionen und raffinierte Details, die auch nach Jahren modern bleiben.",
            },
        ],
    },
    en: {
        badge: "About MultiSchrank",
        title1: "Designed to bring",
        highlight: "beauty and function",
        title2: "into everyday living",
        desc: "MultiSchrank creates high-quality furniture and interior solutions that combine modern aesthetics, thoughtful functionality, and timeless craftsmanship.",
        features: [
            {
                title: "Premium materials",
                text: "Carefully selected finishes and materials that convey warmth, elegance, and long-lasting quality.",
            },
            {
                title: "Custom design",
                text: "Furniture concepts tailored to real spaces, practical needs, and a refined modern lifestyle.",
            },
            {
                title: "Timeless aesthetics",
                text: "Clean lines, balanced proportions, and refined details that remain modern for years.",
            },
        ],
    },
};

function AnimatedCard({ item, icon, progress, range, isMobile }) {
    const [start, end] = range;

    const opacity = useTransform(progress, [start, end], [0, 1]);

    const y = useTransform(
        progress,
        [start, end],
        isMobile ? [28, 0] : [90, 0]
    );

    const scale = useTransform(
        progress,
        [start, end],
        isMobile ? [0.97, 1] : [0.9, 1]
    );

    const rotateX = useTransform(
        progress,
        [start, end],
        isMobile ? [4, 0] : [12, 0]
    );

    const filter = useTransform(
        progress,
        [start, end],
        isMobile ? ["blur(4px)", "blur(0px)"] : ["blur(10px)", "blur(0px)"]
    );

    return (
        <motion.div
            style={{
                opacity,
                y,
                scale,
                rotateX,
                filter,
                transformPerspective: 1200,
                willChange: "transform, opacity, filter",
            }}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-500 ${isMobile ? "backdrop-blur-md" : "backdrop-blur-xl"
                }`}
        >
            <div
                className={`absolute inset-0 transition duration-500 ${isMobile
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
            >
                <div
                    className={`absolute inset-0 ${isMobile
                            ? "bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.10),transparent_62%)]"
                            : "bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_60%)]"
                        }`}
                />
            </div>

            <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    {icon}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                    {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                    {item.text}
                </p>
            </div>
        </motion.div>
    );
}

export default function MultiSchrankAbout() {
    const { lang } = useLanguage();
    const t = content[lang];

    const sectionRef = useRef(null);
    const cardsRef = useRef(null);

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

    const { scrollYProgress: sectionProgress } = useScroll({
        target: sectionRef,
        offset: ["start 85%", "end 20%"],
    });

    const { scrollYProgress: cardsProgress } = useScroll({
        target: cardsRef,
        // offset: ["start 90%", "end 20%"],
        offset: isMobile
            ? ["start 98%", "end 40%"]
            : ["start 90%", "end 20%"]
    });

    const bgY = useTransform(
        sectionProgress,
        [0, 1],
        isMobile ? [18, -18] : [60, -60]
    );

    const sectionOpacity = useTransform(
        sectionProgress,
        [0, 0.12, 0.9, 1],
        isMobile ? [0.78, 1, 1, 0.92] : [0.45, 1, 1, 0.75]
    );

    const headingY = useTransform(
        sectionProgress,
        [0, 0.2],
        isMobile ? [18, 0] : [40, 0]
    );

    const headingOpacity = useTransform(
        sectionProgress,
        [0, 0.18],
        [0, 1]
    );

    const headingFilter = useTransform(
        sectionProgress,
        [0, 0.18],
        isMobile ? ["blur(4px)", "blur(0px)"] : ["blur(10px)", "blur(0px)"]
    );

    const ranges = isMobile
        ? [
            [0.0, 0.20],
            [0.16, 0.38],
            [0.32, 0.5],
        ]
        : [
            [0.0, 0.22],
            [0.18, 0.4],
            [0.36, 0.58],
        ];

    const icons = [
        <BadgeCheck size={18} className="text-orange-400" />,
        <Ruler size={18} className="text-orange-400" />,
        <Layers3 size={18} className="text-orange-400" />,
    ];

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative -mt-20 overflow-hidden bg-neutral-950 pb-6 text-white sm:pb-18"
        >
            <motion.div
                style={{ y: bgY }}
                className="pointer-events-none absolute inset-0"
            >
                <div
                    className={`absolute left-[10%] top-[10%] rounded-full bg-orange-500/10 ${isMobile
                            ? "h-44 w-44 blur-2xl"
                            : "h-72 w-72 blur-3xl"
                        }`}
                />
                <div
                    className={`absolute right-[8%] bottom-[0%] rounded-full bg-orange-300/6 ${isMobile
                            ? "h-48 w-48 blur-2xl"
                            : "h-80 w-80 blur-3xl"
                        }`}
                />
            </motion.div>

            <motion.div
                style={{ opacity: sectionOpacity }}
                className="relative mx-auto max-w-7xl px-6 lg:px-10"
            >
                <motion.div
                    style={{
                        y: headingY,
                        opacity: headingOpacity,
                        filter: headingFilter,
                        willChange: "transform, opacity, filter",
                    }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <div
                        className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-orange-200 ${isMobile ? "backdrop-blur-md" : "backdrop-blur-xl"
                            }`}
                    >
                        <Sparkles size={14} className="text-orange-400" />
                        {t.badge}
                    </div>

                    <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                        {t.title1}{" "}
                        <span className="bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                            {t.highlight}
                        </span>{" "}
                        {t.title2}
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-white/60">
                        {t.desc}
                    </p>
                </motion.div>

                <div ref={cardsRef} className="mt-8 sm:mt-16 grid gap-6 md:grid-cols-3">
                    {t.features.map((item, index) => (
                        <AnimatedCard
                            key={item.title}
                            item={item}
                            icon={icons[index]}
                            progress={cardsProgress}
                            range={ranges[index]}
                            isMobile={isMobile}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}