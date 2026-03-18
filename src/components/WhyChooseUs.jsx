import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Layers3, Sparkles } from "lucide-react";
import { useLanguage } from "../LanguageContext";

// TRANSLATIONS
const content = {
    de: {
        badge: "Warum wir",
        title1: "Gründe, die sich",
        highlight: "in jedem Detail zeigen",
        reasons: [
            {
                number: "01",
                icon: Sparkles,
                title: "Detailorientierter Ansatz",
                text: "Jede Oberfläche, Kante und Proportion wird sorgfältig berücksichtigt, damit das Endergebnis aus jedem Blickwinkel hochwertig wirkt.",
            },
            {
                number: "02",
                icon: Layers3,
                title: "Hochwertige Materialauswahl",
                text: "Wir arbeiten mit Materialien, die Wärme, Langlebigkeit und eine stärkere visuelle Präsenz in den Raum bringen.",
            },
            {
                number: "03",
                icon: BadgeCheck,
                title: "Für reale Räume entwickelt",
                text: "Statt auf generische Lösungen zu setzen, wird jedes Element an tatsächliche Maße, Nutzung und den Fluss des Innenraums angepasst.",
            },
            {
                number: "04",
                icon: ArrowUpRight,
                title: "Modern und zeitlos zugleich",
                text: "Die Gestaltung bleibt klar und modern, ist dabei aber ausgewogen genug, um auch über Jahre hinweg relevant zu wirken.",
            },
        ],
    },
    en: {
        badge: "Why us",
        title1: "Reasons that appear",
        highlight: "in every detail",
        reasons: [
            {
                number: "01",
                icon: Sparkles,
                title: "Detail-oriented approach",
                text: "Every surface, edge, and proportion is carefully considered so the final result feels premium from every angle.",
            },
            {
                number: "02",
                icon: Layers3,
                title: "Premium material selection",
                text: "We work with materials that bring warmth, durability, and a stronger visual presence into the space.",
            },
            {
                number: "03",
                icon: BadgeCheck,
                title: "Designed for real spaces",
                text: "Instead of relying on generic solutions, every element is adapted to actual dimensions, usage, and the natural flow of the interior.",
            },
            {
                number: "04",
                icon: ArrowUpRight,
                title: "Modern yet timeless",
                text: "The design remains clean and contemporary while still being balanced enough to feel relevant for years.",
            },
        ],
    },
};

function WhyChooseUsCard({ item, index, progress, total }) {
    const step = 1 / total;
    const start = index * step;
    const enter = start + step * 0.22;

    const stackGap = 22;
    const scaleStep = 0.035;

    const input = [0, start, enter];
    const yOutput = ["120%", "120%", "0%"];
    const scaleOutput = [1, 1, 1];

    for (let j = index + 1; j < total; j++) {
        const nextStart = j * step;
        const nextEnter = nextStart + step * 0.22;
        const level = j - index;

        input.push(nextStart, nextEnter);
        yOutput.push(`${-(level - 1) * stackGap}px`, `${-level * stackGap}px`);
        scaleOutput.push(1 - (level - 1) * scaleStep, 1 - level * scaleStep);
    }

    const y = useTransform(progress, input, yOutput);
    const scale = useTransform(progress, input, scaleOutput);
    const opacity = useTransform(progress, [0, start, enter], [0, 0, 1]);

    const Icon = item.icon;

    return (
        <motion.div
            style={{
                y,
                scale,
                opacity,
                zIndex: index + 1,
                pointerEvents: "none",
            }}
            className="absolute inset-x-0 bottom-10 mx-auto flex h-[58vh] w-full items-end sm:bottom-4"
        >
            <div className="relative grid h-full w-full grid-cols-1 overflow-hidden rounded-4xl border border-white/10 bg-linear-to-b from-[#161616] to-[#0c0c0c] shadow-[0_30px_120px_rgba(0,0,0,0.6)] md:grid-cols-[0.95fr_1.05fr]">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[-8%] top-[-10%] h-44 w-44 rounded-full bg-orange-500/10 blur-3xl" />
                    <div className="absolute bottom-[-12%] right-[8%] h-40 w-40 rounded-full bg-orange-400/6 blur-3xl" />
                </div>

                <div className="relative flex flex-col justify-between border-b border-white/10 p-6 sm:p-8 md:border-b-0 md:border-r md:p-10 lg:p-12">
                    <div className="flex items-start justify-between">
                        <span className="text-[0.7rem] font-medium uppercase tracking-[0.35em] text-orange-200/55">
                            Warum wir
                        </span>

                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-300/10 bg-orange-400/10 text-orange-300">
                            <Icon size={18} strokeWidth={1.8} />
                        </div>
                    </div>

                    <div>
                        <div className="mb-5 text-sm tracking-[0.3em] text-orange-300/35">
                            {item.number}
                        </div>

                        <h3 className="max-w-md text-3xl font-semibold leading-[1.05] text-white sm:text-4xl lg:text-5xl">
                            {item.title}
                        </h3>
                    </div>
                </div>

                <div className="relative flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12">
                    <p className="max-w-xl text-base leading-8 text-white/68 sm:text-lg">
                        {item.text}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

function MobileWhyChooseUsCard({ item, badge }) {
    const Icon = item.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-[#161616] to-[#0c0c0c] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.45)]"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-10%] top-[-10%] h-28 w-28 rounded-full bg-orange-500/10 blur-2xl" />
                <div className="absolute bottom-[-12%] right-[0%] h-24 w-24 rounded-full bg-orange-400/8 blur-2xl" />
            </div>

            <div className="relative">
                <div className="flex items-start justify-between gap-4">
                    <span className="text-[0.68rem] uppercase tracking-[0.32em] text-orange-200/55">
                        {badge}
                    </span>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-orange-300/10 bg-orange-400/10 text-orange-300">
                        <Icon size={17} strokeWidth={1.8} />
                    </div>
                </div>

                <div className="mt-8 text-xs tracking-[0.28em] text-orange-300/35">
                    {item.number}
                </div>

                <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
                    {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/68">
                    {item.text}
                </p>
            </div>
        </motion.div>
    );
}

export default function WhyChooseUsStacked() {
    const { lang } = useLanguage();
    const t = content[lang];
    const reasons = t.reasons;

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
        offset: ["start start", "end end"],
    });

    const headingY = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const headingOpacity = useTransform(
        scrollYProgress,
        [0, 0.14, 0.22],
        [1, 1, 0.45]
    );
    const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

    // MOBILE OPTIMIZED VERSION
    if (isMobile) {
        return (
            <section
                ref={sectionRef}
                className="relative overflow-hidden bg-[#070707] px-5 py-14 text-white"
            >
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-[8%] h-56 w-[16rem] -translate-x-1/2 rounded-full bg-orange-500/8 blur-[90px]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(249,115,22,0.08),transparent_30%)]" />
                </div>

                <div className="relative mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-10"
                    >
                        <span className="inline-block text-[0.72rem] uppercase tracking-[0.35em] text-orange-200/50">
                            {t.badge}
                        </span>

                        <h2 className="mt-4 text-3xl font-semibold leading-tight text-white/85">
                            {t.title1}
                            <span className="block bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                                {t.highlight}
                            </span>
                        </h2>
                    </motion.div>

                    <div className="space-y-5">
                        {reasons.map((item) => (
                            <MobileWhyChooseUsCard
                                key={item.number}
                                item={item}
                                badge={t.badge}
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // DESKTOP ORIGINAL VERSION
    return (
        <section
            ref={sectionRef}
            className="relative h-[420vh] bg-[#070707] pb-12 text-white md:pb-20"
        >
            <div className="sticky top-0 h-screen overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-[14%] h-96 w-[24rem] -translate-x-1/2 rounded-full bg-orange-500/8 blur-[120px]" />
                    <div className="absolute right-[8%] top-[42%] h-80 w-[20rem] rounded-full bg-orange-700/7 blur-[120px]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(249,115,22,0.08),transparent_28%)]" />
                </div>

                <motion.div
                    style={{ y: headingY, opacity: headingOpacity }}
                    className="absolute left-0 right-0 top-0 z-30 mx-auto w-full max-w-6xl px-5 pt-12 sm:px-6 md:px-8 lg:px-10 lg:pt-20"
                >
                    <div>
                        <span className="inline-block text-[0.72rem] uppercase tracking-[0.35em] text-orange-200/50">
                            {t.badge}
                        </span>

                        <h2 className="mt-4 text-3xl font-semibold leading-tight text-white/85 sm:text-5xl md:text-6xl lg:text-7xl">
                            {t.title1}
                            <span className="block bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                                {t.highlight}
                            </span>
                        </h2>
                    </div>
                </motion.div>

                <div className="relative mx-auto h-screen w-full max-w-6xl overflow-hidden px-5 pb-24 pt-50 sm:px-6 sm:pt-56 md:px-8 lg:px-10 lg:pt-64">
                    {reasons.map((item, index) => (
                        <WhyChooseUsCard
                            key={item.number}
                            item={item}
                            index={index}
                            progress={scrollYProgress}
                            total={reasons.length}
                        />
                    ))}
                </div>

                <div className="absolute bottom-8 left-1/2 z-40 h-0.5 w-[min(92vw,420px)] -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                        style={{
                            scaleX: progressScale,
                            transformOrigin: "left",
                        }}
                        className="h-full w-full rounded-full bg-linear-to-r from-orange-300 via-orange-400 to-orange-500"
                    />
                </div>
            </div>
        </section>
    );
}