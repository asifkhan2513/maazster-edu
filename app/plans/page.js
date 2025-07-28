import React from "react";


const plans = [
  {
    name: "Basic",
    price: "₹4999",
    features: ["Access to 1 course", "Email support", "1 Month Validity"],
  },
  {
    name: "Pro",
    price: "₹9999",
    features: ["Access to all courses", "Doubt sessions", "3 Month Validity"],
  },
  {
    name: "Premium",
    price: "₹14999",
    features: ["1:1 Mentorship", "Placement support", "Lifetime Access"],
  },
];

const Plans = () => {
  return (
    <div >
   
      <section id="plans" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="border rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-orange-500 mb-2">
                  {plan.name}
                </h3>
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✔️ {feature}</li>
                  ))}
                </ul>
                <button className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-500">
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
