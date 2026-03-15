import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const partners = [
    {
        name: "Swiss Krono",
        desc: "Korpus- und Frontmaterialien",
        url: "https://www.swisskrono.com/ch-de/produkte/interiors/one-world-collection/?popup=redirectInfo",
        logo: "/logos/swiss-krono-logo.svg",
        whiteBg: true,
    },
    {
        name: "Egger",
        desc: "Arbeitsplatten",
        url: "https://www.egger.com/de/moebel-innenausbau/sortiment/produkte/worktops?country=DE",
        logo: "/logos/gen_egger_logo_de.svg",
        whiteBg: true,
    },
    {
        name: "Blum",
        desc: "Scharniersysteme",
        url: "https://www.blum.com/de/de/produkte/scharniersysteme/uebersicht/",
        logo: "/logos/blum.svg",
    },
    {
        name: "Hettich",
        desc: "Beschläge und Scharniere",
        url: "https://www.hettich.com/de-de/startseite",
        logo: "/logos/hettich.svg",
        whiteBg: true,
    },
    {
        name: "Inoxa",
        desc: "Küchenzubehör",
        url: "https://inoxa.it/en/kitchen",
        logo: "/logos/Inoxa_logo_bianco.svg",
    },
    {
        name: "Blanco",
        desc: "Küchensysteme",
        url: "https://www.blanco.de/",
        logo: "/logos/blanco.svg",
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
            className="relative overflow-hidden bg-[#070707] pb-12 pt-0 sm:py-20 text-white"
        >
            {/* glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-24 h-96 w-md -translate-x-1/2 rounded-full bg-orange-500/8 blur-[140px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(249,115,22,0.06),transparent_26%)]" />
            </div>

            <div className="relative mx-auto max-w-6xl px-6 md:px-10">
                {/* heading */}
                <motion.div
                    style={{ y, opacity }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <span className="text-[0.7rem] uppercase tracking-[0.35em] text-orange-200/50">
                        Unsere Partner
                    </span>

                    <h2 className="mt-4 text-4xl font-semibold leading-tight text-white/90 md:text-5xl">
                        Vertrauenswürdige Partner für
                        <span className="block bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                            Materialien und Beschläge
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
                            className="group relative rounded-3xl border border-white/10 bg-white/4 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-orange-300/20 hover:bg-white/[0.07] flex flex-col items-center justify-center"
                        >
                            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100">
                                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl" />
                            </div>

                            <div className="relative z-10 flex items-center justify-center">
                                <div
                                    className={`flex w-32 items-center justify-center rounded-xl ${partner.whiteBg ? "bg-white p-4" : ""
                                        }`}
                                >
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-10 w-auto object-contain opacity-90 transition group-hover:opacity-100"
                                    />
                                </div>
                            </div>

                            <p className="relative z-10 mt-3 text-center text-sm text-white/60">
                                {partner.desc}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}