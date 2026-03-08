import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PremiumPreloader({ onFinish }) {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);
    const hasStarted = useRef(false);

    useEffect(() => {
        if (hasStarted.current) return;
        hasStarted.current = true;

        let value = 0;

        const interval = setInterval(() => {
            const remaining = 100 - value;

            if (remaining > 35) {
                value += 6;
            } else if (remaining > 15) {
                value += 4;
            } else if (remaining > 5) {
                value += 2;
            } else {
                value += 1;
            }

            if (value >= 100) {
                value = 100;
                setProgress(100);
                clearInterval(interval);

                requestAnimationFrame(() => {
                    setIsComplete(true);
                });

                setTimeout(() => {
                    setShouldRender(false);
                    onFinish?.();
                }, 120);
            } else {
                setProgress(value);
            }
        }, 90);

        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <AnimatePresence>
            {shouldRender && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-neutral-950 text-white"
                >
                    <div className="pointer-events-none absolute inset-0">
                        <motion.div
                            animate={{
                                scale: isComplete ? 1.08 : 1,
                                opacity: isComplete ? 0.04 : 0.1,
                            }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute left-1/2 top-1/2 h-112 w-md -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-3xl"
                        />
                        <div className="absolute left-[15%] top-[20%] h-40 w-40 rounded-full bg-white/5 blur-3xl" />
                        <div className="absolute bottom-[15%] right-[10%] h-52 w-52 rounded-full bg-white/5 blur-3xl" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={
                            isComplete
                                ? {
                                    opacity: 0,
                                    y: -12,
                                    scale: 0.985,
                                    filter: "blur(6px)",
                                }
                                : {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    filter: "blur(0px)",
                                }
                        }
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 flex w-full max-w-xl flex-col items-center px-6"
                    >
                        <motion.div
                            initial={{ scale: 0.94, opacity: 0 }}
                            animate={
                                isComplete
                                    ? { scale: 1.03, opacity: 0 }
                                    : { scale: 1, opacity: 1 }
                            }
                            transition={{ duration: 0.45, delay: isComplete ? 0 : 0.08 }}
                            className="mb-6 flex h-20 w-20 items-center justify-center rounded-[28px] border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-xl"
                        >
                            <span className="text-2xl font-semibold tracking-[0.2em] text-white">
                                M
                            </span>
                        </motion.div>

                        <div className="text-center">
                            <p className="mb-2 text-[11px] uppercase tracking-[0.5em] text-white/40">
                                Premium Interiors
                            </p>
                            <h1 className="text-3xl font-semibold tracking-[0.18em] text-white sm:text-4xl">
                                MultiSchrank
                            </h1>
                        </div>

                        <div className="mt-10 w-full max-w-md">
                            <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.35em] text-white/35">
                                <span>Loading</span>
                                <span>{progress}%</span>
                            </div>

                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ ease: "easeOut", duration: 0.25 }}
                                    className="h-full rounded-full bg-linear-to-r from-white via-amber-200 to-amber-400"
                                />
                            </div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.35, duration: 0.6 }}
                            className="mt-6 text-center text-sm text-white/45"
                        >
                            Crafted spaces. Refined living.
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}   