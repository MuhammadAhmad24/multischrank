import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    useAnimationFrame,
    useMotionValue,
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

// seamless loop feel
const topTrack = [...topRow, ...topRow, ...topRow];
const bottomTrack = [...bottomRow, ...bottomRow, ...bottomRow];

function wrap(min, max, v) {
    const range = max - min;
    return ((((v - min) % range) + range) % range) + min;
}

function GalleryCard({ src, alt }) {
    return (
        <div className="relative h-60 w-[320px] shrink-0 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 md:h-75 md:w-105 xl:h-85 xl:w-125">
            <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent" />
        </div>
    );
}

function InfiniteScrollRow({
    images,
    direction = 1,
    sectionProgress,
    speedFactor = 0.018,
}) {
    const { scrollY } = useScroll();
    const velocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(velocity, {
        stiffness: 90,
        damping: 30,
        mass: 0.6,
    });

    const moveBy = useTransform(smoothVelocity, [-3000, 0, 3000], [-2.2, 0, 2.2]);
    const baseX = useMotionValue(0);

    useAnimationFrame((_, delta) => {
        const velocityValue = moveBy.get();
        const progressActive = sectionProgress.get();
        const activeStrength =
            progressActive <= 0 || progressActive >= 1
                ? 0
                : progressActive < 0.12
                ? progressActive / 0.12
                : progressActive > 0.88
                ? (1 - progressActive) / 0.12
                : 1;

        const next =
            baseX.get() +
            direction * velocityValue * activeStrength * speedFactor * delta;

        baseX.set(next);
    });

    // duplicated track ke liye -33.333 se 0 tak wrap
    const wrappedX = useTransform(baseX, (v) => `${wrap(-33.333, 0, v)}%`);

    return (
        <motion.div
            style={{ x: wrappedX }}
            className="flex w-max gap-4 md:gap-5"
        >
            {images.map((src, i) => (
                <GalleryCard
                    key={`${src}-${i}`}
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                />
            ))}
        </motion.div>
    );
}

export default function GallerySection() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const introOpacity = useTransform(
        scrollYProgress,
        [0.02, 0.12, 0.88, 1],
        [0, 1, 1, 0]
    );

    const introY = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [40, 0, -10, -40]
    );

    const sectionLift = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [50, 0, -60]
    );

    const rowTopY = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [30, 0, -40]
    );

    const rowBottomY = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [50, 8, -28]
    );

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#0f0f0d] py-12 sm:py-20 text-[#f5f1eb] md:py-32"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-10%] top-[8%] h-72 w-72 rounded-full bg-[#b38a5a]/10 blur-3xl" />
                <div className="absolute bottom-[6%] right-[-6%] h-80 w-80 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
            </div>

            <motion.div
                style={{ y: sectionLift }}
                className="relative z-10"
            >
                <div className="space-y-5 md:space-y-10">
                    <motion.div style={{ y: rowTopY }} className="overflow-hidden pl-6 md:pl-10">
                        <InfiniteScrollRow
                            images={topTrack}
                            direction={1}
                            sectionProgress={scrollYProgress}
                            speedFactor={0.02}
                        />
                    </motion.div>

                    <motion.div style={{ y: rowBottomY }} className="overflow-hidden pl-6 md:pl-10">
                        <InfiniteScrollRow
                            images={bottomTrack}
                            direction={-1}
                            sectionProgress={scrollYProgress}
                            speedFactor={0.02}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}