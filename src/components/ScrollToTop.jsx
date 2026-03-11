import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const lenis = useLenis();

    useLayoutEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        // native reset
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // lenis reset
        if (lenis) {
            lenis.scrollTo(0, {
                immediate: true,
                force: true,
            });
        }

        const t1 = setTimeout(() => {
            window.scrollTo(0, 0);
            if (lenis) {
                lenis.scrollTo(0, {
                    immediate: true,
                    force: true,
                });
            }
        }, 0);

        const t2 = setTimeout(() => {
            window.scrollTo(0, 0);
            if (lenis) {
                lenis.scrollTo(0, {
                    immediate: true,
                    force: true,
                });
            }
        }, 100);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [pathname, lenis]);

    return null;
}