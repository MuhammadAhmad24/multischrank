import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import { Link } from "react-router-dom";
import "keen-slider/keen-slider.min.css";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    MessageCircle,
    Sparkles,
} from "lucide-react";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.08,
        },
    },
};

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 36,
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

const items = [
    {
        title: "Luxus-Kleiderschränke",
        description:
            "Elegante Schranksysteme mit hochwertigen Oberflächen, nahtlosen Details und intelligentem Stauraum.",
        image: "catalog-wardrobe.webp",
        tag: "Highlight",
        href: "/catalog",
    },
    {
        title: "Wohnzimmermöbel",
        description:
            "Moderne Möbelkonzepte, die Wärme, Eleganz und Ausgewogenheit in den Alltag bringen.",
        image: "catalog-living.webp",
        tag: "Modern",
        href: "/catalog",
    },
    {
        title: "Schlafzimmermöbel",
        description:
            "Zeitlose Möbelstücke für Schlafzimmer, gestaltet für Komfort, Ruhe und moderne Eleganz.",
        image: "catalog-bedroom.webp",
        tag: "Stilvoll",
        href: "/catalog",
    },
    {
        title: "Küchenlösungen",
        description:
            "Funktionale Küchenmöbel und hochwertige Designlösungen, individuell abgestimmt auf modernes Wohnen.",
        image: "catalog-kitchen.webp",
        tag: "Individuell",
        href: "/catalog",
    },
    {
        title: "TV-Möbel",
        description:
            "Minimalistische TV-Units für klare Raumkompositionen und eine gehobene Innenraumästhetik.",
        image: "catalog-tv-unit.webp",
        tag: "Minimal",
        href: "/catalog",
    },
    {
        title: "Büromöbel",
        description:
            "Durchdachte Arbeitsmöbel, die Produktivität, Eleganz und praktische Organisation verbinden.",
        image: "catalog-office.webp",
        tag: "Workspace",
        href: "/catalog",
    },
];

function autoplay(slider) {
    let timeout;
    let mouseOver = false;

    function clearNextTimeout() {
        clearTimeout(timeout);
    }

    function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
            slider.next();
        }, 3500);
    }

    slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
        });
        nextTimeout();
    });

    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
}

function SliderCard({ item, index, details }) {
    const slide = details?.slides?.[index];
    const portion = slide?.portion ?? 0;
    const distance = Math.abs(slide?.distance ?? 1);

    const scale = 0.9 + Math.max(0, 1 - distance) * 0.1;
    const opacity = 0.45 + portion * 0.55;
    const translateY = 18 - portion * 18;
    const imgScale = 1.02 + portion * 0.06;
    const glowOpacity = Math.max(0, 1 - distance) * 1;
    const textOpacity = 0.7 + portion * 0.3;

    return (
        <div className="keen-slider__slide flex justify-center">
            <motion.div
                animate={{
                    scale,
                    opacity,
                    y: translateY,
                    filter: distance < 0.55 ? "blur(0px)" : "blur(1px)",
                }}
                transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <Link
                    to={item.href}
                    className="group relative block h-90 w-[82vw] overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-2xl sm:h-112 sm:w-120 lg:h-136 lg:w-160"
                >
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.img
                            src={item.image}
                            alt={item.title}
                            animate={{ scale: imgScale }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
                        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_45%,transparent_65%)] opacity-70" />
                    </div>

                    <motion.div
                        animate={{ opacity: 0.55 + portion * 0.45 }}
                        transition={{ duration: 0.35 }}
                        className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-white/10"
                    />

                    <motion.div
                        animate={{ opacity: glowOpacity }}
                        transition={{ duration: 0.35 }}
                        className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-orange-300/30"
                    />

                    <motion.div
                        animate={{ opacity: glowOpacity }}
                        transition={{ duration: 0.35 }}
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_58%)]"
                    />

                    <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
                        <motion.div
                            animate={{
                                opacity: textOpacity,
                                y: 8 - portion * 8,
                            }}
                            transition={{ duration: 0.35 }}
                            className="flex items-start justify-between gap-4"
                        >
                            <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-white/75 backdrop-blur-xl">
                                {item.tag}
                            </div>

                            <div className="text-sm font-medium text-orange-200/40">
                                {String(index + 1).padStart(2, "0")}
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{
                                opacity: textOpacity,
                                y: 18 - portion * 18,
                            }}
                            transition={{ duration: 0.35 }}
                            className="max-w-xl"
                        >
                            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                                {item.title}
                            </h3>

                            <p className="mt-1 max-w-lg text-sm text-white/65 md:mt-4 md:text-base md:leading-7">
                                {item.description}
                            </p>

                            <div className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white/85 transition duration-300 group-hover:text-orange-300 sm:mt-6">
                                <span>Kollektion entdecken</span>
                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </div>
                        </motion.div>
                    </div>
                </Link>
            </motion.div>
        </div>
    );
}

export default function MultiSchrankCatalogSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [details, setDetails] = useState(null);

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            mode: "snap",
            rubberband: false,
            renderMode: "precision",
            initial: 0,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel);
            },
            detailsChanged(slider) {
                setDetails(slider.track.details);
            },
            created(slider) {
                setCurrentSlide(slider.track.details.rel);
                setDetails(slider.track.details);
            },
            slides: {
                origin: "center",
                perView: 1,
                spacing: 20,
            },
            breakpoints: {
                "(min-width: 640px)": {
                    slides: {
                        origin: "center",
                        perView: 1,
                        spacing: 20,
                    },
                },
                "(min-width: 1024px)": {
                    slides: {
                        origin: "center",
                        perView: 2,
                        spacing: 20,
                    },
                },
            },
        },
        [autoplay]
    );

    return (
        <section
            id="catalog"
            className="relative overflow-hidden bg-neutral-950 py-12 text-white md:py-18"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-8%] top-[12%] h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
                <div className="absolute right-[-8%] bottom-[8%] h-96 w-96 rounded-full bg-orange-300/6 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(249,115,22,0.08),transparent_26%)]" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.12 }}
                className="relative"
            >
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
                    <div className="max-w-3xl">
                        <motion.div
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-orange-200 backdrop-blur-xl"
                        >
                            <Sparkles size={14} className="text-orange-400" />
                            Unsere Kollektion
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="mt-6 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl xl:text-6xl"
                        >
                            Entdecken Sie Möbel mit{" "}
                            <span className="bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                                luxuriöser Ausstrahlung.
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg"
                        >
                            Entdecken Sie eine kuratierte Auswahl hochwertiger Möbel
                            und Interior-Lösungen für elegante Zuhause, moderne
                            Lebensstile und zeitlose Wohnräume.
                        </motion.p>
                    </div>
                </div>

                <motion.div variants={fadeUp} className="relative z-50 mt-8 sm:mt-14">
                    <button
                        onClick={() => instanceRef.current?.prev()}
                        className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-neutral-900/70 text-white/80 backdrop-blur-xl transition duration-300 hover:border-orange-300/20 hover:bg-neutral-800/80 hover:text-orange-200 lg:inline-flex"
                        aria-label="Nach links scrollen"
                    >
                        <ArrowLeft size={18} />
                    </button>

                    <button
                        onClick={() => instanceRef.current?.next()}
                        className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-neutral-900/70 text-white/80 backdrop-blur-xl transition duration-300 hover:border-orange-300/20 hover:bg-neutral-800/80 hover:text-orange-200 lg:inline-flex"
                        aria-label="Nach rechts scrollen"
                    >
                        <ArrowRight size={18} />
                    </button>

                    <div ref={sliderRef} className="keen-slider px-0 sm:px-6 lg:px-10">
                        {items.map((item, index) => (
                            <SliderCard
                                key={item.title}
                                item={item}
                                index={index}
                                details={details}
                            />
                        ))}
                    </div>

                    <div className="mt-7 flex items-center justify-center gap-2">
                        {items.map((_, idx) => {
                            const isActive = currentSlide === idx;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => instanceRef.current?.moveToIdx(idx)}
                                    aria-label={`Gehe zu Slide ${idx + 1}`}
                                    className={`h-2 rounded-full transition-all duration-500 ${
                                        isActive
                                            ? "w-8 bg-orange-300"
                                            : "w-2 bg-white/25 hover:bg-orange-200/45"
                                    }`}
                                />
                            );
                        })}
                    </div>
                </motion.div>

                <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-center gap-4 px-5 sm:px-6 sm:flex-row lg:px-10">
                    <Link
                        to="/catalog"
                        className="group inline-flex items-center gap-2 rounded-full bg-orange-400 px-5 py-3.5 text-sm font-semibold text-neutral-900 transition duration-300 hover:scale-[1.03] hover:bg-orange-300 hover:shadow-[0_12px_40px_rgba(249,115,22,0.22)] sm:px-6"
                    >
                        Gesamten Katalog ansehen
                        <ArrowRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>

                    <a
                        href="https://wa.me/4915563440433"
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 px-5 py-3.5 text-sm font-medium text-green-300 backdrop-blur-xl transition duration-300 hover:scale-[1.03] hover:border-green-400/50 hover:bg-green-500/20 sm:px-6"
                    >
                        <MessageCircle size={17} />
                        Projekt starten
                        <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}