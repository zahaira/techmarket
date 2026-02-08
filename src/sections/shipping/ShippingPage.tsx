import { Truck, Store, Mail, PackageCheck, Clock, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { ShoppingCart } from "lucide-react";

export default function ShippingPage() {
  const t = useTranslations("shipping");
  
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
                {t("productJourneySubtitle")}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <ShoppingCart className="w-16 h-16 md:w-20 md:h-20" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Product Journey Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {t("productJourney")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D00000] to-[#9D0208] mx-auto rounded-full"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connection line for desktop */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            
            <Step
              icon={<Store className="w-8 h-8" />}
              title={t("steps.choose.title")}
              number="01"
              color="from-blue-500 to-blue-600"
            >
              {t("steps.choose.desc")}
            </Step>
            <Step
              icon={<Mail className="w-8 h-8" />}
              title={t("steps.confirmation.title")}
              number="02"
              color="from-purple-500 to-purple-600"
            >
              {t("steps.confirmation.desc")}
            </Step>
            <Step
              icon={<Truck className="w-8 h-8" />}
              title={t("steps.shipping.title")}
              number="03"
              color="from-orange-500 to-orange-600"
            >
              {t("steps.shipping.desc")}
            </Step>
            <Step
              icon={<PackageCheck className="w-8 h-8" />}
              title={t("steps.receive.title")}
              number="04"
              color="from-green-500 to-green-600"
            >
              {t("steps.receive.desc")}
            </Step>
          </div>
        </div>

        {/* Tracking Info Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-[#D00000] to-[#9D0208] p-3 rounded-xl">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              {t('tracking.title')}
            </h3>
          </div>
          
          <div className="space-y-4">
            <InfoItem icon={<Mail className="w-5 h-5" />}>
              {t("tracking.confirmEmail")}
            </InfoItem>
            <InfoItem icon={<PackageCheck className="w-5 h-5" />}>
              {t("tracking.trackingCode")}
            </InfoItem>
            <InfoItem icon={<Clock className="w-5 h-5" />}>
              {t("tracking.accountTracking")}
            </InfoItem>
          </div>
        </div>

        {/* Delivery Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-5 border-b border-gray-200">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
              {t("table.title")}
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#D00000] to-[#9D0208] text-white text-sm">
                  <th className="px-4 py-3 text-left font-semibold">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{t("table.city")}</span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{t("table.delay")}</span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4" />
                      <span>{t("table.price")}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <Row
                  city={t("rows.rabat.city")}
                  delay={t("rows.rabat.delay")}
                  price={t("rows.rabat.price")}
                  highlight
                />
                <Row
                  city={t("rows.casa.city")}
                  delay={t("rows.casa.delay")}
                  price={t("rows.casa.price")}
                />
                <Row
                  city={t("rows.major.city")}
                  delay={t("rows.major.delay")}
                  price={t("rows.major.price")}
                  highlight
                />
                <Row
                  city={t("rows.other.city")}
                  delay={t("rows.other.delay")}
                  price={t("rows.other.price")}
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* Notes Section */}
        <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-[#D00000] rounded-xl p-8 shadow-lg">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-[#D00000] rounded-full"></div>
            {t("notes.title")}
          </h4>
          <ul className="space-y-3">
            <NoteItem>{t("notes.n1")}</NoteItem>
            <NoteItem>{t("notes.n2")}</NoteItem>
            <NoteItem>{t("notes.n3")}</NoteItem>
          </ul>
        </div>
    </div>
  );
}

/* Components */
interface StepProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  number: string;
  color: string;
}

function Step({ icon, title, children, number, color }: StepProps) {
  return (
    <div className="relative group">
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full">
        {/* Number badge */}
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

interface RowProps {
  city: string;
  delay: string;
  price: string;
  highlight?: boolean;
}

function Row({ city, delay, price, highlight }: RowProps) {
  return (
    <tr className={`border-b border-gray-100 transition-colors ${
      highlight ? 'bg-red-50/50 hover:bg-red-50' : 'hover:bg-gray-50'
    }`}>
      <td className="px-4 py-3 font-medium text-gray-800">{city}</td>
      <td className="px-4 py-3 text-gray-600">{delay}</td>
      <td className="px-4 py-3">
        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-green-100 text-green-800">
          {price}
        </span>
      </td>
    </tr>
  );
}

interface InfoItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

function InfoItem({ icon, children }: InfoItemProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
      <div className="flex-shrink-0 mt-0.5 text-[#D00000]">
        {icon}
      </div>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}

interface NoteItemProps {
  children: React.ReactNode;
}

function NoteItem({ children }: NoteItemProps) {
  return (
    <li className="flex items-start gap-3 text-gray-700">
      <span className="flex-shrink-0 w-6 h-6 bg-[#D00000] rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
        ✓
      </span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}