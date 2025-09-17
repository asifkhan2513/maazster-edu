import Navbar from "@/app/navbar/page";
import Footer from "@/app/footer/page";

export const metadata = {
    title: "Privacy Policy - Maazster Edu",
    description: "Privacy policy for Maazster Edu platform",
};

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="pt-24 pb-12">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                        Privacy Policy
                    </h1>

                    <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
                            <p className="text-gray-600 leading-relaxed mb-3">
                                We collect information you provide directly to us, such as when you create an account,
                                enroll in courses, or contact us for support.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Personal information (name, email, phone number)</li>
                                <li>Educational background and career goals</li>
                                <li>Payment information (processed securely)</li>
                                <li>Course progress and performance data</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Provide and improve our educational services</li>
                                <li>Process payments and send course materials</li>
                                <li>Communicate about courses, updates, and promotions</li>
                                <li>Provide job placement assistance</li>
                                <li>Analyze usage patterns to enhance user experience</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
                            <p className="text-gray-600 leading-relaxed mb-3">
                                We do not sell, trade, or rent your personal information to third parties. We may share
                                information in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>With your consent for job placement opportunities</li>
                                <li>To comply with legal obligations</li>
                                <li>With service providers who assist in our operations</li>
                                <li>In case of business transfer or merger</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We implement appropriate security measures to protect your personal information against
                                unauthorized access, alteration, disclosure, or destruction. This includes encryption,
                                secure servers, and regular security audits.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookies and Tracking</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We use cookies and similar technologies to enhance your experience, analyze usage patterns,
                                and provide personalized content. You can control cookie settings through your browser.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Access and update your personal information</li>
                                <li>Request deletion of your data</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Request data portability</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If you have questions about this Privacy Policy, please contact us at:
                                <br />
                                Email: privacy@maazsteredu.com
                                <br />
                                Phone: +91 9876543210
                                <br />
                                Address: 123 Tech Hub, Innovation Street, Bangalore, Karnataka 560001
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Updates to This Policy</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes
                                by posting the new policy on this page and updating the "Last Updated" date.
                            </p>
                            <p className="text-sm text-gray-500 mt-4">Last Updated: January 2025</p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;