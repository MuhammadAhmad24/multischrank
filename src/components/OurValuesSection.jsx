import React, { useEffect, useRef, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import {
    Gem,
    ShieldCheck,
    Sparkles,
    Compass,
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

// TRANSLATIONS
const content = {
    de: {
        badge: "Unsere Werte",
        heading1: "Prinzipien, die",
        heading2: "unsere Entscheidungen leiten",
        values: [
            {
                icon: Gem,
                number: "01",
                title: "Materialqualität",
                text: "Wir wählen Oberflächen, Texturen und Konstruktionsmaterialien mit Fokus auf dauerhafte Qualität und eine ausgewogene Ästhetik.",
            },
            {
                icon: ShieldCheck,
                number: "02",
                title: "Für Langlebigkeit gebaut",
                text: "Jedes Detail wird mit Präzision, Stabilität und sorgfältiger Ausführung umgesetzt, damit das Ergebnis langfristig zuverlässig bleibt.",
            },
            {
                icon: Sparkles,
                number: "03",
                title: "Ruhige Ästhetik",
                text: "Unser Ansatz vermeidet visuelle Unruhe und setzt auf Proportion, Wärme und eine klare, zeitlose Gestaltung statt kurzlebiger Trends.",
            },
            {
                icon: Compass,
                number: "04",
                title: "Kundenzentriertes Denken",
                text: "Jedes Projekt orientiert sich an realen Lebensgewohnheiten statt nur an Trends, sodass jeder Raum persönlich und funktional gestaltet ist.",
            },
        ],
    },
    en: {
        badge: "Our Values",
        heading1: "Principles that",
        heading2: "shape every decision we make",
        values: [
            {
                icon: Gem,
                number: "01",
                title: "Material quality",
                text: "We select finishes, textures, and construction materials with long-term durability and visual balance in mind.",
            },
            {
                icon: ShieldCheck,
                number: "02",
                title: "Built to last",
                text: "Every detail is developed with precision, stability, and disciplined execution so the final result remains reliable for years.",
            },
            {
                icon: Sparkles,
                number: "03",
                title: "Calm aesthetics",
                text: "Our approach avoids visual noise. It focuses on proportion, warmth, and refined simplicity that feels timeless rather than temporary.",
            },
            {
                icon: Compass,
                number: "04",
                title: "Client-centered thinking",
                text: "Every project is guided by real living habits, not just trends, so each space feels personal and functional.",
            },
        ],
    },
};

function RevealChar({
    char,
    index,
    totalChars,
    progress,
    start,
    end,
    isMobile,
}) {
    const charStart = start + (index / totalChars) * (end - start);
    const charEnd = start + ((index + 1) / totalChars) * (end - start);

    const opacity = useTransform(
        progress,
        [charStart, charEnd],
        isMobile ? [0.35, 1] : [0.1, 1]
    );

    return (
        <motion.span style={{ opacity }} className="inline-block">
            {char === " " ? "\u00A0" : char}
        </motion.span>
    );
}

function ScrollRevealText({
    text,
    progress,
    className = "",
    start = 0,
    end = 1,
    isMobile = false,
}) {
    const chars = text.split("");

    return (
        <span className={className}>
            {chars.map((char, index) => (
                <RevealChar
                    key={`${char}-${index}`}
                    char={char}
                    index={index}
                    totalChars={chars.length}
                    progress={progress}
                    start={start}
                    end={end}
                    isMobile={isMobile}
                />
            ))}
        </span>
    );
}

function ValueCard({ item, index, progress, isMobile }) {
    const Icon = item.icon;
    const base = index * 0.08;

    const yRaw = useTransform(
        progress,
        [0.04 + base, 0.24 + base, 0.55 + base],
        isMobile ? [28, 0, 0] : [80, 0, -10]
    );

    const opacity = useTransform(
        progress,
        [0.02 + base, 0.14 + base, 0.24 + base],
        isMobile ? [0, 0.9, 1] : [0, 0.65, 1]
    );

    const scaleRaw = useTransform(
        progress,
        [0.04 + base, 0.24 + base],
        isMobile ? [0.985, 1] : [0.94, 1]
    );

    const blurValue = useTransform(
        progress,
        [0.03 + base, 0.2 + base],
        isMobile ? [4, 0] : [10, 0]
    );

    const filter = useTransform(blurValue, (v) => `blur(${v}px)`);

    const y = useSpring(
        yRaw,
        isMobile
            ? {
                stiffness: 220,
                damping: 30,
                mass: 0.45,
            }
            : {
                stiffness: 110,
                damping: 22,
                mass: 0.75,
            }
    );

    const scale = useSpring(
        scaleRaw,
        isMobile
            ? {
                stiffness: 220,
                damping: 30,
                mass: 0.45,
            }
            : {
                stiffness: 110,
                damping: 20,
                mass: 0.75,
            }
    );

    return (
        <motion.div
            style={{
                y,
                opacity,
                scale,
                filter,
                willChange: "transform, opacity, filter",
            }}
            className={`relative min-h-80 overflow-hidden rounded-[28px] border border-white/10 bg-white/4 p-6 ${isMobile ? "backdrop-blur-md" : "backdrop-blur-xl"
                } md:p-7`}
        >
            <div className="pointer-events-none absolute inset-0">
                <div
                    className={`absolute -left-10 top-0 rounded-full bg-orange-500/10 ${isMobile ? "h-20 w-20 blur-xl" : "h-28 w-28 blur-2xl"
                        }`}
                />
                <div
                    className={`absolute bottom-0 right-0 rounded-full bg-white/6 ${isMobile ? "h-16 w-16 blur-xl" : "h-24 w-24 blur-2xl"
                        }`}
                />
            </div>

            <div className="absolute right-5 top-5 text-5xl font-semibold tracking-[-0.08em] text-white/10">
                {item.number}
            </div>

            <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
                        <Icon className="h-6 w-6 text-orange-300" />
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-medium tracking-[-0.04em]">
                        {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/62 md:text-[15px]">
                        {item.text}
                    </p>
                </div>

                <div className="mt-auto pt-10">
                    <div className="h-px w-full bg-linear-to-r from-orange-200/30 to-transparent" />
                </div>
            </div>
        </motion.div>
    );
}

export default function OurValuesSection() {
    const { lang } = useLanguage();
    const t = content[lang];

    const sectionRef = useRef(null);
    const headingRef = useRef(null);
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
        offset: ["start end", "end start"],
    });

    const { scrollYProgress: headingProgress } = useScroll({
        target: headingRef,
        offset: isMobile
            ? ["start 0.95", "end 0.6"]
            : ["start 0.8", "end 0.35"],
    });

    const { scrollYProgress: cardsProgress } = useScroll({
        target: cardsRef,
        offset: isMobile
            ? ["start 0.98", "end 0.7"]
            : ["start 0.92", "end 0.45"],
    });

    const headingY = useTransform(
        headingProgress,
        [0, 1],
        isMobile ? [18, 0] : [40, -10]
    );

    const introOpacity = useTransform(
        headingProgress,
        [0, 0.18],
        isMobile ? [0.7, 1] : [0.25, 1]
    );

    const lineScale = useTransform(
        cardsProgress,
        [0, 0.22],
        isMobile ? [0.9, 1] : [0.6, 1]
    );

    const lineOpacity = useTransform(
        cardsProgress,
        [0, 0.18],
        isMobile ? [0.6, 1] : [0.2, 1]
    );

    const bgY = useTransform(
        sectionProgress,
        [0, 1],
        isMobile ? [16, -16] : [0, 0]
    );

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#0f0f0d] py-12 text-[#f5f1eb] sm:py-20 md:pt-36 md:pb-42"
        >
            <motion.div
                style={{ y: bgY }}
                className="pointer-events-none absolute inset-0"
            >
                <div
                    className={`absolute left-[-10%] top-[10%] rounded-full bg-orange-500/10 ${isMobile ? "h-44 w-44 blur-2xl" : "h-72 w-72 blur-3xl"
                        }`}
                />
                <div
                    className={`absolute bottom-[5%] right-[-5%] rounded-full bg-white/5 ${isMobile ? "h-52 w-52 blur-2xl" : "h-80 w-80 blur-3xl"
                        }`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
            </motion.div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
                <div ref={headingRef}>
                    <motion.div
                        style={{ y: headingY, opacity: introOpacity }}
                        className="pt-2 md:pt-4"
                    >
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65 backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                            {t.badge}
                        </div>

                        <h2 className="text-[25px] font-medium leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl xl:text-7xl">
                            <ScrollRevealText
                                text={t.heading1}
                                progress={headingProgress}
                                start={0.05}
                                end={0.42}
                                isMobile={isMobile}
                            />

                            <span className="block text-white">
                                <ScrollRevealText
                                    text={t.heading2}
                                    progress={headingProgress}
                                    start={0.48}
                                    end={0.92}
                                    isMobile={isMobile}
                                />
                            </span>
                        </h2>
                    </motion.div>
                </div>

                <motion.div
                    style={{ scaleX: lineScale, opacity: lineOpacity }}
                    className="mt-14 h-px origin-left bg-linear-to-r from-orange-200/40 via-white/10 to-transparent"
                />

                <div
                    ref={cardsRef}
                    className="mt-4 grid gap-5 sm:mt-14 md:grid-cols-2 xl:grid-cols-4"
                >
                    {t.values.map((item, index) => (
                        <ValueCard
                            key={item.title}
                            item={item}
                            index={index}
                            progress={cardsProgress}
                            isMobile={isMobile}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}