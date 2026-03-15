import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

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
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 22,
        mass: 0.35,
    });

    const textY = useTransform(smoothProgress, [0, 0.5, 1], [80, 0, -80]);
    const textOpacity = useTransform(smoothProgress, [0, 0.18, 0.8, 1], [0, 1, 1, 0.35]);

    const imageY = useTransform(smoothProgress, [0, 0.5, 1], [100, 0, -100]);
    const imageScale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1, 1.08]);
    const imageRotate = useTransform(smoothProgress, [0, 0.5, 1], [2.5, 0, -2]);

    const glowLeftX = useTransform(smoothProgress, [0, 1], [-60, 80]);
    const glowLeftY = useTransform(smoothProgress, [0, 1], [-40, 60]);

    const glowRightX = useTransform(smoothProgress, [0, 1], [60, -70]);
    const glowRightY = useTransform(smoothProgress, [0, 1], [40, -50]);

    const headingY = useTransform(smoothProgress, [0, 0.5, 1], [40, 0, -40]);
    const badgeY = useTransform(smoothProgress, [0, 1], [20, -20]);

    return (
        <section
            ref={sectionRef}
            className="relative z-50 overflow-hidden"
        >
            <div className="absolute inset-0">
                <motion.div
                    style={{ x: glowLeftX, y: glowLeftY }}
                    className="fixed left-[-10%] top-[-10%] h-80 w-[320px] rounded-full bg-orange-500/16 blur-3xl"
                />
                <motion.div
                    style={{ x: glowRightX, y: glowRightY }}
                    className="fixed bottom-[-20%] right-[-10%] h-85 w-85 rounded-full bg-orange-700/14 blur-3xl"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(249,115,22,0.10),transparent_28%)]" />
            </div>

            <div className="relative mx-auto grid min-h-screen max-w-360 grid-cols-1 gap-12 px-6 pb-14 pt-32 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-18 lg:pt-30">
                <motion.div
                    style={{ y: textY, opacity: textOpacity }}
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="max-w-2xl"
                >
                    <motion.div
                        variants={fadeUp}
                        style={{ y: badgeY }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-orange-200 backdrop-blur-md"
                    >
                        <Sparkles className="h-4 w-4 text-orange-400" />
                        Kollektion
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        style={{ y: headingY }}
                        className="text-2xl font-semibold leading-[1.02] tracking-tight sm:text-4xl md:text-5xl"
                    >
                        Maßgefertigte Möbel für
                        <span className="block bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                            moderne Wohnräume
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="mt-6 max-w-xl text-sm leading-7 text-white/65 md:text-base"
                    >
                        Entdecken Sie einen ausgewählten Katalog mit
                        Kleiderschränken, Stauraumlösungen, TV-Möbeln,
                        Schlafzimmermöbeln und individuellen Interior-Lösungen,
                        die zeitlos, ausgewogen und hochwertig wirken.
                    </motion.p>

                    <a href="https://wa.me/4915563440433">
                        <motion.div
                            variants={fadeUp}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <motion.button
                                whileHover={{ y: -2, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 rounded-full bg-orange-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-white cursor-pointer"
                            >
                                Individuelles Design anfragen
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
                    initial={{ opacity: 0, y: 60, scale: 0.92 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                >
                    <div className="absolute -inset-6 rounded-[40px] bg-orange-500/6 blur-2xl" />

                    <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-2xl">
                        <motion.img
                            src="/catalog-hero.jpg"
                            alt="Katalog Hero"
                            className="h-full w-full object-cover"
                            style={{
                                scale: useTransform(
                                    smoothProgress,
                                    [0, 0.5, 1],
                                    [1.15, 1.05, 1.18]
                                ),
                                y: useTransform(
                                    smoothProgress,
                                    [0, 0.5, 1],
                                    [30, 0, -30]
                                ),
                            }}
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/15 to-transparent" />
                        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.10),transparent_35%,transparent_65%,rgba(255,255,255,0.08))]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.16),transparent_30%)]" />

                        <motion.div
                            style={{
                                y: useTransform(
                                    smoothProgress,
                                    [0, 0.5, 1],
                                    [30, 0, -20]
                                ),
                                opacity: useTransform(
                                    smoothProgress,
                                    [0, 0.2, 1],
                                    [0, 1, 1]
                                ),
                            }}
                            className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
                        >
                            <div className="rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-md">
                                <p className="text-xs uppercase tracking-[0.2em] text-orange-300">
                                    Signature-Serie
                                </p>
                                <h3 className="mt-2 text-xl font-medium text-white md:text-2xl">
                                    Maßgefertigt und für lange Zeit gestaltet
                                </h3>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}