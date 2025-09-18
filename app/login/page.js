"use client";
import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from "@/app/navbar/page";

const LoginForm = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get('redirect') || '/';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Simple authentication logic (replace with your actual auth system)
            if (credentials.username === 'admin' && credentials.password === 'password') {
                // Set authentication cookie/token
                document.cookie = 'auth-token=authenticated; path=/; max-age=86400'; // 24 hours

                // Redirect to the intended page
                router.push(redirectTo);
            } else {
                setError('Invalid credentials. Use admin/password for demo.');
            }
        } catch (err) {
            setError('Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="pt-24 pb-16">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                        Login Required
                    </h2>

                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={credentials.username}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                                placeholder="Enter username"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                                placeholder="Enter password"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Demo credentials: <br />
                            Username: <span className="font-mono bg-gray-100 px-2 py-1 rounded">admin</span><br />
                            Password: <span className="font-mono bg-gray-100 px-2 py-1 rounded">password</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Login = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
        </Suspense>
    );
};

export default Login;