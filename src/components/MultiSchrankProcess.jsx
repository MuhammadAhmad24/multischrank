import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Sparkles,
    MessageCircle,
    ArrowUpRight,
    Ruler,
    PencilRuler,
    Hammer,
    CheckCircle2,
} from "lucide-react";

const steps = [
    {
        number: "01",
        icon: <Ruler size={18} className="text-orange-400" />,
        title: "Consultation",
        text: "We begin by understanding your space, style, and practical requirements to shape the right furniture direction.",
    },
    {
        number: "02",
        icon: <PencilRuler size={18} className="text-orange-400" />,
        title: "Design Concept",
        text: "Layouts, finishes, proportions, and material direction are refined into a concept tailored to your interior.",
    },
    {
        number: "03",
        icon: <Hammer size={18} className="text-orange-400" />,
        title: "Crafting",
        text: "Each piece is produced with attention to detail, clean execution, and premium-quality material selection.",
    },
    {
        number: "04",
        icon: <CheckCircle2 size={18} className="text-orange-400" />,
        title: "Installation",
        text: "Final fitting and finishing are completed with precision to ensure a seamless result in your space.",
    },
];

function ProcessCard({ step, index, progress }) {
    const start = index * 0.18;
    const end = start + 0.28;

    const y = useTransform(progress, [start, end], [120, 0]);
    const scale = useTransform(progress, [start, end], [0.92, 1]);
    const opacity = useTransform(progress, [start, end], [0.25, 1]);
    const rotateX = useTransform(progress, [start, end], [10, 0]);

    return (
        <motion.div
            style={{
                y,
                scale,
                opacity,
                rotateX,
                transformPerspective: 1200,
                top: `${index * 28}px`,
                zIndex: 20 + index,
            }}
            className="sticky"
        >
            <div className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/6 p-6 backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-orange-300/20 hover:shadow-[0_8px_25px_rgba(0,0,0,0.18)] md:p-8">
                <div className="pointer-events-none absolute inset-0 rounded-4xl bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.14),transparent_30%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-orange-500/8 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        {step.icon}
                    </div>

                    <div className="text-4xl font-semibold tracking-[-0.05em] text-orange-200/10 md:text-5xl">
                        {step.number}
                    </div>
                </div>

                <div className="relative mt-10">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
                        {step.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 md:text-base">
                        {step.text}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default function MultiSchrankProcess() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 85%", "end 70%"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.35, 0.6, 0.35]);

    return (
        <section
            ref={sectionRef}
            className="relative bg-neutral-950 pb-12 text-white md:pb-18"
        >
            {/* animated background */}
            <motion.div
                style={{ y: bgY, opacity: bgOpacity }}
                className="pointer-events-none absolute inset-0 overflow-hidden"
            >
                <div className="absolute left-[-10%] top-[8%] h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
                <div className="absolute right-[-8%] bottom-[8%] h-96 w-96 rounded-full bg-orange-300/6 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(249,115,22,0.08),transparent_26%)]" />
            </motion.div>

            {/* subtle grid */}
            <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[42px_42px]" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
                <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
                    {/* left sticky intro */}
                    <div className="lg:sticky lg:top-28 lg:h-fit lg:self-start">
                        <motion.div
                            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-orange-200 backdrop-blur-xl">
                                <Sparkles size={14} className="text-orange-400" />
                                Our Process
                            </div>

                            <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl xl:text-6xl">
                                From concept
                                <br />
                                <span className="bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                                    to completion.
                                </span>
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
                                    className="group inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 px-5 py-3.5 text-sm font-medium text-green-300 backdrop-blur-xl transition duration-300 hover:scale-[1.03] hover:border-green-400/50 hover:bg-green-500/20"
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
                    </div>

                    {/* stacked sticky panels */}
                    <div className="relative min-h-[220vh]">
                        <div className="sticky top-24">
                            <div className="relative space-y-5">
                                {steps.map((step, index) => (
                                    <ProcessCard
                                        key={step.title}
                                        step={step}
                                        index={index}
                                        progress={scrollYProgress}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}