import { Package, RefreshCw, CheckCircle, XCircle, Clock, AlertCircle, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ReturnsRefundsPage() {
  const t = useTranslations("returns");

  return (
    <div>
        {/* Hero Header */}
        <div className="relative bg-gradient-to-r from-[#D00000] to-[#9D0208] text-white rounded-2xl shadow-2xl overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative py-12 px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                {t("title")}
              </h1>
              <p className="text-white/90 text-lg max-w-2xl">
                {t("subtitle")}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <RefreshCw className="w-16 h-16 md:w-20 md:h-20" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Policy Overview */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {t("policyOverview.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D00000] to-[#9D0208] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PolicyCard
              icon={<Clock className="w-8 h-8" />}
              title={t("policyOverview.returnWindow.title")}
              color="from-blue-500 to-blue-600"
            >
              {t("policyOverview.returnWindow.desc")}
            </PolicyCard>
            <PolicyCard
              icon={<CheckCircle className="w-8 h-8" />}
              title={t("policyOverview.condition.title")}
              color="from-green-500 to-green-600"
            >
              {t("policyOverview.condition.desc")}
            </PolicyCard>
            <PolicyCard
              icon={<RefreshCw className="w-8 h-8" />}
              title={t("policyOverview.refundTime.title")}
              color="from-purple-500 to-purple-600"
            >
              {t("policyOverview.refundTime.desc")}
            </PolicyCard>
          </div>
        </div>

        {/* Return Process Steps */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {t("returnProcess.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D00000] to-[#9D0208] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            
            <ProcessStep
              icon={<Mail className="w-8 h-8" />}
              title={t("returnProcess.step1.title")}
              number="01"
              color="from-blue-500 to-blue-600"
            >
              {t("returnProcess.step1.desc")}
            </ProcessStep>
            <ProcessStep
              icon={<Package className="w-8 h-8" />}
              title={t("returnProcess.step2.title")}
              number="02"
              color="from-purple-500 to-purple-600"
            >
              {t("returnProcess.step2.desc")}
            </ProcessStep>
            <ProcessStep
              icon={<CheckCircle className="w-8 h-8" />}
              title={t("returnProcess.step3.title")}
              number="03"
              color="from-orange-500 to-orange-600"
            >
              {t("returnProcess.step3.desc")}
            </ProcessStep>
            <ProcessStep
              icon={<RefreshCw className="w-8 h-8" />}
              title={t("returnProcess.step4.title")}
              number="04"
              color="from-green-500 to-green-600"
            >
              {t("returnProcess.step4.desc")}
            </ProcessStep>
          </div>
        </div>

        {/* Conditions Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Eligible Items */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                {t("eligible.title")}
              </h3>
            </div>
            <ul className="space-y-3">
              <EligibleItem>{t("eligible.item1")}</EligibleItem>
              <EligibleItem>{t("eligible.item2")}</EligibleItem>
              <EligibleItem>{t("eligible.item3")}</EligibleItem>
              <EligibleItem>{t("eligible.item4")}</EligibleItem>
            </ul>
          </div>

          {/* Non-Eligible Items */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-xl">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                {t("nonEligible.title")}
              </h3>
            </div>
            <ul className="space-y-3">
              <NonEligibleItem>{t("nonEligible.item1")}</NonEligibleItem>
              <NonEligibleItem>{t("nonEligible.item2")}</NonEligibleItem>
              <NonEligibleItem>{t("nonEligible.item3")}</NonEligibleItem>
              <NonEligibleItem>{t("nonEligible.item4")}</NonEligibleItem>
            </ul>
          </div>
        </div>

        {/* Refund Methods */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-5 border-b border-gray-200">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
              {t("refundMethods.title")}
            </h3>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <RefundMethod
                icon={<RefreshCw className="w-6 h-6" />}
                title={t("refundMethods.original.title")}
                time={t("refundMethods.original.time")}
              >
                {t("refundMethods.original.desc")}
              </RefundMethod>
              <RefundMethod
                icon={<Package className="w-6 h-6" />}
                title={t("refundMethods.exchange.title")}
                time={t("refundMethods.exchange.time")}
              >
                {t("refundMethods.exchange.desc")}
              </RefundMethod>
              <RefundMethod
                icon={<CheckCircle className="w-6 h-6" />}
                title={t("refundMethods.storeCredit.title")}
                time={t("refundMethods.storeCredit.time")}
              >
                {t("refundMethods.storeCredit.desc")}
              </RefundMethod>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-[#D00000] rounded-xl p-8 shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-[#D00000]" />
            <h4 className="text-xl font-bold text-gray-800">
              {t("importantNotes.title")}
            </h4>
          </div>
          <ul className="space-y-3">
            <ImportantNote>{t("importantNotes.note1")}</ImportantNote>
            <ImportantNote>{t("importantNotes.note2")}</ImportantNote>
            <ImportantNote>{t("importantNotes.note3")}</ImportantNote>
            <ImportantNote>{t("importantNotes.note4")}</ImportantNote>
          </ul>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-[#D00000] to-[#9D0208] rounded-2xl shadow-xl p-8 text-white">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {t("support.title")}
            </h3>
            <p className="text-white/90">
              {t("support.subtitle")}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${t("support.email")}`}
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">{t("support.email")}</span>
            </a>
            <a
              href={`tel:${t("support.phone")}`}
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">{t("support.phone")}</span>
            </a>
          </div>
        </div>
    </div>
  );
}

/* Components */
interface PolicyCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  color: string;
}

function PolicyCard({ icon, title, children, color }: PolicyCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-white mb-4 shadow-md`}>
        {icon}
      </div>
      <h4 className="font-bold text-lg text-gray-800 mb-3">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  number: string;
  color: string;
}

function ProcessStep({ icon, title, children, number, color }: ProcessStepProps) {
  return (
    <div className="relative group">
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
        <div className={`absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br ${color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
          {number}
        </div>
        <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
          {icon}
        </div>
        <h4 className="font-bold text-lg text-gray-800 mb-3">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

interface EligibleItemProps {
  children: React.ReactNode;
}

function EligibleItem({ children }: EligibleItemProps) {
  return (
    <li className="flex items-start gap-3 text-gray-700">
      <span className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
        <CheckCircle className="w-4 h-4 text-green-600" />
      </span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

interface NonEligibleItemProps {
  children: React.ReactNode;
}

function NonEligibleItem({ children }: NonEligibleItemProps) {
  return (
    <li className="flex items-start gap-3 text-gray-700">
      <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
        <XCircle className="w-4 h-4 text-red-600" />
      </span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

interface RefundMethodProps {
  icon: React.ReactNode;
  title: string;
  time: string;
  children: React.ReactNode;
}

function RefundMethod({ icon, title, time, children }: RefundMethodProps) {
  return (
    <div className="p-5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200">
      <div className="flex items-center gap-2 text-[#D00000] mb-3">
        {icon}
        <h5 className="font-bold text-gray-800">{title}</h5>
      </div>
      <p className="text-sm text-gray-600 mb-2">{children}</p>
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <Clock className="w-4 h-4" />
        <span>{time}</span>
      </div>
    </div>
  );
}

interface ImportantNoteProps {
  children: React.ReactNode;
}

function ImportantNote({ children }: ImportantNoteProps) {
  return (
    <li className="flex items-start gap-3 text-gray-700">
      <span className="flex-shrink-0 w-6 h-6 bg-[#D00000] rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
        !
      </span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}