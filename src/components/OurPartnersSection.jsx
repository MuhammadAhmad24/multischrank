import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const partners = [
    {
        name: "Swiss Krono",
        desc: "Korpus & Front Materials",
        url: "https://www.swisskrono.com/ch-de/produkte/interiors/one-world-collection/?popup=redirectInfo",
    },
    {
        name: "Egger",
        desc: "Worktops / Arbeitsplatten",
        url: "https://www.egger.com/de/moebel-innenausbau/sortiment/produkte/worktops?country=DE",
    },
    {
        name: "Blum",
        desc: "Hinge Systems",
        url: "https://www.blum.com/de/de/produkte/scharniersysteme/uebersicht/",
    },
    {
        name: "Hettich",
        desc: "Hardware & Hinges",
        url: "https://www.hettich.com/de-de/startseite",
    },
    {
        name: "Inoxa",
        desc: "Kitchen Accessories",
        url: "https://inoxa.it/en/kitchen",
    },
    {
        name: "Blanco",
        desc: "Kitchen Systems",
        url: "https://www.blanco.de/",
    },
];

export default function OurPartnersSection() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={ref}
            className="relative overflow-hidden bg-[#070707] py-28 text-white"
        >
            {/* glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-24 h-96 w-md -translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />
            </div>

            <div className="relative mx-auto max-w-6xl px-6 md:px-10">
                {/* heading */}
                <motion.div
                    style={{ y, opacity }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <span className="text-[0.7rem] uppercase tracking-[0.35em] text-white/40">
                        Our Partners
                    </span>

                    <h2 className="mt-4 text-4xl font-semibold leading-none text-white/90 md:text-5xl">
                        Trusted material
                        <span className="block text-white/60">
                            and hardware partners
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60 md:text-base">
                        Wir arbeiten mit ausgewählten Herstellern zusammen, die für Qualität,
                        Langlebigkeit und präzise Verarbeitung im Möbelbau stehen.
                    </p>
                </motion.div>

                {/* partners grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {partners.map((partner, index) => (
                        <motion.a
                            key={index}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            className="group relative rounded-3xl border border-white/10 bg-white/4 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-white/90">
                                    {partner.name}
                                </h3>

                                <ArrowUpRight
                                    size={18}
                                    className="text-white/50 transition group-hover:text-white"
                                />
                            </div>

                            <p className="mt-3 text-sm text-white/60">
                                {partner.desc}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}