"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ReturnsRefundsPage from "@/sections/shipping/ReturnsRefundsPage";
import ShippingPage from "@/sections/shipping/ShippingPage";
import { Truck, RefreshCw } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Page() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"shipping" | "returns">("shipping");
  const t = useTranslations("footer");

  // Read the 'tab' parameter from the URL on load
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "returns" || tabParam === "shipping") {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const handleTabChange = (tab: "shipping" | "returns") => {
    setActiveTab(tab);
    const newUrl = `${window.location.pathname}?tab=${tab}`;
    window.history.pushState({}, "", newUrl);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs Navigation */}
        <div className="bg-white rounded-2xl shadow-xl p-2 mb-8 border border-gray-100">
          <div className="grid grid-cols-2 gap-2">
            <TabButton
              active={activeTab === "shipping"}
              onClick={() => handleTabChange("shipping")}
              icon={<Truck className="w-5 h-5" />}
              label={t("shipping")}
            />
            <TabButton
              active={activeTab === "returns"}
              onClick={() => handleTabChange("returns")}
              icon={<RefreshCw className="w-5 h-5" />}
              label={t("shipping_returns")}
            />
          </div>
        </div>

        {/* Tab Content */}
        <div className="pb-8">
          <div
            className={`transition-opacity duration-500 ${
              activeTab === "shipping" ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <ShippingPage />
          </div>
          <div
            className={`transition-opacity duration-500 ${
              activeTab === "returns" ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <ReturnsRefundsPage />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Tab Button Component */
interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

function TabButton({ active, onClick, icon, label }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-semibold
        transition-all duration-300 overflow-hidden group
        ${
          active
            ? "text-white shadow-lg"
            : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
        }
      `}
    >
      {/* Animated Background */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-r from-[#D00000] to-[#9D0208]
          transition-all duration-300 rounded-xl
          ${active ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      />

      {/* Hover Effect for Inactive Tab */}
      {!active && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#D00000]/5 to-[#9D0208]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        <span className="text-sm md:text-base">{label}</span>
      </span>
    </button>
  );
}