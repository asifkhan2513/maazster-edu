import Navbar from "@/app/navbar/page";
// import Footer from "@/app/footer/page";

export const metadata = {
    title: "Terms & Conditions - Maazster Edu",
    description: "Terms and conditions for Maazster Edu platform",
};

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="pt-24 pb-12">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                        Terms & Conditions
                    </h1>

                    <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                By accessing and using Maazster Edu platform, you accept and agree to be bound by the terms
                                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Course Enrollment & Payment</h2>
                            <p className="text-gray-600 leading-relaxed mb-3">
                                All course fees must be paid in full before accessing course materials. We accept various payment methods
                                including credit cards, debit cards, and online banking.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Course fees are non-refundable after 7 days of enrollment</li>
                                <li>Students must complete courses within the specified duration</li>
                                <li>Certificate will be provided upon successful completion</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Student Responsibilities</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Maintain respectful behavior during live sessions</li>
                                <li>Complete assignments and projects on time</li>
                                <li>Attend minimum 80% of live classes for certification</li>
                                <li>Provide accurate information during registration</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
                            <p className="text-gray-600 leading-relaxed">
                                All course materials, including videos, documents, and code examples, are the intellectual property
                                of Maazster Edu. Students may use materials for personal learning but cannot redistribute or sell them.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Job Placement Assistance</h2>
                            <p className="text-gray-600 leading-relaxed">
                                While we provide job placement assistance, we cannot guarantee employment. Job placement depends on
                                individual performance, market conditions, and company requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Maazster Edu shall not be liable for any indirect, incidental, special, consequential, or punitive
                                damages resulting from your use of our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Information</h2>
                            <p className="text-gray-600 leading-relaxed">
                                For any questions regarding these terms, please contact us at:
                                <br />
                                Email: info@maazsteredu.com
                                <br />
                                Phone: +91 
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default TermsAndConditions;