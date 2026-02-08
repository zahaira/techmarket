import ar from "../../messages/ar.json";

export function getArabicYearText(years: number) {
  if (years === 1) return ar.shop.year_one;
  if (years === 2) return ar.shop.year_two;
  return years + " " + ar.shop.years;
}

export function orderBy<T>(array: T[], properties: (keyof T)[], orders?: ('asc' | 'desc')[]): T[] {
  return array.slice().sort((a, b) => {
    for (let i = 0; i < properties.length; i += 1) {
      const property = properties[i];
      const order = orders && orders[i] === 'desc' ? -1 : 1;

      const aValue = a[property];
      const bValue = b[property];

      if (aValue < bValue) return -1 * order;
      if (aValue > bValue) return 1 * order;
    }
    return 0;
  });
}