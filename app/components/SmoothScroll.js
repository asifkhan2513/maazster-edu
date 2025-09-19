'use client';

import { useEffect, useRef } from 'react';

const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null);
    const locomotiveScrollRef = useRef(null);

    useEffect(() => {
        // Disable Locomotive Scroll for now to fix issues
        // Just return children without smooth scroll
        return;

        // Commented out Locomotive Scroll initialization
        /*
        let locomotiveScroll;
    
        const initLocomotiveScroll = async () => {
          try {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            
            if (!scrollRef.current) return;
    
            locomotiveScroll = new LocomotiveScroll({
              el: scrollRef.current,
              smooth: true,
              multiplier: 0.8,
              lerp: 0.1,
              class: 'is-revealed',
              scrollbarClass: 'c-scrollbar',
              scrollingClass: 'has-scroll-scrolling',
              draggingClass: 'has-scroll-dragging',
              smoothClass: 'has-scroll-smooth',
              initClass: 'has-scroll-init',
              getSpeed: false,
              getDirection: false,
              scrollFromAnywhere: true,
              resetNativeScroll: true,
              smartphone: {
                smooth: false
              },
              tablet: {
                smooth: false
              }
            });
    
            locomotiveScrollRef.current = locomotiveScroll;
    
            const handleResize = () => {
              if (locomotiveScroll) {
                setTimeout(() => {
                  locomotiveScroll.update();
                }, 100);
              }
            };
    
            window.addEventListener('resize', handleResize);
            window.addEventListener('load', handleResize);
    
            return () => {
              window.removeEventListener('resize', handleResize);
              window.removeEventListener('load', handleResize);
              if (locomotiveScroll) {
                locomotiveScroll.destroy();
              }
            };
          } catch (error) {
            console.warn('Locomotive Scroll initialization failed:', error);
          }
        };
    
        if (window.innerWidth > 1024) {
          const timer = setTimeout(() => {
            initLocomotiveScroll();
          }, 500);
    
          return () => {
            clearTimeout(timer);
            if (locomotiveScrollRef.current) {
              locomotiveScrollRef.current.destroy();
            }
          };
        }
        */
    }, []);

    return (
        <div ref={scrollRef} className="min-h-screen">
            {children}
        </div>
    );
};

export default SmoothScroll;