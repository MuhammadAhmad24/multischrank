import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.12,
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
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.96,
        filter: "blur(10px)",
    },
    show: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function AboutCTASection() {
    return (
        <section className="relative overflow-hidden bg-[#0b0b0b] px-4 py-24 text-white sm:px-6 lg:px-8">
            {/* static subtle grid */}
            <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[42px_42px]" />

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-10%] top-[-15%] h-72 w-72 rounded-full bg-orange-500/12 blur-3xl" />
                <div className="absolute bottom-[-20%] right-[-10%] h-96 w-96 rounded-full bg-orange-600/10 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.10),transparent_28%)]" />
                <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[42px_42px]" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="relative mx-auto max-w-7xl"
            >
                <motion.div
                    variants={scaleIn}
                    className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 backdrop-blur-xl"
                >
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-200/25 to-transparent" />
                        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
                        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />
                    </div>

                    <div className="grid items-center gap-10 px-6 py-10 sm:px-8 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-14 lg:py-14">
                        <div className="relative z-10">
                            <motion.div
                                variants={fadeUp}
                                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-orange-200"
                            >
                                <Sparkles size={14} className="text-orange-400" />
                                Projekt starten
                            </motion.div>

                            <motion.h2
                                variants={fadeUp}
                                className="max-w-3xl text-3xl font-light leading-[1.05] text-white sm:text-4xl md:text-5xl lg:text-[64px]"
                            >
                                Lassen Sie uns einen Raum schaffen, der
                                <span className="block bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                                    präzise, warm und hochwertig wirkt.
                                </span>
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base"
                            >
                                Vom Konzept bis zur finalen Umsetzung gestalten wir
                                Möbel und Innenräume mit Fokus auf Details, Balance
                                und Handwerkskunst. Schaffen Sie einen Raum, der
                                Qualität in jeder Linie widerspiegelt.
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                className="mt-8 flex flex-col gap-4 sm:flex-row"
                            >
                                <a
                                    href="/contact"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-400 px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-orange-300"
                                >
                                    Jetzt starten
                                    <ArrowUpRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </a>

                                <a
                                    href="https://wa.me/4915563440433"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/3 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:border-orange-300/20 hover:bg-white/[0.07]"
                                >
                                    Per WhatsApp kontaktieren
                                    <MessageCircle
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                                    />
                                </a>
                            </motion.div>
                        </div>

                        <motion.div
                            variants={fadeUp}
                            className="relative z-10"
                        >
                            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#151515] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                                <div className="relative overflow-hidden rounded-[22px]">
                                    <img
                                        src="/about-cta-img.jpg"
                                        alt="Hochwertiges Interieur"
                                        className="h-80 w-full object-cover md:h-95"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />
                                    <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-md">
                                        Premium Design
                                    </div>

                                    <motion.div
                                        initial={{ y: 24, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                        className="absolute bottom-4 left-4 right-4 rounded-[20px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl"
                                    >
                                        <p className="text-xs uppercase tracking-[0.22em] text-orange-300">
                                            Beratung buchen
                                        </p>
                                        <p className="mt-2 text-lg font-light text-white">
                                            Verwirklichen Sie Ihre Vision mit
                                            anspruchsvollem Design und individueller
                                            Umsetzung.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}