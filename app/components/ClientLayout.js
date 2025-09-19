'use client';

import { useState, useEffect } from 'react';
import Loader from './Loader';

const ClientLayout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Ensure all resources are loaded
        const handleLoad = () => {
            setIsLoading(false);
        };

        if (document.readyState === 'complete') {
            setTimeout(() => setIsLoading(false), 1500);
        } else {
            window.addEventListener('load', handleLoad);
            // Fallback timeout
            setTimeout(() => setIsLoading(false), 3000);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <>
            {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
            <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                {children}
            </div>
        </>
    );
};

export default ClientLayout;