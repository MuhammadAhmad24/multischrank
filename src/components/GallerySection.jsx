import React, { useEffect, useRef, useState } from "react";
import {
    motion,
    useScroll,
    useMotionValue,
    useTransform,
    useAnimationFrame,
} from "framer-motion";

const topRow = [
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-5.jpg",
    "/gallery-3.jpeg",
    "/gallery-4.jpeg",
    "/gallery-6.jpg",
];

const bottomRow = [
    "/gallery-8.jpeg",
    "/gallery-7.jpg",
    "/gallery-9.jpg",
    "/gallery-10.jpg",
    "/gallery-11.jpg",
    "/gallery-12.jpg",
];

// desktop ke liye repeat
const topTrack = [...topRow, ...topRow, ...topRow];
const bottomTrack = [...bottomRow, ...bottomRow, ...bottomRow];

// mobile ke liye 2x enough
const topMobileTrack = [...topRow, ...topRow];
const bottomMobileTrack = [...bottomRow, ...bottomRow];

function wrap(min, max, v) {
    const range = max - min;
    return ((((v - min) % range) + range) % range) + min;
}

function GalleryCard({ src, alt, isMobile }) {
    return (
        <div
            className={`relative shrink-0 overflow-hidden rounded-[20px] border border-white/10 bg-white/5 ${
                isMobile
                    ? "h-40 w-50"
                    : "h-52 w-65 sm:h-56 sm:w-72.5 md:h-75 md:w-105 xl:h-85 xl:w-125"
            }`}
            style={{
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
            }}
        >
            <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                draggable="false"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/25 via-black/8 to-transparent" />
        </div>
    );
}

function InfiniteScrollRow({
    images,
    direction = 1,
    sectionProgress,
    speedFactor = 0.02,
    isMobile,
}) {
    const baseX = useMotionValue(0);

    useAnimationFrame((_, delta) => {
        if (isMobile) return;

        const progress = sectionProgress.get();

        const activeStrength =
            progress <= 0 || progress >= 1
                ? 0
                : progress < 0.12
                ? progress / 0.12
                : progress > 0.88
                ? (1 - progress) / 0.12
                : 1;

        const centerOffset = (progress - 0.5) * 2;
        const move = centerOffset * 1.6 * activeStrength * speedFactor * delta;

        baseX.set(baseX.get() + direction * move);
    });

    const wrappedX = useTransform(baseX, (v) => `${wrap(-33.333, 0, v)}%`);

    // Mobile: CSS animation only
    if (isMobile) {
        return (
            <div
                className={`flex w-max gap-3 ${
                    direction === 1 ? "mobile-marquee-left" : "mobile-marquee-right"
                }`}
                style={{
                    willChange: "transform",
                    transform: "translateZ(0)",
                }}
            >
                {images.map((src, i) => (
                    <GalleryCard
                        key={`${src}-${i}`}
                        src={src}
                        alt={`Gallery image ${i + 1}`}
                        isMobile={isMobile}
                    />
                ))}
            </div>
        );
    }

    // Desktop: Framer motion
    return (
        <motion.div
            style={{
                x: wrappedX,
                willChange: "transform",
                transform: "translateZ(0)",
            }}
            className="flex w-max gap-3 sm:gap-4 md:gap-5"
        >
            {images.map((src, i) => (
                <GalleryCard
                    key={`${src}-${i}`}
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    isMobile={isMobile}
                />
            ))}
        </motion.div>
    );
}

export default function GallerySection() {
    const sectionRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");

        const handleChange = (e) => setIsMobile(e.matches);

        setIsMobile(mediaQuery.matches);

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        } else {
            mediaQuery.addListener(handleChange);
            return () => mediaQuery.removeListener(handleChange);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const sectionLift = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        isMobile ? [0, 0, 0] : [30, 0, -40]
    );

    const rowTopY = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        isMobile ? [0, 0, 0] : [20, 0, -24]
    );

    const rowBottomY = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        isMobile ? [0, 0, 0] : [30, 6, -18]
    );

    return (
        <>
            <style>{`
                @media (max-width: 767px) {
                    .mobile-marquee-left {
                        animation: marqueeLeft 18s linear infinite;
                    }

                    .mobile-marquee-right {
                        animation: marqueeRight 18s linear infinite;
                    }

                    @keyframes marqueeLeft {
                        from {
                            transform: translate3d(0, 0, 0);
                        }
                        to {
                            transform: translate3d(-50%, 0, 0);
                        }
                    }

                    @keyframes marqueeRight {
                        from {
                            transform: translate3d(-50%, 0, 0);
                        }
                        to {
                            transform: translate3d(0, 0, 0);
                        }
                    }
                }
            `}</style>

            <section
                ref={sectionRef}
                className="relative overflow-hidden bg-[#0f0f0d] py-12 text-[#f5f1eb] sm:py-20 md:py-32"
            >
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[-10%] top-[8%] hidden h-72 w-72 rounded-full bg-[#b38a5a]/10 blur-3xl md:block" />
                    <div className="absolute bottom-[6%] right-[-6%] hidden h-80 w-80 rounded-full bg-white/5 blur-3xl md:block" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_35%)]" />
                </div>

                <motion.div style={{ y: sectionLift }} className="relative z-10">
                    <div className="space-y-4 sm:space-y-5 md:space-y-10">
                        <motion.div
                            style={{ y: rowTopY }}
                            className="overflow-hidden pl-4 sm:pl-6 md:pl-10"
                        >
                            <InfiniteScrollRow
                                images={isMobile ? topMobileTrack : topTrack}
                                direction={1}
                                sectionProgress={scrollYProgress}
                                speedFactor={0.02}
                                isMobile={isMobile}
                            />
                        </motion.div>

                        <motion.div
                            style={{ y: rowBottomY }}
                            className="overflow-hidden pl-4 sm:pl-6 md:pl-10"
                        >
                            <InfiniteScrollRow
                                images={isMobile ? bottomMobileTrack : bottomTrack}
                                direction={-1}
                                sectionProgress={scrollYProgress}
                                speedFactor={0.02}
                                isMobile={isMobile}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </>
    );
}