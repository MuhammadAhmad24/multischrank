import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../LanguageContext";

// TRANSLATIONS
const content = {
    de: {
        badge: "Handwerkskunst / Prozess",
        title1: "Ein verfeinerter Arbeitsablauf, geprägt von",
        highlight: "Präzision und Material.",
        steps: [
            {
                id: "01",
                label: "Analyse",
                title: "Den Raum verstehen",
                text: "Jedes Projekt beginnt mit Beobachtung. Wir analysieren Proportion, Stimmung und wie sich der Raum in der tatsächlichen Nutzung anfühlen soll.",
            },
            {
                id: "02",
                label: "Konzept",
                title: "Die Richtung formen",
                text: "Materialien, Struktur und visueller Rhythmus werden definiert, um eine klare Gestaltungssprache zu schaffen.",
            },
            {
                id: "03",
                label: "Verfeinerung",
                title: "Die Details ausarbeiten",
                text: "Maße, Übergänge und Oberflächen werden sorgfältig verfeinert, bevor die Produktion beginnt.",
            },
            {
                id: "04",
                label: "Handwerk",
                title: "Mit Präzision gefertigt",
                text: "Jedes Element wird mit höchster Sorgfalt gefertigt, wobei Konstruktionsqualität und Ausführung gleichermaßen zählen.",
            },
            {
                id: "05",
                label: "Vollendung",
                title: "Ein ausgewogenes Endergebnis",
                text: "Das Endergebnis ist darauf ausgelegt, ruhig, hochwertig und über Trends hinaus zeitlos zu wirken.",
            },
        ],
    },
    en: {
        badge: "Craftsmanship / Process",
        title1: "A refined workflow shaped by",
        highlight: "precision and material.",
        steps: [
            {
                id: "01",
                label: "Analysis",
                title: "Understanding the space",
                text: "Every project begins with observation. We study proportion, atmosphere, and how the space should feel in real daily use.",
            },
            {
                id: "02",
                label: "Concept",
                title: "Shaping the direction",
                text: "Materials, structure, and visual rhythm are defined to create a clear and coherent design language.",
            },
            {
                id: "03",
                label: "Refinement",
                title: "Working out the details",
                text: "Dimensions, transitions, and finishes are carefully refined before production begins.",
            },
            {
                id: "04",
                label: "Craftsmanship",
                title: "Built with precision",
                text: "Each element is produced with great care, where construction quality and execution matter equally.",
            },
            {
                id: "05",
                label: "Completion",
                title: "A balanced final result",
                text: "The final outcome is designed to feel calm, premium, and timeless beyond changing trends.",
            },
        ],
    },
};

export default function ProcessSection() {
    const { lang } = useLanguage();
    const t = content[lang];

    const sectionRef = useRef(null);
    const timelineRef = useRef(null);

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
        target: timelineRef,
        offset: isMobile
            ? ["start 88%", "end 82%"]
            : ["start 75%", "end 85%"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const { scrollYProgress: sectionProgress } = useScroll({
        target: sectionRef,
        offset: ["start 85%", "end 20%"],
    });

    const bgY = useTransform(
        sectionProgress,
        [0, 1],
        isMobile ? [12, -12] : [60, -60]
    );

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-neutral-950 py-12 text-white sm:py-20 md:py-32"
        >
            {/* Background glow */}
            <motion.div
                style={{ y: bgY }}
                className="pointer-events-none absolute inset-0"
            >
                <div
                    className={`absolute left-[10%] top-[5%] rounded-full bg-orange-500/10 ${
                        isMobile ? "h-36 w-36 blur-xl" : "h-72 w-72 blur-3xl"
                    }`}
                />
                <div
                    className={`absolute right-[8%] bottom-[0%] rounded-full bg-orange-300/6 ${
                        isMobile ? "h-40 w-40 blur-xl" : "h-80 w-80 blur-3xl"
                    }`}
                />
                {!isMobile && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(249,115,22,0.08),transparent_26%)]" />
                )}
            </motion.div>

            <div className="pointer-events-none absolute inset-0">
                <div
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 ${
                        isMobile
                            ? "h-56 w-56 blur-[70px]"
                            : "h-120 w-120 blur-[140px]"
                    }`}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
                <div className="max-w-3xl">
                    <span
                        className={`inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-orange-200 ${
                            isMobile ? "" : "backdrop-blur-xl"
                        }`}
                    >
                        {t.badge}
                    </span>

                    <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] sm:text-5xl md:text-6xl">
                        {t.title1}
                        <span className="mt-2 block bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                            {t.highlight}
                        </span>
                    </h2>
                </div>

                <div ref={timelineRef} className="relative mt-16 md:mt-24">
                    <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden -translate-x-1/2 lg:block">
                        <div className="relative h-full w-px bg-white/10">
                            <motion.div
                                style={{ height: lineHeight }}
                                className="absolute left-0 top-0 w-px bg-linear-to-b from-orange-300 via-orange-400 to-orange-500"
                            />

                            <motion.div
                                style={{ top: dotY }}
                                className="absolute left-1/2 z-20 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400 shadow-[0_0_0_6px_rgba(251,146,60,0.12)] lg:block"
                            />
                        </div>
                    </div>

                    <div className="space-y-8 md:space-y-28 lg:space-y-32">
                        {t.steps.map((step, index) => (
                            <ProcessRow
                                key={step.id}
                                step={step}
                                index={index}
                                isMobile={isMobile}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProcessRow({ step, index, isMobile }) {
    const desktopRef = useRef(null);
    const mobileRef = useRef(null);

    const desktopScroll = useScroll({
        target: desktopRef,
        offset: ["start 92%", "center 70%"],
    });

    const mobileScroll = useScroll({
        target: mobileRef,
        offset: ["start 96%", "center 82%"],
    });

    // DESKTOP - unchanged
    const desktopY = useTransform(desktopScroll.scrollYProgress, [0, 1], [90, 0]);
    const desktopOpacity = useTransform(
        desktopScroll.scrollYProgress,
        [0, 0.35, 1],
        [0.18, 0.55, 1]
    );
    const desktopFilter = useTransform(
        desktopScroll.scrollYProgress,
        [0, 1],
        ["blur(14px)", "blur(0px)"]
    );
    const desktopSweepX = useTransform(
        desktopScroll.scrollYProgress,
        [0, 1],
        ["-120%", "120%"]
    );

    // MOBILE - lighter animation
    const mobileY = useTransform(mobileScroll.scrollYProgress, [0, 1], [20, 0]);
    const mobileOpacity = useTransform(
        mobileScroll.scrollYProgress,
        [0, 0.45, 1],
        [0.72, 0.9, 1]
    );

    const isLeft = index % 2 === 0;

    return (
        <>
            {/* desktop */}
            <div
                ref={desktopRef}
                className="relative hidden items-center lg:grid lg:grid-cols-[minmax(0,1fr)_100px_minmax(0,1fr)]"
            >
                <div>
                    {isLeft && (
                        <ProcessCard
                            step={step}
                            y={desktopY}
                            opacity={desktopOpacity}
                            filter={desktopFilter}
                            sweepX={desktopSweepX}
                            isMobile={false}
                        />
                    )}
                </div>

                <div />

                <div>
                    {!isLeft && (
                        <ProcessCard
                            step={step}
                            y={desktopY}
                            opacity={desktopOpacity}
                            filter={desktopFilter}
                            sweepX={desktopSweepX}
                            isMobile={false}
                        />
                    )}
                </div>
            </div>

            {/* mobile */}
            <div ref={mobileRef} className="lg:hidden">
                <ProcessCard
                    step={step}
                    y={mobileY}
                    opacity={mobileOpacity}
                    filter="none"
                    sweepX={null}
                    isMobile={isMobile}
                />
            </div>
        </>
    );
}

function ProcessCard({ step, y, opacity, filter, sweepX, isMobile }) {
    return (
        <motion.div
            style={{
                y,
                opacity,
                filter: isMobile ? "none" : filter,
                willChange: isMobile ? "transform, opacity" : "transform, opacity, filter",
            }}
            className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/3 p-7 ${
                isMobile ? "" : "backdrop-blur-xl"
            }`}
        >
            <div className="pointer-events-none absolute inset-0">
                <div
                    className={`absolute -right-6 -top-6 rounded-full bg-orange-500/8 ${
                        isMobile ? "h-16 w-16 blur-lg" : "h-24 w-24 blur-2xl"
                    }`}
                />
            </div>

            {!isMobile && (
                <motion.div
                    style={{ x: sweepX }}
                    className="pointer-events-none absolute inset-y-0 w-[40%] skew-x-[-18deg] bg-linear-to-r from-transparent via-orange-200/18 to-transparent blur-2xl"
                />
            )}

            <div className="relative">
                <span
                    className={`font-medium tracking-[-0.06em] text-orange-200/20 ${
                        isMobile ? "text-4xl" : "text-5xl"
                    }`}
                >
                    {step.id}
                </span>

                <div className="mt-3 text-[11px] uppercase tracking-[0.24em] text-orange-200/45">
                    {step.label}
                </div>

                <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">
                    {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
                    {step.text}
                </p>

                <div className="mt-6 h-px w-32 bg-linear-to-r from-orange-300/35 to-transparent" />
            </div>
        </motion.div>
    );
}