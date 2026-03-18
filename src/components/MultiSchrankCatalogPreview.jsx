import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import { Link } from "react-router-dom";
import "keen-slider/keen-slider.min.css";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";

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

const content = {
    de: {
        badge: "Unsere Kollektion",
        title: "Entdecken Sie Möbel mit",
        highlight: "luxuriöser Ausstrahlung.",
        desc: "Entdecken Sie eine kuratierte Auswahl hochwertiger Möbel und Interior-Lösungen für elegante Zuhause, moderne Lebensstile und zeitlose Wohnräume.",
        discover: "Kollektion entdecken",
        viewCatalog: "Gesamten Katalog ansehen",
        startProject: "Projekt starten",
        prevAria: "Nach links scrollen",
        nextAria: "Nach rechts scrollen",
        goToSlide: "Gehe zu Slide",
        items: [
            {
                id: 1,
                title: "Luxus-Kleiderschränke",
                description:
                    "Elegante Schranksysteme mit hochwertigen Oberflächen, nahtlosen Details und intelligentem Stauraum.",
                image: "catalog-wardrobe.webp",
                tag: "Highlight",
                href: "/catalog",
            },
            {
                id: 2,
                title: "Wohnzimmermöbel",
                description:
                    "Moderne Möbelkonzepte, die Wärme, Eleganz und Ausgewogenheit in den Alltag bringen.",
                image: "catalog-living.webp",
                tag: "Modern",
                href: "/catalog",
            },
            {
                id: 3,
                title: "Schlafzimmermöbel",
                description:
                    "Zeitlose Möbelstücke für Schlafzimmer, gestaltet für Komfort, Ruhe und moderne Eleganz.",
                image: "catalog-bedroom.webp",
                tag: "Stilvoll",
                href: "/catalog",
            },
            {
                id: 4,
                title: "Küchenlösungen",
                description:
                    "Funktionale Küchenmöbel und hochwertige Designlösungen, individuell abgestimmt auf modernes Wohnen.",
                image: "catalog-kitchen.webp",
                tag: "Individuell",
                href: "/catalog",
            },
            {
                id: 5,
                title: "TV-Möbel",
                description:
                    "Minimalistische TV-Units für klare Raumkompositionen und eine gehobene Innenraumästhetik.",
                image: "catalog-tv-unit.webp",
                tag: "Minimal",
                href: "/catalog",
            },
            {
                id: 6,
                title: "Büromöbel",
                description:
                    "Durchdachte Arbeitsmöbel, die Produktivität, Eleganz und praktische Organisation verbinden.",
                image: "catalog-office.webp",
                tag: "Workspace",
                href: "/catalog",
            },
        ],
    },
    en: {
        badge: "Our Collection",
        title: "Discover furniture with",
        highlight: "a luxurious presence.",
        desc: "Explore a curated selection of premium furniture and interior solutions for elegant homes, modern lifestyles, and timeless living spaces.",
        discover: "Discover collection",
        viewCatalog: "View full catalog",
        startProject: "Start your project",
        prevAria: "Scroll left",
        nextAria: "Scroll right",
        goToSlide: "Go to slide",
        items: [
            {
                id: 1,
                title: "Luxury wardrobes",
                description:
                    "Elegant wardrobe systems with premium finishes, seamless detailing, and intelligent storage.",
                image: "catalog-wardrobe.webp",
                tag: "Highlight",
                href: "/catalog",
            },
            {
                id: 2,
                title: "Living room furniture",
                description:
                    "Modern furniture concepts that bring warmth, elegance, and balance into everyday living.",
                image: "catalog-living.webp",
                tag: "Modern",
                href: "/catalog",
            },
            {
                id: 3,
                title: "Bedroom furniture",
                description:
                    "Timeless bedroom furniture designed for comfort, calm, and modern elegance.",
                image: "catalog-bedroom.webp",
                tag: "Stylish",
                href: "/catalog",
            },
            {
                id: 4,
                title: "Kitchen solutions",
                description:
                    "Functional kitchen furniture and premium design solutions tailored to modern living.",
                image: "catalog-kitchen.webp",
                tag: "Custom",
                href: "/catalog",
            },
            {
                id: 5,
                title: "TV units",
                description:
                    "Minimal TV units for clean room compositions and an elevated interior aesthetic.",
                image: "catalog-tv-unit.webp",
                tag: "Minimal",
                href: "/catalog",
            },
            {
                id: 6,
                title: "Office furniture",
                description:
                    "Thoughtfully designed work furniture that combines productivity, elegance, and practical organization.",
                image: "catalog-office.webp",
                tag: "Workspace",
                href: "/catalog",
            },
        ],
    },
};

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

function MobileSliderCard({ item, index, discoverText, currentSlide }) {
    const isActive = currentSlide === index;

    return (
        <div className="keen-slider__slide flex justify-center">
            <div
                className="transition-transform duration-200 ease-out"
                style={{
                    transform: `translateY(${isActive ? 0 : 6}px) scale(${isActive ? 1 : 0.985})`,
                    opacity: isActive ? 1 : 0.92,
                    willChange: "transform",
                }}
            >
                <Link
                    to={item.href}
                    style={{ WebkitTapHighlightColor: "transparent" }}
                    className="group relative block h-90 w-[78vw] overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-md"
                >
                    <div className="absolute inset-0 overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-200 ease-out"
                            style={{
                                transform: `scale(${isActive ? 1.02 : 1})`,
                                willChange: "transform",
                            }}
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
                        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.05)_45%,transparent_65%)] opacity-55" />
                    </div>

                    <div
                        className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-white/10 transition-opacity duration-200"
                        style={{ opacity: 0.85 }}
                    />

                    <div
                        className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-orange-300/30 transition-opacity duration-200"
                        style={{ opacity: isActive ? 0.7 : 0.18 }}
                    />

                    <div
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.10),transparent_58%)] transition-opacity duration-200"
                        style={{ opacity: isActive ? 0.7 : 0.18 }}
                    />

                    <div className="relative flex h-full flex-col justify-between p-6">
                        <div
                            className="flex items-start justify-between gap-4 transition-all duration-200"
                            style={{
                                opacity: isActive ? 1 : 0.88,
                                transform: `translateY(${isActive ? 0 : 4}px)`,
                            }}
                        >
                            <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-white/75 backdrop-blur-md">
                                {item.tag}
                            </div>

                            <div className="text-sm font-medium text-orange-200/40">
                                {String(index + 1).padStart(2, "0")}
                            </div>
                        </div>

                        <div
                            className="max-w-xl transition-all duration-200"
                            style={{
                                opacity: isActive ? 1 : 0.88,
                                transform: `translateY(${isActive ? 0 : 8}px)`,
                            }}
                        >
                            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                                {item.title}
                            </h3>

                            <p className="mt-1 max-w-lg text-sm text-white/65">
                                {item.description}
                            </p>

                            <div className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white/85 transition duration-300 group-hover:text-orange-300">
                                <span>{discoverText}</span>
                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

function DesktopSliderCard({ item, index, details, discoverText }) {
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
                    className="group relative block h-90 w-[82vw] overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-2xl sm:h-112 sm:w-120 lg:h-[80vh] lg:max-h-175 lg:w-[clamp(320px,50vw,820px)]"
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
                                <span>{discoverText}</span>
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
    const { lang } = useLanguage();
    const t = content[lang];

    const [isMobile, setIsMobile] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [details, setDetails] = useState(null);

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

    const plugins = useMemo(() => {
        return isMobile ? [] : [autoplay];
    }, [isMobile]);

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            mode: "snap",
            rubberband: false,
            renderMode: isMobile ? "performance" : "precision",
            initial: 0,
            dragSpeed: isMobile ? 0.65 : 1,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel);

                if (!isMobile) {
                    setDetails(slider.track.details);
                }
            },
            detailsChanged(slider) {
                if (!isMobile) {
                    setDetails(slider.track.details);
                }
            },
            created(slider) {
                setCurrentSlide(slider.track.details.rel);

                if (!isMobile) {
                    setDetails(slider.track.details);
                }
            },
            updated(slider) {
                if (!isMobile) {
                    setDetails(slider.track.details);
                }
            },
            slides: {
                origin: "center",
                perView: 1,
                spacing: isMobile ? 10 : 20,
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
        plugins
    );

    useEffect(() => {
        if (!instanceRef.current) return;

        const updateSlider = () => {
            if (!instanceRef.current) return;

            instanceRef.current.update();

            const trackDetails = instanceRef.current.track.details;
            setCurrentSlide(trackDetails.rel);

            if (!isMobile) {
                setDetails(trackDetails);
            } else {
                setDetails(null);
            }
        };

        const raf1 = requestAnimationFrame(() => {
            const raf2 = requestAnimationFrame(updateSlider);
            return () => cancelAnimationFrame(raf2);
        });

        return () => cancelAnimationFrame(raf1);
    }, [lang, isMobile, instanceRef]);

    return (
        <section
            id="catalog"
            className="relative overflow-hidden bg-neutral-950 py-6 text-white md:py-18"
        >
            <div className="pointer-events-none absolute inset-0">
                <div
                    className={`absolute left-[-8%] top-[12%] rounded-full bg-orange-500/10 ${
                        isMobile ? "h-48 w-48 blur-2xl" : "h-80 w-80 blur-3xl"
                    }`}
                />
                <div
                    className={`absolute right-[-8%] bottom-[8%] rounded-full bg-orange-300/6 ${
                        isMobile ? "h-56 w-56 blur-2xl" : "h-96 w-96 blur-3xl"
                    }`}
                />
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
                            className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-orange-200 ${
                                isMobile ? "backdrop-blur-md" : "backdrop-blur-xl"
                            }`}
                        >
                            <Sparkles size={14} className="text-orange-400" />
                            {t.badge}
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="mt-6 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl xl:text-6xl"
                        >
                            {t.title}{" "}
                            <span className="bg-linear-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                                {t.highlight}
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg"
                        >
                            {t.desc}
                        </motion.p>
                    </div>
                </div>

                <motion.div variants={fadeUp} className="relative z-50 mt-8 sm:mt-14">
                    <button
                        onClick={() => instanceRef.current?.prev()}
                        className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-neutral-900/70 text-white/80 backdrop-blur-xl transition duration-300 hover:border-orange-300/20 hover:bg-neutral-800/80 hover:text-orange-200 lg:inline-flex"
                        aria-label={t.prevAria}
                    >
                        <ArrowLeft size={18} />
                    </button>

                    <button
                        onClick={() => instanceRef.current?.next()}
                        className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-neutral-900/70 text-white/80 backdrop-blur-xl transition duration-300 hover:border-orange-300/20 hover:bg-neutral-800/80 hover:text-orange-200 lg:inline-flex"
                        aria-label={t.nextAria}
                    >
                        <ArrowRight size={18} />
                    </button>

                    <div ref={sliderRef} className="keen-slider px-0 sm:px-6 lg:px-10">
                        {t.items.map((item, index) =>
                            isMobile ? (
                                <MobileSliderCard
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    discoverText={t.discover}
                                    currentSlide={currentSlide}
                                />
                            ) : (
                                <DesktopSliderCard
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    details={details}
                                    discoverText={t.discover}
                                />
                            )
                        )}
                    </div>

                    <div className="mt-7 flex items-center justify-center gap-2">
                        {t.items.map((_, idx) => {
                            const isActive = currentSlide === idx;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => instanceRef.current?.moveToIdx(idx)}
                                    aria-label={`${t.goToSlide} ${idx + 1}`}
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
                        {t.viewCatalog}
                        <ArrowRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>

                    <a
                        href="https://wa.me/4915563440433"
                        target="_blank"
                        rel="noreferrer"
                        className={`group inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 px-5 py-3.5 text-sm font-medium text-green-300 transition duration-300 hover:scale-[1.03] hover:border-green-400/50 hover:bg-green-500/20 sm:px-6 ${
                            isMobile ? "backdrop-blur-md" : "backdrop-blur-xl"
                        }`}
                    >
                        <FaWhatsapp size={17} />
                        {t.startProject}
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