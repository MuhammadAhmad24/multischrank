import React, { useEffect, useRef, useState } from "react";
import {
    AnimatePresence,
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useLanguage } from "../LanguageContext";

// TRANSLATIONS
const content = {
    de: {
        badge: "FAQ",
        title: "Häufige Fragen,",
        highlight: "klare Antworten",
        desc: "Alles, was Sie vor dem Start Ihres Möbelprojekts über individuelle Maße, Materialien, Montage und Lieferung wissen möchten.",
        faqs: [
            {
                q: "Kann ich individuelle Maße anfragen?",
                a: "Ja, alle wichtigen Möbelstücke können an Ihre Raummaße und Projektanforderungen angepasst werden.",
            },
            {
                q: "Bieten Sie auch Montage an?",
                a: "Ja, wir bieten je nach Produkttyp und Standort Unterstützung bei der Montage an.",
            },
            {
                q: "Welche Materialien verwenden Sie?",
                a: "Wir arbeiten je nach Kollektion mit hochwertigen Laminaten, MDF, Holzwerkstoffen und ausgewählten natürlichen Oberflächen.",
            },
            {
                q: "Wie lange dauert die Lieferung?",
                a: "Die Lieferzeit hängt vom Grad der Individualisierung und dem Umfang des Projekts ab. Übliche Zeitrahmen werden in der Regel bereits im Angebot mitgeteilt.",
            },
        ],
    },
    en: {
        badge: "FAQ",
        title: "Common questions,",
        highlight: "clear answers",
        desc: "Everything you may want to know before starting your furniture project, from custom sizing and materials to installation and delivery.",
        faqs: [
            {
                q: "Can I request custom dimensions?",
                a: "Yes, all key furniture pieces can be adapted to your room dimensions and project requirements.",
            },
            {
                q: "Do you also offer installation?",
                a: "Yes, depending on the product type and location, we also provide installation support.",
            },
            {
                q: "What materials do you use?",
                a: "Depending on the collection, we work with high-quality laminates, MDF, engineered wood, and selected natural finishes.",
            },
            {
                q: "How long does delivery take?",
                a: "Delivery time depends on the level of customization and the scope of the project. Typical timeframes are usually shared in the quotation.",
            },
        ],
    },
};

function FAQItem({
    item,
    index,
    openIndex,
    setOpenIndex,
    progress,
    isMobile,
}) {
    const isOpen = openIndex === index;

    const start = isMobile ? 0.1 + index * 0.08 : 0.18 + index * 0.1;
    const end = isMobile ? start + 0.16 : start + 0.22;

    const opacity = useTransform(progress, [start, end], [0, 1]);
    const y = useTransform(progress, [start, end], isMobile ? [18, 0] : [44, 0]);
    const scale = useTransform(
        progress,
        [start, end],
        isMobile ? [1, 1] : [0.985, 1]
    );
    const blur = useTransform(progress, [start, end], isMobile ? [3, 0] : [8, 0]);
    const borderOpacity = useTransform(progress, [start, end], [0.35, 1]);

    return (
        <motion.div
            style={{
                opacity,
                y,
                scale,
                filter: useTransform(blur, (v) => `blur(${v}px)`),
                willChange: "transform, opacity, filter",
            }}
            whileHover={isMobile ? undefined : { y: -2 }}
            transition={{ duration: isMobile ? 0.2 : 0.25 }}
            className={`group relative overflow-hidden rounded-[26px] border bg-white/4 ${
                isMobile ? "backdrop-blur-md" : "backdrop-blur-xl"
            }`}
        >
            <motion.div
                style={{
                    opacity: borderOpacity,
                }}
                className="pointer-events-none absolute inset-0 rounded-[26px] border border-white/10"
            />

            <motion.div
                animate={{
                    opacity: isOpen ? 1 : 0,
                    scale: isOpen ? 1 : isMobile ? 1 : 0.92,
                }}
                transition={{
                    duration: isMobile ? 0.28 : 0.45,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="pointer-events-none absolute inset-0"
            >
                <div
                    className={`absolute left-[-10%] top-[-30%] rounded-full bg-orange-500/16 ${
                        isMobile ? "h-28 w-28 blur-2xl" : "h-40 w-40 blur-3xl"
                    }`}
                />
                <div
                    className={`absolute bottom-[-40%] right-[-10%] rounded-full bg-orange-200/6 ${
                        isMobile ? "h-28 w-28 blur-2xl" : "h-40 w-40 blur-3xl"
                    }`}
                />
            </motion.div>

            <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="relative flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7 md:py-6"
            >
                <div className="flex items-start gap-4">
                    <motion.div
                        animate={{
                            rotate: isOpen ? 180 : 0,
                            scale: isOpen ? (isMobile ? 1 : 1.05) : 1,
                        }}
                        transition={{
                            duration: isMobile ? 0.25 : 0.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
                    >
                        <Sparkles className="h-4 w-4 text-orange-300" />
                    </motion.div>

                    <div>
                        <p className="text-sm font-medium leading-6 text-white md:text-base md:leading-7">
                            {item.q}
                        </p>
                    </div>
                </div>

                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{
                        duration: isMobile ? 0.25 : 0.35,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5"
                >
                    <ChevronDown className="h-4 w-4 text-orange-200/80" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            height: {
                                duration: isMobile ? 0.28 : 0.45,
                                ease: [0.22, 1, 0.36, 1],
                            },
                            opacity: { duration: isMobile ? 0.18 : 0.25 },
                        }}
                        className="overflow-hidden"
                    >
                        <motion.div
                            initial={{ y: isMobile ? 6 : 12, filter: isMobile ? "blur(2px)" : "blur(6px)" }}
                            animate={{ y: 0, filter: "blur(0px)" }}
                            exit={{ y: isMobile ? -4 : -8, filter: isMobile ? "blur(2px)" : "blur(4px)" }}
                            transition={{
                                duration: isMobile ? 0.22 : 0.35,
                                delay: isMobile ? 0.02 : 0.05,
                            }}
                            className="relative px-5 pb-5 md:px-7 md:pb-6"
                        >
                            <div className="ml-14 border-l border-orange-300/15 pl-5">
                                <p className="max-w-2xl text-sm leading-7 text-white/65 md:text-[15px]">
                                    {item.a}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function Faq() {
    const { lang } = useLanguage();
    const t = content[lang];

    const [openIndex, setOpenIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const sectionRef = useRef(null);

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
        offset: isMobile ? ["start 96%", "end 30%"] : ["start 85%", "end 20%"],
    });

    const springProgress = useSpring(scrollYProgress, {
        stiffness: 110,
        damping: 26,
        mass: 0.45,
    });

    const progress = isMobile ? scrollYProgress : springProgress;

    const badgeOpacity = useTransform(progress, [0, 0.16], [0, 1]);
    const badgeY = useTransform(progress, [0, 0.16], isMobile ? [14, 0] : [26, 0]);

    const headingOpacity = useTransform(progress, [0.06, 0.24], [0, 1]);
    const headingY = useTransform(progress, [0.06, 0.24], isMobile ? [20, 0] : [38, 0]);
    const headingBlur = useTransform(progress, [0.06, 0.24], isMobile ? [4, 0] : [10, 0]);

    const textOpacity = useTransform(progress, [0.12, 0.3], [0, 1]);
    const textY = useTransform(progress, [0.12, 0.3], isMobile ? [16, 0] : [28, 0]);

    const sectionLift = useTransform(
        progress,
        [0, 1],
        isMobile ? [10, 0] : [30, -12]
    );

    return (
        <section
            ref={sectionRef}
            className="relative mx-auto max-w-5xl overflow-hidden px-6 py-12 md:px-10 md:py-18"
        >
            <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[42px_42px]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[42px_42px]" />

            <motion.div style={{ y: sectionLift }} className="relative">
                <div className="mb-12 text-center">
                    <motion.div
                        style={{ opacity: badgeOpacity, y: badgeY }}
                        className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-orange-200 ${
                            isMobile ? "backdrop-blur-md" : "backdrop-blur-xl"
                        }`}
                    >
                        <Sparkles className="h-4 w-4 text-orange-400" />
                        {t.badge}
                    </motion.div>

                    <motion.h2
                        style={{
                            opacity: headingOpacity,
                            y: headingY,
                            filter: useTransform(headingBlur, (v) => `blur(${v}px)`),
                            willChange: "transform, opacity, filter",
                        }}
                        className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl"
                    >
                        {t.title}
                        <span className="block bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                            {t.highlight}
                        </span>
                    </motion.h2>

                    <motion.p
                        style={{ opacity: textOpacity, y: textY }}
                        className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 md:text-base"
                    >
                        {t.desc}
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {t.faqs.map((item, index) => (
                        <FAQItem
                            key={index}
                            item={item}
                            index={index}
                            openIndex={openIndex}
                            setOpenIndex={setOpenIndex}
                            progress={progress}
                            isMobile={isMobile}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}