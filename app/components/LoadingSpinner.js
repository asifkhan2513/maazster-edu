'use client'
import { useEffect, useState } from 'react';

export default function LoadingSpinner() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mb-4"></div>
                <div className="text-lg font-semibold text-gray-700">Loading...</div>
                <div className="w-32 h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}