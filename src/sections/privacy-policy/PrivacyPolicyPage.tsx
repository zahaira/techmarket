"use client";
import { useState } from "react";
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Cookie, 
  UserCheck, 
  Bell, 
  FileText, 
  ChevronDown,
  Check,
  AlertCircle
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacy");
  const [openSection, setOpenSection] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section avec design ondulé */}
      <div className="relative bg-gradient-to-br from-primary-dark via-primary-main to-primary-dark overflow-hidden">
        {/* Formes décoratives */}
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 w-full h-24 text-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,64 C360,90 720,30 1440,64 L1440,120 L0,120 Z"></path>
          </svg>
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-22">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              {t("title")}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              {t("subtitle")}
            </p>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <FileText className="w-5 h-5" />
              <span className="text-sm">{t("lastUpdated")}: {t("updateDate")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Summary Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <QuickCard
            icon={<Lock className="w-6 h-6" />}
            title={t("quickSummary.secure.title")}
            description={t("quickSummary.secure.desc")}
            color="bg-blue-500"
          />
          <QuickCard
            icon={<Eye className="w-6 h-6" />}
            title={t("quickSummary.transparent.title")}
            description={t("quickSummary.transparent.desc")}
            color="bg-purple-500"
          />
          <QuickCard
            icon={<UserCheck className="w-6 h-6" />}
            title={t("quickSummary.control.title")}
            description={t("quickSummary.control.desc")}
            color="bg-pink-500"
          />
        </div>
      </div>

      {/* Main Content - Accordion Style */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="space-y-4">
          {/* Section 1: Information Collection */}
          <AccordionSection
            icon={<Database className="w-5 h-5" />}
            title={t("sections.collection.title")}
            isOpen={openSection === 0}
            onClick={() => toggleSection(0)}
          >
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                {t("sections.collection.intro")}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <DataTypeCard
                  title={t("sections.collection.personal.title")}
                  items={[
                    t("sections.collection.personal.item1"),
                    t("sections.collection.personal.item2"),
                    t("sections.collection.personal.item3"),
                    t("sections.collection.personal.item4")
                  ]}
                />
                <DataTypeCard
                  title={t("sections.collection.automatic.title")}
                  items={[
                    t("sections.collection.automatic.item1"),
                    t("sections.collection.automatic.item2"),
                    t("sections.collection.automatic.item3"),
                    t("sections.collection.automatic.item4")
                  ]}
                />
              </div>
            </div>
          </AccordionSection>

          {/* Section 2: How We Use Data */}
          <AccordionSection
            icon={<Eye className="w-5 h-5" />}
            title={t("sections.usage.title")}
            isOpen={openSection === 1}
            onClick={() => toggleSection(1)}
          >
            <div className="space-y-3">
              <p className="text-gray-600 leading-relaxed mb-4">
                {t("sections.usage.intro")}
              </p>
              <UsageItem>{t("sections.usage.item1")}</UsageItem>
              <UsageItem>{t("sections.usage.item2")}</UsageItem>
              <UsageItem>{t("sections.usage.item3")}</UsageItem>
              <UsageItem>{t("sections.usage.item4")}</UsageItem>
              <UsageItem>{t("sections.usage.item5")}</UsageItem>
              <UsageItem>{t("sections.usage.item6")}</UsageItem>
            </div>
          </AccordionSection>

          {/* Section 3: Data Sharing */}
          <AccordionSection
            icon={<UserCheck className="w-5 h-5" />}
            title={t("sections.sharing.title")}
            isOpen={openSection === 2}
            onClick={() => toggleSection(2)}
          >
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                {t("sections.sharing.intro")}
              </p>
              <div className="space-y-3">
                <SharingCard
                  title={t("sections.sharing.partners.title")}
                  description={t("sections.sharing.partners.desc")}
                />
                <SharingCard
                  title={t("sections.sharing.legal.title")}
                  description={t("sections.sharing.legal.desc")}
                />
                <SharingCard
                  title={t("sections.sharing.business.title")}
                  description={t("sections.sharing.business.desc")}
                />
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800">
                    {t("sections.sharing.noSell")}
                  </p>
                </div>
              </div>
            </div>
          </AccordionSection>

          {/* Section 4: Cookies */}
          <AccordionSection
            icon={<Cookie className="w-5 h-5" />}
            title={t("sections.cookies.title")}
            isOpen={openSection === 3}
            onClick={() => toggleSection(3)}
          >
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                {t("sections.cookies.intro")}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <CookieTypeCard
                  type={t("sections.cookies.essential.title")}
                  description={t("sections.cookies.essential.desc")}
                  required
                />
                <CookieTypeCard
                  type={t("sections.cookies.analytics.title")}
                  description={t("sections.cookies.analytics.desc")}
                />
                <CookieTypeCard
                  type={t("sections.cookies.marketing.title")}
                  description={t("sections.cookies.marketing.desc")}
                />
                <CookieTypeCard
                  type={t("sections.cookies.preferences.title")}
                  description={t("sections.cookies.preferences.desc")}
                />
              </div>
            </div>
          </AccordionSection>

          {/* Section 5: Your Rights */}
          <AccordionSection
            icon={<Shield className="w-5 h-5" />}
            title={t("sections.rights.title")}
            isOpen={openSection === 4}
            onClick={() => toggleSection(4)}
          >
            <div className="space-y-3">
              <p className="text-gray-600 leading-relaxed mb-4">
                {t("sections.rights.intro")}
              </p>
              <RightCard
                icon={<Eye />}
                title={t("sections.rights.access.title")}
                description={t("sections.rights.access.desc")}
              />
              <RightCard
                icon={<FileText />}
                title={t("sections.rights.rectify.title")}
                description={t("sections.rights.rectify.desc")}
              />
              <RightCard
                icon={<Lock />}
                title={t("sections.rights.delete.title")}
                description={t("sections.rights.delete.desc")}
              />
              <RightCard
                icon={<Bell />}
                title={t("sections.rights.object.title")}
                description={t("sections.rights.object.desc")}
              />
            </div>
          </AccordionSection>

          {/* Section 6: Security */}
          <AccordionSection
            icon={<Lock className="w-5 h-5" />}
            title={t("sections.security.title")}
            isOpen={openSection === 5}
            onClick={() => toggleSection(5)}
          >
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                {t("sections.security.intro")}
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <SecurityBadge
                  icon={<Shield />}
                  text={t("sections.security.encryption")}
                />
                <SecurityBadge
                  icon={<Lock />}
                  text={t("sections.security.secure")}
                />
                <SecurityBadge
                  icon={<Database />}
                  text={t("sections.security.backup")}
                />
              </div>
            </div>
          </AccordionSection>
        </div>
      </div>
    </div>
  );
}

/* Components */
interface QuickCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

function QuickCard({ icon, title, description, color }: QuickCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className={`inline-flex items-center justify-center w-12 h-12 ${color} rounded-xl mb-4 text-white`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

interface AccordionSectionProps {
  icon: React.ReactNode;
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function AccordionSection({ icon, title, isOpen, onClick, children }: AccordionSectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl ${isOpen ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'} transition-colors`}>
            {icon}
          </div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>
        <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 pt-0">
          {children}
        </div>
      </div>
    </div>
  );
}

interface DataTypeCardProps {
  title: string;
  items: string[];
}

function DataTypeCard({ title, items }: DataTypeCardProps) {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 border border-indigo-100">
      <h4 className="font-bold text-gray-800 mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
            <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface UsageItemProps {
  children: React.ReactNode;
}

function UsageItem({ children }: UsageItemProps) {
  return (
    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
        <Check className="w-4 h-4 text-indigo-600" />
      </div>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}

interface SharingCardProps {
  title: string;
  description: string;
}

function SharingCard({ title, description }: SharingCardProps) {
  return (
    <div className="border-l-4 border-indigo-500 bg-indigo-50 p-4 rounded-r-lg">
      <h5 className="font-semibold text-gray-800 mb-1">{title}</h5>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

interface CookieTypeCardProps {
  type: string;
  description: string;
  required?: boolean;
}

function CookieTypeCard({ type, description, required }: CookieTypeCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-indigo-300 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <h5 className="font-semibold text-gray-800">{type}</h5>
        {required && (
          <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full font-medium">
            Required
          </span>
        )}
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

interface RightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function RightCard({ icon, title, description }: RightCardProps) {
  return (
    <div className="flex gap-4 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 hover:shadow-md transition-all">
      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
        {icon}
      </div>
      <div>
        <h5 className="font-semibold text-gray-800 mb-1">{title}</h5>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

interface SecurityBadgeProps {
  icon: React.ReactNode;
  text: string;
}

function SecurityBadge({ icon, text }: SecurityBadgeProps) {
  return (
    <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
        {icon}
      </div>
      <p className="text-sm font-medium text-gray-700">{text}</p>
    </div>
  );
}