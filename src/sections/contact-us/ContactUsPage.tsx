import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactUsPage() {
  const t = useTranslations("contact");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#D00000] to-[#9D0208] text-white py-16 md:py-20">
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
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t("form.title")}
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D00000] focus:border-transparent outline-none transition-all"
                  placeholder={t("form.namePlaceholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D00000] focus:border-transparent outline-none transition-all"
                  placeholder={t("form.emailPlaceholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("form.subject")}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D00000] focus:border-transparent outline-none transition-all"
                  placeholder={t("form.subjectPlaceholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("form.message")}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D00000] focus:border-transparent outline-none transition-all resize-none"
                  placeholder={t("form.messagePlaceholder")}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D00000] to-[#9D0208] text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t("form.submit")}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t("info.title")}
            </h2>

            <div className="space-y-6 mb-8">
              <ContactInfoCard
                icon={<Mail className="w-6 h-6" />}
                title={t("info.email.title")}
                content={t("info.email.value")}
                href={`mailto:${t("info.email.value")}`}
              />
              <ContactInfoCard
                icon={<Phone className="w-6 h-6" />}
                title={t("info.phone.title")}
                content={t("info.phone.value")}
                href={`tel:${t("info.phone.value")}`}
              />
              <ContactInfoCard
                icon={<MapPin className="w-6 h-6" />}
                title={t("info.address.title")}
                content={t("info.address.value")}
              />
              <ContactInfoCard
                icon={<Clock className="w-6 h-6" />}
                title={t("info.hours.title")}
                content={t("info.hours.value")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Components */
interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}

function ContactInfoCard({ icon, title, content, href }: ContactInfoCardProps) {
  const CardContent = () => (
    <div className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:border-[#D00000] transition-colors">
      <div className="w-12 h-12 bg-[#D00000]/10 rounded-xl flex items-center justify-center text-[#D00000] flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
}