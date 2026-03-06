import React from "react";
import { motion } from "framer-motion";
import {
    Sparkles,
    MessageCircle,
    ArrowUpRight,
    Ruler,
    PencilRuler,
    Hammer,
    CheckCircle2,
} from "lucide-react";

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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const cardReveal = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.98,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const steps = [
    {
        number: "01",
        icon: <Ruler size={18} className="text-amber-400" />,
        title: "Consultation",
        text: "We begin by understanding your space, style, and practical requirements to shape the right furniture direction.",
    },
    {
        number: "02",
        icon: <PencilRuler size={18} className="text-amber-400" />,
        title: "Design Concept",
        text: "Layouts, finishes, proportions, and material direction are refined into a concept tailored to your interior.",
    },
    {
        number: "03",
        icon: <Hammer size={18} className="text-amber-400" />,
        title: "Crafting",
        text: "Each piece is produced with attention to detail, clean execution, and premium-quality material selection.",
    },
    {
        number: "04",
        icon: <CheckCircle2 size={18} className="text-amber-400" />,
        title: "Installation",
        text: "Final fitting and finishing are completed with precision to ensure a seamless result in your space.",
    },
];

export default function MultiSchrankProcess() {
    return (
        <section className="relative bg-neutral-950 py-12 text-white md:py-18">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-[-10%] top-[10%] h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
                <div className="absolute right-[-8%] bottom-[8%] h-96 w-96 rounded-full bg-white/6 blur-3xl" />
            </div>

            {/* Grid */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size[:42px_42px]" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
                <div className="grid gap-8 sm:gap-16 lg:grid-cols-[0.82fr_1.18fr]">
                    {/* Left intro sticky */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="lg:sticky lg:top-28 lg:self-start"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/65 backdrop-blur-xl">
                            <Sparkles size={14} className="text-amber-400" />
                            Our Process
                        </div>

                        <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl xl:text-6xl">
                            From concept
                            <br />
                            to completion.
                        </h2>

                        <p className="mt-6 max-w-md text-base leading-8 text-white/65 md:text-lg">
                            A refined process built around clarity, craftsmanship,
                            and seamless execution — from the first conversation
                            to the final installation.
                        </p>

                        <div className="mt-8">
                            <a
                                href="https://wa.me/923001234567"
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
                        </div>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />

                        <div className="space-y-8 md:space-y-10">
                            {steps.map((step, index) => {
                                const isOffset = index % 2 === 1;

                                return (
                                    <motion.div
                                        key={step.title}
                                        variants={cardReveal}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, amount: 0.25 }}
                                        transition={{ delay: index * 0.08 }}
                                        className="relative md:pl-16"
                                    >
                                        {/* Fixed dot */}
                                        <div className="absolute left-0 top-8 hidden h-8 w-8 items-center justify-center rounded-full border border-amber-300/20 bg-amber-400/10 md:flex">
                                            <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                                        </div>

                                        {/* Only card moves */}
                                        <div
                                            className={`group overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-[0_18px_50px_rgba(0,0,0,0.25)] transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_28px_70px_rgba(0,0,0,0.45)] md:p-8}`}
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                                                    {step.icon}
                                                </div>

                                                <div className="text-4xl font-semibold tracking-[-0.05em] text-white/10 md:text-5xl">
                                                    {step.number}
                                                </div>
                                            </div>

                                            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-white">
                                                {step.title}
                                            </h3>

                                            <p className="mt-3 max-w-xl text-sm leading-7 text-white/60 md:text-base">
                                                {step.text}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}