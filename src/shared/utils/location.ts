import regionsDataJson from "@/data/morocco-regions.json";
import citiesDataJson from "@/data/morocco-cities.json";
import { RegionsData, CitiesData, Region, City } from "@/shared/types/location";

const regionsData: RegionsData = regionsDataJson;
const citiesData: CitiesData = citiesDataJson;

export const getRegions = (lang: "fr" | "en" | "ar" = "en"): Region[] => {
  return regionsData.regions.data.map((region) => ({
    id: region.id,
    name: region.names[lang],
  }));
};

export const getCitiesByRegion = (
  regionId: number,
  lang: "fr" | "en" | "ar" = "en"
): City[] => {
  return citiesData.cities.data
    .filter((city) => city.region_id === regionId)
    .map((city) => ({
      id: city.id,
      regionId: city.region_id,
      name: city.names[lang],
    }));
};
