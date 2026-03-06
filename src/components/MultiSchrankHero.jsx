import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    MessageCircle,
    Sparkles,
} from "lucide-react";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.16,
            delayChildren: 0.2,
        },
    },
};

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const revealLine = {
    hidden: {
        opacity: 0,
        y: 80,
        filter: "blur(12px)",
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const imageReveal = {
    hidden: {
        opacity: 0,
        scale: 1.12,
        y: 40,
        filter: "blur(16px)",
    },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1.4,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};
const cardRevealLeft = {
    hidden: {
        opacity: 0,
        x: -40,
        y: 18,
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const cardRevealRight = {
    hidden: {
        opacity: 0,
        x: 40,
        y: 18,
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const badgeReveal = {
    hidden: {
        opacity: 0,
        y: -18,
        scale: 0.96,
        filter: "blur(8px)",
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.9,
            delay: 0.85,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const floatAnim = {
    y: [0, -12, 0],
    transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
    },
};

export default function MultiSchrankHero() {
    return (
        <motion.section
            initial="hidden"
            animate="show"
            className="relative min-h-screen overflow-hidden bg-neutral-950 text-white"
        >
            {/* Ambient Background */}
            <div className="pointer-events-none absolute inset-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-[-12%] top-[-8%] h-136 w-136 rounded-full bg-amber-500/10 blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-[-10%] top-[8%] h-112 w-md rounded-full bg-white/10 blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-[-14%] left-[18%] h-96 w-[24rem] rounded-full bg-orange-400/10 blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.8, delay: 0.35 }}
                    className="absolute bottom-[5%] right-[12%] h-72 w-[18rem] rounded-full bg-amber-300/10 blur-3xl"
                />
            </div>

            {/* Grid Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size[:42px_42px]" />

            {/* Depth */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_bottom,rgba(245,158,11,0.08),transparent_24%)]" />

            <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 sm:px-6 pb-12 pt-28 sm:pt-32 lg:px-10">
                <div className="grid w-full gap-14 lg:grid-cols-[1.15fr_0.85fr]">
                    {/* Left Content */}
                    <motion.div variants={container}>
                        <motion.div
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/65 backdrop-blur-xl"
                        >
                            <Sparkles size={14} className="text-amber-400" />
                            Premium Interiors • MultiSchrank
                        </motion.div>

                        <div className="mt-6 space-y-2">
                            <div>
                                <motion.h1
                                    variants={revealLine}
                                    className="max-w-4xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl xl:text-6xl"
                                >
                                    Luxury{" "}
                                    <span className="bg-linear-to-r from-white via-white to-amber-300 bg-clip-text text-transparent">
                                        furniture,
                                    </span>
                                </motion.h1>
                            </div>

                            <div>
                                <motion.h1
                                    variants={revealLine}
                                    className="max-w-4xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl xl:text-6xl"
                                >
                                    designed for{" "}
                                    <span className="bg-linear-to-r from-amber-300 via-amber-400 to-orange-300 bg-clip-text text-transparent">
                                        modern living.
                                    </span>
                                </motion.h1>
                            </div>
                        </div>

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg"
                        >
                            MultiSchrank creates premium furniture and interior solutions that
                            combine refined aesthetics, intelligent functionality, and timeless
                            craftsmanship — designed for contemporary homes and sophisticated
                            living spaces.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="mt-8 flex flex-col items-start gap-4 sm:flex-row"
                        >
                            <a
                                href="#catalog"
                                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 sm:px-6 py-3.5 text-sm font-semibold text-neutral-900 transition duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(255,255,255,0.18)]"
                            >
                                Explore Catalog
                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>

                            <a
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 px-5 sm:px-6 py-3.5 text-sm font-medium text-green-300 backdrop-blur-xl transition duration-300 hover:scale-[1.03] hover:border-green-400/50 hover:bg-green-500/20"
                            >
                                <MessageCircle size={17} />
                                Start Your Project
                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Visual */}
                    <div className="relative">
                        <div className="relative mx-auto h-120 w-full max-w-lg">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute inset-0 rounded-4xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
                            >
                                <div className="absolute inset-0 rounded-4xl bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.10),transparent_30%)]" />
                            </motion.div>

                            <motion.div
                                variants={imageReveal}
                                className="absolute inset-5"
                            >
                                <div className="relative h-full overflow-hidden rounded-[1.35rem] border border-white/10">
                                    <motion.img
                                        src="hero-interior.webp"
                                        alt="Premium interior"
                                        className="h-full w-full object-cover"
                                        initial={{ scale: 1.18 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                            duration: 1.8,
                                            delay: 0.45,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
                                    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_45%,transparent_65%)]" />
                                </div>
                            </motion.div>

                            <motion.div
                                variants={cardRevealLeft}
                                initial="hidden"
                                animate="show"
                                className="absolute -left-8 top-12 hidden w-52 rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:block"
                            >
                                <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                                    Signature Finish
                                </p>
                                <div className="mt-3 flex items-end justify-between">
                                    <div>
                                        <p className="text-lg font-semibold text-white">
                                            Soft Matte
                                        </p>
                                        <p className="mt-1 text-sm text-white/55">
                                            Luxury texture concept
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={cardRevealRight}
                                initial="hidden"
                                animate="show"
                                className="absolute -right-8 bottom-16 hidden w-56 rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:block"
                            >
                                <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                                    Interior Concept
                                </p>
                                <p className="mt-3 text-lg font-semibold text-white">
                                    Functional elegance
                                </p>
                                <p className="mt-2 text-sm leading-6 text-white/55">
                                    Smart compartments, refined detailing, and premium
                                    composition for modern homes.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={badgeReveal}
                                className="absolute left-1/2 top-[-1.2rem] -translate-x-1/2 rounded-full border border-amber-300/20 bg-amber-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-200 backdrop-blur-xl whitespace-nowrap"
                            >
                                Crafted for modern living
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.25 }}
                className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
            >
                <a
                    href="#about"
                    className="group inline-flex flex-col items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/40 transition hover:text-white/70"
                >
                    <span>Scroll</span>
                    <span className="relative flex h-12 w-7 justify-center rounded-full border border-white/15">
                        <motion.span
                            animate={{ y: [0, 12, 0] }}
                            transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-400"
                        />
                    </span>
                </a>
            </motion.div>
        </motion.section>
    );
}