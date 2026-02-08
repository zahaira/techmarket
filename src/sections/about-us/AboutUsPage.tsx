import { Heart, Shield, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutUsPage() {
  const t = useTranslations("about");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#D00000] to-[#9D0208] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Story */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {t("story.title")}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            {t("story.text")}
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ValueCard
            icon={<Heart className="w-8 h-8" />}
            title={t("values.quality.title")}
            description={t("values.quality.desc")}
          />
          <ValueCard
            icon={<Shield className="w-8 h-8" />}
            title={t("values.trust.title")}
            description={t("values.trust.desc")}
          />
          <ValueCard
            icon={<Sparkles className="w-8 h-8" />}
            title={t("values.service.title")}
            description={t("values.service.desc")}
          />
        </div>

        {/* Stats */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#D00000] mb-2">
                {t("stats.years")}
              </div>
              <div className="text-sm text-gray-600">{t("stats.yearsLabel")}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#D00000] mb-2">
                {t("stats.customers")}
              </div>
              <div className="text-sm text-gray-600">{t("stats.customersLabel")}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#D00000] mb-2">
                {t("stats.products")}
              </div>
              <div className="text-sm text-gray-600">{t("stats.productsLabel")}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#D00000] mb-2">
                {t("stats.satisfaction")}
              </div>
              <div className="text-sm text-gray-600">{t("stats.satisfactionLabel")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Components */
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-[#D00000]/10 rounded-2xl flex items-center justify-center text-[#D00000] mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}