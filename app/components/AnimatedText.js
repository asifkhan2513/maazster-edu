'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const AnimatedText = ({
    children,
    className = '',
    delay = 0,
    duration = 1,
    animationType = 'fadeUp',
    triggerOnce = true
}) => {
    const textRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const element = textRef.current;
        if (!element) return;

        // Split text into words and characters for advanced animations
        const text = element.textContent;
        const words = text.split(' ');

        // Clear original text and create spans for each word
        element.innerHTML = '';
        words.forEach((word, index) => {
            const wordSpan = document.createElement('span');
            wordSpan.style.display = 'inline-block';
            wordSpan.style.overflow = 'hidden';

            const chars = word.split('');
            chars.forEach(char => {
                const charSpan = document.createElement('span');
                charSpan.textContent = char === ' ' ? '\u00A0' : char;
                charSpan.style.display = 'inline-block';
                wordSpan.appendChild(charSpan);
            });

            element.appendChild(wordSpan);

            // Add space between words
            if (index < words.length - 1) {
                const space = document.createElement('span');
                space.innerHTML = '&nbsp;';
                space.style.display = 'inline-block';
                element.appendChild(space);
            }
        });

        const chars = element.querySelectorAll('span span');

        // Set initial state based on animation type
        let initialState = {};
        let animateState = {};

        switch (animationType) {
            case 'fadeUp':
                initialState = { opacity: 0, y: 50 };
                animateState = { opacity: 1, y: 0 };
                break;
            case 'fadeDown':
                initialState = { opacity: 0, y: -50 };
                animateState = { opacity: 1, y: 0 };
                break;
            case 'fadeLeft':
                initialState = { opacity: 0, x: -50 };
                animateState = { opacity: 1, x: 0 };
                break;
            case 'fadeRight':
                initialState = { opacity: 0, x: 50 };
                animateState = { opacity: 1, x: 0 };
                break;
            case 'scale':
                initialState = { opacity: 0, scale: 0.5 };
                animateState = { opacity: 1, scale: 1 };
                break;
            case 'reveal':
                initialState = { y: '100%' };
                animateState = { y: '0%' };
                break;
            default:
                initialState = { opacity: 0, y: 30 };
                animateState = { opacity: 1, y: 0 };
        }

        gsap.set(chars, initialState);

        const animation = gsap.to(chars, {
            ...animateState,
            duration: duration,
            stagger: 0.02,
            ease: 'power3.out',
            delay: delay,
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: triggerOnce ? 'play none none none' : 'play none none reverse',
            }
        });

        return () => {
            if (animation) animation.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [delay, duration, animationType, triggerOnce]);

    return (
        <div ref={textRef} className={className}>
            {children}
        </div>
    );
};

export default AnimatedText;