"use client"; // Ensure it's a client component

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const VantaBackground = () => {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);

    useEffect(() => {
        // Load Vanta.js dynamically
        import("vanta/dist/vanta.birds.min").then((VANTA) => {
            if (!vantaEffect) {
                setVantaEffect(
                    VANTA.default({
                        el: vantaRef.current,
                        THREE: THREE, // Required for Vanta.js
                        color1: 0xff4500, // Orange
                        color2: 0xffffff, // White
                        backgroundColor: 0x000000, // Black
                        birdSize: 1.5,
                        wingSpan: 25,
                        separation: 50,
                        alignment: 30,
                        cohesion: 20
                    })
                );
            }
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default VantaBackground;
