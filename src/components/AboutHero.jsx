    import React, { useEffect, useRef, useState } from "react";
    import { motion, useScroll, useTransform } from "framer-motion";
    import { useLanguage } from "../LanguageContext";

    // TRANSLATIONS
    const content = {
        de: {
            badge: "Über uns",
            titleBefore: "Wir schaffen Innenräume, die sich",
            titleHighlight: "hochwertig",
            titleAfter: "anfühlen, noch bevor man sie berührt.",
            imageAlt: "Über uns Visual",
            lines: [
                "Wir gestalten Räume, die ruhig, warm und bewusst wirken.",
                "Jedes Detail wird so ausgearbeitet, dass Klarheit, Balance und eine hochwertige Ausstrahlung entstehen.",
                "Vom Konzept bis zur Fertigstellung verwandelt unsere Arbeit schlichte Innenräume in unvergessliche Erlebnisse.",
                "Mit Präzision gefertigt, mit Gespür gestaltet und für zeitlose Wirkung geschaffen.",
            ],
        },
        en: {
            badge: "About us",
            titleBefore: "We create interiors that feel",
            titleHighlight: "premium",
            titleAfter: "even before you touch them.",
            imageAlt: "About us visual",
            lines: [
                "We design spaces that feel calm, warm, and intentional.",
                "Every detail is developed to create clarity, balance, and a refined sense of quality.",
                "From concept to completion, our work transforms simple interiors into unforgettable experiences.",
                "Crafted with precision, shaped with sensibility, and made for timeless impact.",
            ],
        },
    };

    export default function AboutHero() {
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
            offset: ["start start", "end end"],
        });

        const { scrollYProgress: sectionProgress } = useScroll({
            target: sectionRef,
            offset: ["start 85%", "end 20%"],
        });

        // desktop same feel, mobile optimized
        const bgY = useTransform(
            sectionProgress,
            [0, 1],
            isMobile ? [24, -24] : [60, -60]
        );

        const imageScale = useTransform(
            scrollYProgress,
            [0, 1],
            isMobile ? [1, 1.05] : [0.8, 1.55]
        );

        const imageY = useTransform(
            scrollYProgress,
            [0, 1],
            isMobile ? [0, -8] : [0, -40]
        );

        const imageRotate = useTransform(
            scrollYProgress,
            [0, 1],
            isMobile ? [0, 0] : [0, -4]
        );

        const glowOpacity = useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            isMobile ? [0.16, 0.2, 0.24] : [0.25, 0.5, 0.8]
        );

        return (
            <section
                ref={sectionRef}
                className="relative bg-neutral-950 text-white"
            >
                {/* Background glow */}
                <motion.div
                    style={{ y: bgY }}
                    className={`pointer-events-none inset-0 ${isMobile ? "absolute" : "fixed"
                        }`}
                >
                    <div
                        className={`left-[10%] top-[5%] rounded-full bg-orange-500/10 ${isMobile
                                ? "absolute h-40 w-40 blur-2xl"
                                : "fixed h-72 w-72 blur-3xl"
                            }`}
                    />
                    <div
                        className={`right-[8%] bottom-[0%] rounded-full bg-white/10 ${isMobile
                                ? "absolute h-44 w-44 blur-2xl"
                                : "absolute h-80 w-80 blur-3xl"
                            }`}
                    />
                    <div
                        className={`absolute inset-0 ${isMobile
                                ? "bg-[radial-gradient(circle_at_70%_20%,rgba(249,115,22,0.06),transparent_32%)]"
                                : "bg-[radial-gradient(circle_at_70%_20%,rgba(249,115,22,0.08),transparent_24%)]"
                            }`}
                    />
                </motion.div>

                <div
                    className={`relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-6 md:px-10 lg:grid-cols-2 lg:px-14 z-50 ${isMobile
                            ? "min-h-auto py-10 pt-28"
                            : "min-h-[200vh] sm:min-h-[320vh] py-12 sm:py-20"
                        }`}
                >
                    {/* LEFT / SCROLLING TEXT */}
                    <div
                        className={`relative flex flex-col justify-center z-50 ${isMobile ? "py-0" : "py-[10vh]"
                            }`}
                    >
                        <div
                            className={`mx-auto flex w-full max-w-2xl flex-col ${isMobile ? "gap-6" : "gap-24 md:gap-32"
                                }`}
                        >
                            <div className={isMobile ? "space-y-4" : "space-y-6"}>
                                <motion.span
                                    initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: isMobile ? 0.35 : 0.6 }}
                                    transition={{ duration: isMobile ? 0.45 : 0.7 }}
                                    className={`inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-orange-200 ${isMobile ? "backdrop-blur-md" : "backdrop-blur-xl"
                                        }`}
                                >
                                    {t.badge}
                                </motion.span>

                                <motion.h1
                                    initial={{
                                        opacity: 0,
                                        y: isMobile ? 18 : 30,
                                        filter: isMobile ? "blur(4px)" : "blur(8px)",
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        filter: "blur(0px)",
                                    }}
                                    viewport={{ once: true, amount: isMobile ? 0.35 : 0.6 }}
                                    transition={{
                                        duration: isMobile ? 0.55 : 0.9,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className={`max-w-3xl font-medium tracking-[-0.04em] text-white ${isMobile
                                            ? "max-w-[12ch] text-[2.35rem] leading-[0.94]"
                                            : "text-4xl leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl"
                                        }`}
                                >
                                    {t.titleBefore}{" "}
                                    <span className="bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                                        {t.titleHighlight}
                                    </span>{" "}
                                    {t.titleAfter}
                                </motion.h1>
                            </div>

                            {/* MOBILE IMAGE */}
                            {isMobile && (
                                <motion.div
                                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/4 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                                >
                                    <motion.div
                                        style={{
                                            scale: imageScale,
                                            y: imageY,
                                            rotate: imageRotate,
                                            willChange: "transform",
                                        }}
                                        className="relative aspect-4/5 w-full overflow-hidden rounded-[20px]"
                                    >
                                        <img
                                            src="/about-hero.jpeg"
                                            alt={t.imageAlt}
                                            className="h-full w-full object-cover"
                                        />

                                        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/20" />
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.10),transparent_34%)]" />
                                    </motion.div>

                                    <motion.div
                                        style={{ opacity: glowOpacity }}
                                        className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-2xl"
                                    />
                                </motion.div>
                            )}

                            {t.lines.map((line, index) => (
                                <RevealLine
                                    key={index}
                                    text={line}
                                    isMobile={isMobile}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={`relative h-full ${isMobile ? "hidden" : ""}`}>
                        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
                            <div className="relative flex h-full w-full items-center justify-center">
                                {/* soft glow */}
                                <motion.div
                                    style={{ opacity: glowOpacity }}
                                    className="absolute h-88 w-88 rounded-full bg-orange-500/12 blur-3xl"
                                />

                                {/* image frame */}
                                <motion.div
                                    style={{
                                        scale: imageScale,
                                        y: imageY,
                                        rotate: imageRotate,
                                    }}
                                    className="relative h-57.5 w-45 overflow-hidden rounded-[26px] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:h-65 sm:w-52.5 md:h-75 md:w-60"
                                >
                                    <img
                                        src="/about-hero.jpeg"
                                        alt={t.imageAlt}
                                        className="h-full w-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/20" />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.16),transparent_30%)]" />
                                </motion.div>

                                {/* subtle ring */}
                                <motion.div
                                    style={{ scale: imageScale }}
                                    className="absolute rounded-4xl border border-orange-200/10 h-65 w-52.5 sm:h-72.5 sm:w-60 md:h-82.5 md:w-67.5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    function RevealLine({ text, isMobile, index }) {
        const lineRef = useRef(null);

        const { scrollYProgress } = useScroll({
            target: lineRef,
            offset: isMobile
                ? ["start 92%", "start 68%"]
                : ["start 75%", "center center"],
        });

        const color = useTransform(
            scrollYProgress,
            [0, 0.35, 0.7, 1],
            isMobile
                ? [
                    "rgba(255,244,235,0.72)",
                    "rgba(255,230,210,0.86)",
                    "rgba(255,223,205,0.96)",
                    "rgba(255,237,224,1)",
                ]
                : [
                    "rgba(255,244,235,0.22)",
                    "rgba(255,230,210,0.4)",
                    "rgba(255,205,170,0.82)",
                    "rgba(255,237,224,1)",
                ]
        );

        const y = useTransform(
            scrollYProgress,
            [0, 1],
            isMobile ? [14, 0] : [40, 0]
        );

        const opacity = useTransform(
            scrollYProgress,
            [0, 0.25, 1],
            isMobile ? [0.72, 0.9, 1] : [0.35, 0.65, 1]
        );

        const blurValue = useTransform(
            scrollYProgress,
            [0, 1],
            isMobile ? [3, 0] : [8, 0]
        );

        const filter = useTransform(blurValue, (value) => `blur(${value}px)`);

        if (isMobile) {
            return (
                <div ref={lineRef} className="relative">
                    <motion.div
                        style={{
                            y,
                            opacity,
                            filter,
                            willChange: "transform, opacity, filter",
                        }}
                        className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-md"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_45%,rgba(249,115,22,0.05))]" />

                        <div className="relative z-10 flex gap-3">
                            <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-300" />

                            <div className="space-y-2">
                                <div className="text-[10px] uppercase tracking-[0.24em] text-orange-200/65">
                                    0{index + 1}
                                </div>

                                <motion.p
                                    style={{ color }}
                                    className="text-[1rem] leading-normal tracking-[-0.02em]"
                                >
                                    {text}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            );
        }

        return (
            <div
                ref={lineRef}
                className={`relative flex items-center ${isMobile ? "min-h-[36vh]" : "min-h-[58vh]"
                    }`}
            >
                <motion.h2
                    style={{
                        color,
                        y,
                        opacity,
                        filter,
                        willChange: isMobile ? "transform, opacity, filter" : "auto",
                    }}
                    className="max-w-[24ch] text-2xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-6xl"
                >
                    {text}
                </motion.h2>
            </div>
        );
    }