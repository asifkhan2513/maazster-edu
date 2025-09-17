import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-orange-500 mb-4">404</h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        Unauthorized Access
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Sorry the page you are looking for doesn&apos;t exist or you don&apos;t have permission to access it.
                    </p>

                </div>

                <div className="space-y-4">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center w-full bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Go Back
                    </button>
                </div>

                <div className="mt-8 text-sm text-gray-500">
                    <p>Need help? <Link href="/contactus" className="text-orange-500 hover:underline">Contact us</Link></p>
                </div>
            </div>
        </div>
    );
}