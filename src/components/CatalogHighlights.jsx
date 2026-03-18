import React, { useEffect, useRef, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import { Ruler, BadgeCheck, Hammer, Sparkles } from "lucide-react";
import { useLanguage } from "../LanguageContext";

// TRANSLATIONS
const content = {
    de: {
        badge: "Warum es hochwertig wirkt",
        title1: "Entwickelt für Balance,",
        highlight: "Präzision und langlebige Nutzung",
        desc: "Jedes Detail ist bewusst gestaltet – von der Maßplanung bis zur Qualität der Oberflächen – damit das Endergebnis hochwertig wirkt und im Alltag perfekt funktioniert.",
        highlights: [
            {
                icon: Ruler,
                title: "Maßgefertigt",
                text: "Perfekt abgestimmt auf Ihre Raummaße und funktionalen Anforderungen.",
            },
            {
                icon: BadgeCheck,
                title: "Hochwertige Materialien",
                text: "Ausgewählte Oberflächen und langlebige Qualitätsstandards in der Verarbeitung.",
            },
            {
                icon: Hammer,
                title: "Präzise Verarbeitung",
                text: "Klare Details und ein hoher Anspruch an Ausführung und Qualität.",
            },
            {
                icon: Sparkles,
                title: "Raffinierte Oberflächen",
                text: "Minimalistische und elegante Flächen für moderne Innenräume.",
            },
        ],
    },
    en: {
        badge: "Why it feels premium",
        title1: "Designed for balance,",
        highlight: "precision and lasting use",
        desc: "Every detail is considered — from made-to-measure planning to the quality of finishes — so the final result feels premium and works beautifully in everyday life.",
        highlights: [
            {
                icon: Ruler,
                title: "Made to measure",
                text: "Perfectly tailored to your room dimensions and functional requirements.",
            },
            {
                icon: BadgeCheck,
                title: "Premium materials",
                text: "Selected finishes and durable quality standards throughout the craftsmanship.",
            },
            {
                icon: Hammer,
                title: "Precise workmanship",
                text: "Clean detailing and a high standard of execution and quality.",
            },
            {
                icon: Sparkles,
                title: "Refined finishes",
                text: "Minimal and elegant surfaces for modern interior spaces.",
            },
        ],
    },
};

function HighlightCard({ item, index, progress, isMobile }) {
    const Icon = item.icon;

    // desktop bilkul same feel, mobile ko softer/smoother kiya hai
    const start = isMobile ? 0.1 + index * 0.09 : 0.16 + index * 0.1;
    const end = isMobile ? start + 0.16 : start + 0.18;

    const opacity = useTransform(progress, [start, end], [0, 1]);
    const y = useTransform(progress, [start, end], isMobile ? [24, 0] : [70, 0]);
    const scale = useTransform(progress, [start, end], isMobile ? [0.985, 1] : [0.94, 1]);
    const rotateX = useTransform(progress, [start, end], isMobile ? [3, 0] : [10, 0]);
    const blurValue = useTransform(progress, [start, end], isMobile ? [4, 0] : [10, 0]);
    const iconScale = useTransform(progress, [start, end], isMobile ? [0.94, 1] : [0.8, 1]);
    const innerY = useTransform(progress, [start, end], isMobile ? [8, 0] : [18, 0]);

    return (
        <motion.div
            style={{
                opacity,
                y,
                scale,
                rotateX,
                filter: useTransform(blurValue, (v) => `blur(${v}px)`),
                transformStyle: "preserve-3d",
                willChange: "transform, opacity, filter",
            }}
            className={`relative rounded-3xl border border-white/10 bg-white/4 p-6 ${
                isMobile ? "backdrop-blur-md" : ""
            }`}
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                <div
                    className={`absolute -right-8 -top-8 rounded-full bg-orange-500/8 ${
                        isMobile ? "h-20 w-20 blur-xl" : "h-24 w-24 blur-2xl"
                    }`}
                />
            </div>

            <motion.div
                style={{ scale: iconScale }}
                className="relative z-10 mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3"
            >
                <Icon className="h-5 w-5 text-orange-300" />
            </motion.div>

            <motion.div style={{ y: innerY }} className="relative z-10">
                <h3 className="text-lg font-medium text-white">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                    {item.text}
                </p>
            </motion.div>
        </motion.div>
    );
}

export default function CatalogHighlights() {
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
        offset: isMobile ? ["start 96%", "end 35%"] : ["start 85%", "end 20%"],
    });

    // desktop same rakha, mobile ke liye spring ko lighter/smoother kiya
    const progress = useSpring(scrollYProgress, {
        stiffness: isMobile ? 70 : 110,
        damping: isMobile ? 22 : 26,
        mass: isMobile ? 0.55 : 0.4,
    });

    const headingOpacity = useTransform(progress, [0, 0.22], [0, 1]);
    const headingY = useTransform(progress, [0, 0.22], isMobile ? [20, 0] : [50, 0]);
    const headingBlur = useTransform(progress, [0, 0.22], isMobile ? [5, 0] : [12, 0]);

    const sectionY = useTransform(progress, [0, 1], isMobile ? [12, -6] : [40, -20]);
    const sectionOpacity = useTransform(
        progress,
        [0, 0.18, 1],
        isMobile ? [0.82, 1, 1] : [0.4, 1, 1]
    );

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden border-y border-white/10 bg-white/3 py-12 sm:py-16 md:py-20"
        >
            <div className="pointer-events-none absolute inset-0">
                <div
                    className={`absolute left-[8%] top-[10%] rounded-full bg-orange-500/6 ${
                        isMobile ? "h-40 w-40 blur-2xl" : "h-56 w-56 blur-3xl"
                    }`}
                />
                <div
                    className={`absolute right-[6%] bottom-[0%] rounded-full bg-orange-400/6 ${
                        isMobile ? "h-44 w-44 blur-2xl" : "h-64 w-64 blur-3xl"
                    }`}
                />
            </div>

            <motion.div
                style={{ y: sectionY, opacity: sectionOpacity }}
                className="relative z-10 mx-auto max-w-7xl px-6 md:px-10"
            >
                <motion.div
                    style={{
                        opacity: headingOpacity,
                        y: headingY,
                        filter: useTransform(headingBlur, (v) => `blur(${v}px)`),
                        willChange: "transform, opacity, filter",
                    }}
                    className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
                >
                    <p className="text-xs uppercase tracking-[0.28em] text-orange-200/70">
                        {t.badge}
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                        {t.title1}
                        <span className="block bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                            {t.highlight}
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                        {t.desc}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {t.highlights.map((item, i) => (
                        <HighlightCard
                            key={item.title}
                            item={item}
                            index={i}
                            progress={progress}
                            isMobile={isMobile}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}