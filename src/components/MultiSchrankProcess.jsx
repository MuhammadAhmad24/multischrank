import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Sparkles,
    ArrowUpRight,
    Ruler,
    PencilRuler,
    Hammer,
    CheckCircle2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";

const content = {
    de: {
        badge: "Unser Prozess",
        title1: "Vom Konzept",
        titleHighlight: "bis zur Fertigstellung.",
        desc: "Ein durchdachter Prozess, der auf Klarheit, handwerklicher Qualität und reibungsloser Umsetzung basiert — vom ersten Gespräch bis zur finalen Montage.",
        cta: "Starten Sie Ihr Projekt",
        steps: [
            {
                number: "01",
                title: "Beratung",
                text: "Wir beginnen damit, Ihren Raum, Ihren Stil und Ihre praktischen Anforderungen zu verstehen, um die richtige Möbelrichtung zu entwickeln.",
            },
            {
                number: "02",
                title: "Designkonzept",
                text: "Layouts, Oberflächen, Proportionen und Materialauswahl werden zu einem Konzept verfeinert, das perfekt zu Ihrem Interior passt.",
            },
            {
                number: "03",
                title: "Fertigung",
                text: "Jedes Möbelstück wird mit höchster Präzision, Liebe zum Detail und hochwertigen Materialien gefertigt.",
            },
            {
                number: "04",
                title: "Montage",
                text: "Die finale Montage und Feinabstimmung erfolgen präzise, um ein nahtloses Ergebnis in Ihrem Raum zu gewährleisten.",
            },
        ],
    },
    en: {
        badge: "Our Process",
        title1: "From concept",
        titleHighlight: "to completion.",
        desc: "A thoughtful process built on clarity, craftsmanship, and smooth execution — from the first conversation to the final installation.",
        cta: "Start your project",
        steps: [
            {
                number: "01",
                title: "Consultation",
                text: "We begin by understanding your space, your style, and your practical requirements to shape the right furniture direction.",
            },
            {
                number: "02",
                title: "Design concept",
                text: "Layouts, finishes, proportions, and material choices are refined into a concept that fits your interior perfectly.",
            },
            {
                number: "03",
                title: "Crafting",
                text: "Each furniture piece is created with precision, attention to detail, and high-quality materials.",
            },
            {
                number: "04",
                title: "Installation",
                text: "The final installation and refinements are completed carefully to ensure a seamless result in your space.",
            },
        ],
    },
};

const icons = [
    <Ruler size={18} className="text-orange-400" />,
    <PencilRuler size={18} className="text-orange-400" />,
    <Hammer size={18} className="text-orange-400" />,
    <CheckCircle2 size={18} className="text-orange-400" />,
];

function ProcessCard({ step, index, progress, isMobile }) {
    if (isMobile) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
                    <div className="relative flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                            {icons[index]}
                        </div>

                        <div className="text-3xl font-semibold tracking-[-0.05em] text-orange-200/10">
                            {step.number}
                        </div>
                    </div>

                    <div className="relative mt-8">
                        <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                            {step.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-white/60">
                            {step.text}
                        </p>
                    </div>
                </div>
            </motion.div>
        );
    }

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
                        {icons[index]}
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
    const { lang } = useLanguage();
    const t = content[lang];
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 85%", "end 70%"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.35, 0.6, 0.35]);

    return (
        <section
            ref={sectionRef}
            className="relative bg-neutral-950 pb-12 pt-12 text-white md:pb-18"
        >
            {/* animated background */}
            <motion.div
                style={{ y: isMobile ? 0 : bgY, opacity: bgOpacity }}
                className="pointer-events-none absolute inset-0 overflow-hidden"
            >
                <div className="absolute left-[-10%] top-[8%] h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
                <div className="absolute right-[-8%] bottom-[8%] h-96 w-96 rounded-full bg-orange-300/6 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(249,115,22,0.08),transparent_26%)]" />
            </motion.div>

            {/* subtle grid - desktop only */}

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
                                {t.badge}
                            </div>

                            <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl xl:text-6xl">
                                {t.title1}
                                <br />
                                <span className="bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                                    {t.titleHighlight}
                                </span>
                            </h2>

                            <p className="mt-4 text-white/65">
                                {t.desc}
                            </p>

                            <div className="mt-8">
                                <a
                                    href="https://wa.me/923001234567"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 px-5 py-3.5 text-sm font-medium text-green-300 backdrop-blur-xl transition duration-300 hover:scale-[1.03] hover:border-green-400/50 hover:bg-green-500/20"
                                >
                                    <FaWhatsapp size={17} />
                                    {t.cta}
                                    <ArrowUpRight
                                        size={16}
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* right side */}
                    {isMobile ? (
                        <div className="relative space-y-5">
                            {t.steps.map((step, index) => (
                                <ProcessCard
                                    key={step.title}
                                    step={step}
                                    index={index}
                                    progress={scrollYProgress}
                                    isMobile={true}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="relative min-h-[220vh]">
                            <div className="sticky top-24">
                                <div className="relative space-y-5">
                                    {t.steps.map((step, index) => (
                                        <ProcessCard
                                            key={step.title}
                                            step={step}
                                            index={index}
                                            progress={scrollYProgress}
                                            isMobile={false}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}