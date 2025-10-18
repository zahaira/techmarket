"use client";

import React from "react";
import { FiTruck, FiRefreshCw, FiHeadphones, FiAward } from "react-icons/fi";

interface Benefit {
  title: string;
  subtitle: string;
  icon: React.ReactElement;
}

const benefits: Benefit[] = [
  {
    title: "15 Years of Expertise",
    subtitle: "At your service",
    icon: <FiAward className="w-8 h-8 text-primary-main" />,
  },
  {
    title: "Home Delivery",
    subtitle: "Available in Morocco",
    icon: <FiTruck className="w-8 h-8 text-primary-main" />,
  },
  {
    title: "Customer Support 24/7",
    subtitle: "In-store and online",
    icon: <FiHeadphones className="w-8 h-8 text-primary-main" />,
  },
  {
    title: "Returns & Refunds",
    subtitle: "17 days to change your mind",
    icon: <FiRefreshCw className="w-8 h-8 text-primary-main" />,
  },
];

const CustomerBenefitsSection = () => {
  return (
    <section className="bg-white py-10 rounded-xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm">
              {benefit.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600">{benefit.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerBenefitsSection;
