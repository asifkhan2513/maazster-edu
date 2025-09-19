'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = ({ onComplete }) => {
    const loaderRef = useRef(null);
    const progressRef = useRef(null);
    const textRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(() => {
                    onComplete();
                }, 200);
            }
        });

        // Initial setup
        gsap.set([progressRef.current, textRef.current, logoRef.current], {
            opacity: 0,
            y: 30
        });

        // Faster animation sequence
        tl.to([logoRef.current, textRef.current], {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out"
        })
            .to(progressRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: "power3.out"
            }, "-=0.2")
            .to(progressRef.current, {
                width: "100%",
                duration: 1,
                ease: "power2.inOut"
            })
            .to([logoRef.current, textRef.current, progressRef.current], {
                opacity: 0,
                y: -20,
                duration: 0.4,
                stagger: 0.05,
                ease: "power3.in"
            }, "+=0.1")
            .to(loaderRef.current, {
                y: "-100%",
                duration: 0.5,
                ease: "power3.inOut"
            }, "-=0.1");

    }, [onComplete]);

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 z-50 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center"
        >
            <div className="text-center">
                {/* Logo/Brand */}
                <div ref={logoRef} className="mb-6">
                    <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-full flex items-center justify-center shadow-2xl">
                        <span className="text-xl font-bold text-orange-500">ME</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Maazster Edu
                    </h1>
                </div>

                {/* Loading Text */}
                <div ref={textRef} className="mb-6">
                    <p className="text-white text-base md:text-lg font-medium">
                        Loading Amazing Experience...
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="w-48 md:w-64 mx-auto">
                    <div className="h-1 bg-white bg-opacity-30 rounded-full overflow-hidden">
                        <div
                            ref={progressRef}
                            className="h-full bg-white rounded-full w-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;