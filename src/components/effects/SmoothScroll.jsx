"use client";

import { useEffect } from "react";

const SmoothScroll = () => {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll(".scroll-animate");
            elements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                const isVisible =
                    rect.top < window.innerHeight && rect.bottom >= 0;

                if (isVisible) {
                    element.classList.add("animate-fade-in");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return null;
};

export default SmoothScroll;
