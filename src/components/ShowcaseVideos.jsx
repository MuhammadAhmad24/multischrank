import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const content = {
    de: {
        badge: "Installierte Projekte",
        title: "Echte Räume,",
        highlight: "perfekt umgesetzt",
        desc: "Ein näherer Einblick in fertiggestellte Projekte, maßgefertigte Stauraumlösungen und präzise integrierte Einbauten in realen Wohnräumen.",
        prev: "Vorheriges Video",
        next: "Nächstes Video",
        goToVideo: "Zum Video",
        videos: [
            {
                id: 1,
                title: "Unterschrank mit Arbeitsplatte",
                subtitle:
                    "Sauberer Stauraum im unteren Bereich mit minimalistischer, passgenauer Ausführung",
                src: "/videos/showcase-4.mp4",
            },
            {
                id: 2,
                title: "Einbauregal mit Heizkörperintegration",
                subtitle:
                    "Offene Fächer, präzise um den Heizkörper angepasst",
                src: "/videos/showcase-1.mp4",
            },
            {
                id: 3,
                title: "Schubladensystem im Detail",
                subtitle:
                    "Leichtgängige Schubladen für den praktischen Alltag",
                src: "/videos/showcase-2.mp4",
            },
            {
                id: 4,
                title: "Bett mit integriertem Stauraum",
                subtitle:
                    "Hochklappbares Bettgestell mit verstecktem Stauraum",
                src: "/videos/showcase-3.mp4",
            },
        ],
    },
    en: {
        badge: "Installed Projects",
        title: "Real spaces,",
        highlight: "perfectly executed",
        desc: "A closer look at completed projects, custom storage solutions, and precisely integrated built-ins in real living spaces.",
        prev: "Previous video",
        next: "Next video",
        goToVideo: "Go to video",
        videos: [
            {
                id: 1,
                title: "Base cabinet with countertop",
                subtitle:
                    "Clean lower storage with a minimal, fitted finish",
                src: "/videos/showcase-4.mp4",
            },
            {
                id: 2,
                title: "Built-in shelving with radiator integration",
                subtitle:
                    "Open compartments precisely fitted around the radiator",
                src: "/videos/showcase-1.mp4",
            },
            {
                id: 3,
                title: "Drawer storage detail",
                subtitle:
                    "Smooth sliding drawers for practical everyday use",
                src: "/videos/showcase-2.mp4",
            },
            {
                id: 4,
                title: "Bed with integrated storage",
                subtitle:
                    "Lift-up bed base with hidden built-in storage",
                src: "/videos/showcase-3.mp4",
            },
        ],
    },
};

const AUTO_SWITCH_MS = 4000;

function mod(n, m) {
    return ((n % m) + m) % m;
}

export default function ShowcaseVideos() {
    const { lang } = useLanguage();
    const t = content[lang];

    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(max-width: 639px)");

        const update = () => setIsMobile(media.matches);
        update();

        if (media.addEventListener) {
            media.addEventListener("change", update);
            return () => media.removeEventListener("change", update);
        } else {
            media.addListener(update);
            return () => media.removeListener(update);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // desktop same feel, mobile lighter
    const headingY = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? [0, 0] : [30, -20]
    );

    const headingOpacity = useTransform(
        scrollYProgress,
        [0, 0.18, 0.32],
        isMobile ? [1, 1, 1] : [0, 1, 1]
    );

    useEffect(() => {
        if (t.videos.length <= 1 || isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => mod(prev + 1, t.videos.length));
        }, AUTO_SWITCH_MS);

        return () => clearInterval(interval);
    }, [isPaused, t.videos.length]);

    const visibleCards = useMemo(() => {
        if (t.videos.length === 1 || isMobile) {
            return [
                {
                    video: t.videos[mod(activeIndex, t.videos.length)],
                    position: "center",
                    slotKey: "center",
                },
            ];
        }

        if (t.videos.length === 2) {
            return [
                {
                    video: t.videos[mod(activeIndex, t.videos.length)],
                    position: "center",
                    slotKey: "center",
                },
                {
                    video: t.videos[mod(activeIndex + 1, t.videos.length)],
                    position: "right",
                    slotKey: "right",
                },
            ];
        }

        return [
            {
                video: t.videos[mod(activeIndex - 1, t.videos.length)],
                position: "left",
                slotKey: "left",
            },
            {
                video: t.videos[mod(activeIndex, t.videos.length)],
                position: "center",
                slotKey: "center",
            },
            {
                video: t.videos[mod(activeIndex + 1, t.videos.length)],
                position: "right",
                slotKey: "right",
            },
        ];
    }, [activeIndex, isMobile, t.videos]);

    const goPrev = () => setActiveIndex((prev) => mod(prev - 1, t.videos.length));
    const goNext = () => setActiveIndex((prev) => mod(prev + 1, t.videos.length));

    return (
        <section
            ref={sectionRef}
            className="relative z-90 overflow-hidden px-4 mt-10 md:mt-0 sm:px-6 lg:px-8"
        >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[44px_44px] opacity-[0.18]" />
            <div className="pointer-events-none absolute left-[-8%] top-10 h-80 w-80 rounded-full bg-orange-500/12 blur-3xl" />
            <div className="pointer-events-none absolute right-[-8%] bottom-10 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

            <motion.div
                style={{ y: headingY, opacity: headingOpacity }}
                className="relative mx-auto mb-14 max-w-3xl text-center"
            >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-orange-300 backdrop-blur-xl">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                    {t.badge}
                </div>

                <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                    {t.title}{" "}
                    <span className="text-orange-300">{t.highlight}</span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
                    {t.desc}
                </p>
            </motion.div>

            <div
                className="relative mx-auto max-w-7xl"
                onMouseEnter={() => !isMobile && setIsPaused(true)}
                onMouseLeave={() => !isMobile && setIsPaused(false)}
            >
                <div className="relative h-136 overflow-hidden sm:h-130">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {visibleCards.map(({ video, position, slotKey }) => (
                            <FocusVideoCard
                                key={`${slotKey}-${video.id}-${isMobile ? "mobile" : "desktop"}`}
                                video={video}
                                position={position}
                                isMobile={isMobile}
                            />
                        ))}
                    </AnimatePresence>

                    {t.videos.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={goPrev}
                                className="absolute left-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/35 text-white backdrop-blur-xl transition hover:bg-white/10"
                                aria-label={t.prev}
                            >
                                <ChevronLeft size={18} />
                            </button>

                            <button
                                type="button"
                                onClick={goNext}
                                className="absolute right-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/35 text-white backdrop-blur-xl transition hover:bg-white/10"
                                aria-label={t.next}
                            >
                                <ChevronRight size={18} />
                            </button>
                        </>
                    )}
                </div>

                {t.videos.length > 1 && (
                    <div className="mt-8 flex items-center justify-center gap-2">
                        {t.videos.map((item, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${isActive
                                            ? "w-8 bg-orange-300"
                                            : "w-2 bg-white/25 hover:bg-white/45"
                                        }`}
                                    aria-label={`${t.goToVideo} ${index + 1}`}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}

function FocusVideoCard({ video, position, isMobile }) {
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start 90%", "end 10%"],
    });

    // mobile per scroll-based movement remove for smoother result
    const mediaY = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile
            ? [0, 0]
            : position === "center"
                ? [28, -28]
                : [20, -20]
    );

    const overlayY = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile
            ? [0, 0]
            : position === "center"
                ? [10, -10]
                : [6, -6]
    );

    const config = getPositionConfig(position);

    return (
        <motion.article
            ref={cardRef}
            layout={!isMobile}
            initial={
                isMobile
                    ? {
                        opacity: 0,
                        y: 18,
                        scale: 0.985,
                    }
                    : {
                        opacity: 0,
                        x: config.initialX,
                        scale: config.initialScale,
                    }
            }
            animate={
                isMobile
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        zIndex: config.zIndex,
                    }
                    : {
                        opacity: config.opacity,
                        x: config.x,
                        y: config.y,
                        scale: config.scale,
                        zIndex: config.zIndex,
                    }
            }
            exit={
                isMobile
                    ? {
                        opacity: 0,
                        y: -12,
                        scale: 0.985,
                        transition: {
                            duration: 0.22,
                            ease: [0.22, 1, 0.36, 1],
                        },
                    }
                    : {
                        opacity: 0,
                        x: config.exitX,
                        scale: config.exitScale,
                        transition: {
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                        },
                    }
            }
            transition={{
                duration: isMobile ? 0.3 : 0.6,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={`absolute top-0 ${position === "center"
                    ? "left-1/2 -translate-x-1/2"
                    : position === "left"
                        ? "left-0 lg:left-[8%]"
                        : "right-0 lg:right-[8%]"
                }`}
            style={{
                width: config.width,
                pointerEvents: position === "center" ? "auto" : "none",
            }}
        >
            <div
                className={`relative overflow-hidden border border-white/10 bg-white/4 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl ${position === "center" ? "rounded-4xl" : "rounded-[1.7rem]"
                    }`}
            >
                <div
                    className={`relative overflow-hidden border border-white/10 bg-black ${position === "center"
                            ? "aspect-3/5 rounded-[1.55rem]"
                            : "aspect-3/5 rounded-[1.3rem]"
                        }`}
                >
                    <motion.video
                        src={video.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        style={{
                            y: mediaY,
                            scale: isMobile ? 1 : 1.04,
                        }}
                        className="absolute inset-0 h-[108%] w-full object-cover will-change-transform"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/78 via-black/12 to-black/12" />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/45 to-transparent" />

                    <motion.div
                        style={{ y: overlayY }}
                        className="absolute inset-x-0 bottom-0 p-4"
                    >
                        <div
                            className={`rounded-2xl border border-white/10 bg-black/28 backdrop-blur-xl ${position === "center" ? "p-4" : "p-3"
                                }`}
                        >
                            <h3
                                className={`font-semibold text-white ${position === "center" ? "text-lg" : "text-sm"
                                    }`}
                            >
                                {video.title}
                            </h3>

                            <p
                                className={`mt-1 leading-5 text-white/68 ${position === "center" ? "text-sm" : "text-xs"
                                    }`}
                            >
                                {video.subtitle}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.article>
    );
}

function getPositionConfig(position) {
    switch (position) {
        case "left":
            return {
                x: 0,
                y: 34,
                scale: 0.9,
                opacity: 0.72,
                zIndex: 10,
                width: "min(100%, 250px)",
                initialX: -70,
                initialScale: 0.86,
                exitX: -70,
                exitScale: 0.86,
            };

        case "right":
            return {
                x: 0,
                y: 34,
                scale: 0.9,
                opacity: 0.72,
                zIndex: 10,
                width: "min(100%, 250px)",
                initialX: 70,
                initialScale: 0.86,
                exitX: 70,
                exitScale: 0.86,
            };

        case "center":
        default:
            return {
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
                zIndex: 20,
                width: "min(100%, 320px)",
                initialX: 0,
                initialScale: 0.94,
                exitX: 0,
                exitScale: 0.94,
            };
    }
}