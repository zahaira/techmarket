import ar from "../../../messages/ar.json";

export function getArabicYearText(years: number) {
  if (years === 1) return ar.shop.year_one;
  if (years === 2) return ar.shop.year_two;
  return years + " " + ar.shop.years;
}
