import React, { useRef, useState } from "react";
import {
    AnimatePresence,
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

const faqs = [
    {
        q: "Can I request custom dimensions?",
        a: "Yes, all major furniture pieces can be tailored according to your room size and project requirements.",
    },
    {
        q: "Do you offer installation?",
        a: "Yes, we provide installation support depending on the product type and location.",
    },
    {
        q: "What materials do you use?",
        a: "We work with premium laminates, MDF, engineered wood, and selected natural finishes depending on the collection.",
    },
    {
        q: "How long does delivery take?",
        a: "Delivery timelines depend on customization and production scope, but standard lead times are usually shared during quotation.",
    },
];

function FAQItem({ item, index, openIndex, setOpenIndex, progress }) {
    const isOpen = openIndex === index;

    const start = 0.18 + index * 0.1;
    const end = start + 0.22;

    const opacity = useTransform(progress, [start, end], [0, 1]);
    const y = useTransform(progress, [start, end], [44, 0]);
    const scale = useTransform(progress, [start, end], [0.985, 1]);
    const blur = useTransform(progress, [start, end], [8, 0]);
    const borderOpacity = useTransform(progress, [start, end], [0.35, 1]);

    return (
        <motion.div
            style={{
                opacity,
                y,
                scale,
                filter: useTransform(blur, (v) => `blur(${v}px)`),
            }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25 }}
            className="group relative overflow-hidden rounded-[26px] border bg-white/4 backdrop-blur-xl"
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
                    scale: isOpen ? 1 : 0.92,
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-[-10%] top-[-30%] h-40 w-40 rounded-full bg-[#8a6a4a]/20 blur-3xl" />
                <div className="absolute bottom-[-40%] right-[-10%] h-40 w-40 rounded-full bg-[#f5f1eb]/6 blur-3xl" />
            </motion.div>

            <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="relative flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7 md:py-6"
            >
                <div className="flex items-start gap-4">
                    <motion.div
                        animate={{
                            rotate: isOpen ? 180 : 0,
                            scale: isOpen ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
                    >
                        <Sparkles className="h-4 w-4 text-white/80" />
                    </motion.div>

                    <div>
                        <p className="text-sm font-medium leading-6 text-white md:text-base md:leading-7">
                            {item.q}
                        </p>
                    </div>
                </div>

                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5"
                >
                    <ChevronDown className="h-4 w-4 text-white/75" />
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
                            height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 0.25 },
                        }}
                        className="overflow-hidden"
                    >
                        <motion.div
                            initial={{ y: 12, filter: "blur(6px)" }}
                            animate={{ y: 0, filter: "blur(0px)" }}
                            exit={{ y: -8, filter: "blur(4px)" }}
                            transition={{ duration: 0.35, delay: 0.05 }}
                            className="relative px-5 pb-5 md:px-7 md:pb-6"
                        >
                            <div className="ml-14 border-l border-white/10 pl-5">
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
    const [openIndex, setOpenIndex] = useState(0);
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 85%", "end 20%"],
    });

    const progress = useSpring(scrollYProgress, {
        stiffness: 110,
        damping: 26,
        mass: 0.45,
    });

    const badgeOpacity = useTransform(progress, [0, 0.16], [0, 1]);
    const badgeY = useTransform(progress, [0, 0.16], [26, 0]);

    const headingOpacity = useTransform(progress, [0.06, 0.24], [0, 1]);
    const headingY = useTransform(progress, [0.06, 0.24], [38, 0]);
    const headingBlur = useTransform(progress, [0.06, 0.24], [10, 0]);

    const textOpacity = useTransform(progress, [0.12, 0.3], [0, 1]);
    const textY = useTransform(progress, [0.12, 0.3], [28, 0]);

    const sectionLift = useTransform(progress, [0, 1], [30, -12]);

    return (
        <section
            ref={sectionRef}
            className="relative mx-auto max-w-5xl overflow-hidden px-6 py-12 md:px-10 md:py-18"
        >
            {/* static subtle grid */}
            <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[42px_42px]" />

            <motion.div style={{ y: sectionLift }} className="relative">
                <div className="mb-12 text-center">
                    <motion.div
                        style={{ opacity: badgeOpacity, y: badgeY }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/60"
                    >
                        <Sparkles className="h-4 w-4" />
                        FAQ
                    </motion.div>

                    <motion.h2
                        style={{
                            opacity: headingOpacity,
                            y: headingY,
                            filter: useTransform(
                                headingBlur,
                                (v) => `blur(${v}px)`
                            ),
                        }}
                        className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl"
                    >
                        Common questions,
                        <span className="block text-white/60">
                            clear answers
                        </span>
                    </motion.h2>

                    <motion.p
                        style={{ opacity: textOpacity, y: textY }}
                        className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 md:text-base"
                    >
                        Everything you may want to know about custom sizing,
                        materials, installation, and delivery before starting
                        your furniture project.
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <FAQItem
                            key={index}
                            item={item}
                            index={index}
                            openIndex={openIndex}
                            setOpenIndex={setOpenIndex}
                            progress={progress}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}