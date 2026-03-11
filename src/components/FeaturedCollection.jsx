import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function FeaturedCollection() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 85%", "end 25%"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 22,
        mass: 0.35,
    });

    const opacity = useTransform(smoothProgress, [0, 0.35, 1], [0, 1, 1]);
    const y = useTransform(smoothProgress, [0, 1], [70, 0]);
    const scale = useTransform(smoothProgress, [0, 1], [0.96, 1]);
    const imageScale = useTransform(smoothProgress, [0, 1], [1.08, 1]);
    const overlayOpacity = useTransform(smoothProgress, [0, 1], [0.58, 0.42]);

    return (
        <section
            ref={sectionRef}
            className="relative z-50 mx-auto max-w-360 px-6 pb-16 md:px-10 md:pb-20"
        >
            <motion.div
                style={{ opacity, y, scale }}
                className="relative overflow-hidden rounded-[34px] border border-white/10"
            >
                <div className="absolute inset-0">
                    <motion.img
                        style={{ scale: imageScale }}
                        src="/featured.jpg"
                        alt="Featured collection"
                        className="h-full w-full object-cover"
                    />
                    <motion.div
                        style={{ opacity: overlayOpacity }}
                        className="absolute inset-0 bg-black"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.16),transparent_32%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_35%,transparent_70%,rgba(249,115,22,0.08))]" />
                </div>

                <div className="relative z-50 grid min-h-110 items-end p-7 md:p-10 lg:p-14">
                    <div className="max-w-2xl">
                        <p className="text-xs uppercase tracking-[0.24em] text-orange-200/65">
                            Featured Collection
                        </p>

                        <h2 className="mt-1 text-xl font-semibold leading-tight text-white sm:mt-4 sm:text-3xl md:text-5xl">
                            Signature wardrobe systems
                            <span className="block bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                                tailored for modern homes
                            </span>
                        </h2>

                        <p className="max-w-xl text-sm text-white/70 sm:mt-5 sm:leading-7">
                            Designed with precision, clean joinery, balanced storage
                            layouts, and finishes that elevate the room without overwhelming
                            it.
                        </p>

                        <a
                            href="#"
                            className="mt-3 inline-flex items-center gap-2 rounded-full bg-orange-400 px-6 py-3 text-sm font-medium text-[#111] transition hover:scale-[1.02] hover:bg-orange-300 sm:mt-7"
                        >
                            <MessageCircle size={17} />
                            Start Your Project
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}