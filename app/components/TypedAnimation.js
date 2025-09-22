'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedAnimation = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'MERN Full Stack with AI',
                'React & Node.js Development',
                'Python ,  Java',
                'MongoDB & Express.js',
                'Artificial Intelligence',
                'Machine Learning',
                'Full Stack Development',
                'Modern Web Technologies'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1000,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            smartBackspace: true,
        };

        typed.current = new Typed(el.current, options);

        return () => {
            if (typed.current) {
                typed.current.destroy();
            }
        };
    }, []);

    return (
        <span
            ref={el}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-orange-500 mt-2 min-h-[1.5em] sm:min-h-[2em] inline-block"
        />
    );
};

export default TypedAnimation;