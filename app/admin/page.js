"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from "@/app/components/Navbar";

const AdminDashboard = () => {
    const router = useRouter();

    const handleLogout = () => {
        // Remove authentication cookie
        document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <div className="flex justify-between items-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-800">
                                Admin Dashboard
                            </h1>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                            >
                                Logout
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-blue-100 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                                    Total Students
                                </h3>
                                <p className="text-3xl font-bold text-blue-600">1,234</p>
                            </div>

                            <div className="bg-green-100 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-green-800 mb-2">
                                    Active Courses
                                </h3>
                                <p className="text-3xl font-bold text-green-600">15</p>
                            </div>

                            <div className="bg-orange-100 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-orange-800 mb-2">
                                    Projects Completed
                                </h3>
                                <p className="text-3xl font-bold text-orange-600">89</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Protected Content
                            </h2>
                            <p className="text-gray-600">
                                This is a protected admin area. Only authenticated users can access this content.
                                The middleware automatically redirects unauthorized users to the login page.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;