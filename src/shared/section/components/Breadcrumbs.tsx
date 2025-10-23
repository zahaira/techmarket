import { Link } from "@/i18n/navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useLocale } from "next-intl";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  links: BreadcrumbItem[];
}

export default function Breadcrumb({ links }: BreadcrumbProps) {
  const locale = useLocale();

  const isRtl = locale === "ar";

  return (
    <nav
      className="flex items-center space-x-1 sm:space-x-2"
      aria-label="breadcrumb"
    >
      {links.map((link, idx) => (
        <div key={idx} className="flex items-center">
          {link.href ? (
            <Link
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ) : (
            <span className="text-sm font-medium text-gray-600">
              {link.name}
            </span>
          )}

          {idx < links.length - 1 && (
            <span className="mx-1">
              {isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
