'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const AnimatedContainer = ({
    children,
    className = '',
    delay = 0,
    duration = 1,
    animationType = 'fadeUp',
    stagger = 0.1,
    triggerOnce = true
}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const container = containerRef.current;
        if (!container) return;

        const children = container.children;

        // Set initial state based on animation type
        let initialState = {};
        let animateState = {};

        switch (animationType) {
            case 'fadeUp':
                initialState = { opacity: 0, y: 60 };
                animateState = { opacity: 1, y: 0 };
                break;
            case 'fadeDown':
                initialState = { opacity: 0, y: -60 };
                animateState = { opacity: 1, y: 0 };
                break;
            case 'fadeLeft':
                initialState = { opacity: 0, x: -60 };
                animateState = { opacity: 1, x: 0 };
                break;
            case 'fadeRight':
                initialState = { opacity: 0, x: 60 };
                animateState = { opacity: 1, x: 0 };
                break;
            case 'scale':
                initialState = { opacity: 0, scale: 0.8 };
                animateState = { opacity: 1, scale: 1 };
                break;
            case 'rotate':
                initialState = { opacity: 0, rotation: 10, scale: 0.9 };
                animateState = { opacity: 1, rotation: 0, scale: 1 };
                break;
            default:
                initialState = { opacity: 0, y: 40 };
                animateState = { opacity: 1, y: 0 };
        }

        gsap.set(children, initialState);

        const animation = gsap.to(children, {
            ...animateState,
            duration: duration,
            stagger: stagger,
            ease: 'power3.out',
            delay: delay,
            scrollTrigger: {
                trigger: container,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: triggerOnce ? 'play none none none' : 'play none none reverse',
            }
        });

        return () => {
            if (animation) animation.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [delay, duration, animationType, stagger, triggerOnce]);

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
};

export default AnimatedContainer;