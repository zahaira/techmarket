"use client";

import React from "react";
import { FiTruck, FiRefreshCw, FiHeadphones, FiAward } from "react-icons/fi";
import { useTranslations } from "next-intl";

const CustomerBenefitsSection = () => {
  const t = useTranslations("benefits");

  const benefits = [
    {
      title: t("expertise_title"),
      subtitle: t("expertise_subtitle"),
      icon: <FiAward className="w-8 h-8 text-primary-main" />,
    },
    {
      title: t("delivery_title"),
      subtitle: t("delivery_subtitle"),
      icon: <FiTruck className="w-8 h-8 text-primary-main" />,
    },
    {
      title: t("support_title"),
      subtitle: t("support_subtitle"),
      icon: <FiHeadphones className="w-8 h-8 text-primary-main" />,
    },
    {
      title: t("refund_title"),
      subtitle: t("refund_subtitle"),
      icon: <FiRefreshCw className="w-8 h-8 text-primary-main" />,
    },
  ];

  return (
    <section className="bg-white py-10 rounded-xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm">
              {benefit.icon}
            </div>
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
