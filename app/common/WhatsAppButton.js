"use client";
import React from 'react';
import Image from 'next/image';
import whatsappIcon from './icons8-whatsapp.svg';

const WhatsAppButton = () => {
    const phoneNumber = "+919214588441";
    const message = "Hello! I'm interested in learning more about your courses.";

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
            <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse"
                aria-label="Contact us on WhatsApp"
            >
                <Image
                    src={whatsappIcon}
                    alt="WhatsApp"
                    width={32}
                    height={32}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                />
            </button>
        </div>
    );
};

export default WhatsAppButton;