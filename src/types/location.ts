export interface RegionJSON {
  id: number;
  names: {
    ar: string;
    en: string;
    fr: string;
  };
}

export interface RegionsData {
  regions: {
    count: number;
    data: RegionJSON[];
  };
}

export interface CityJSON {
  id: number;
  region_id: number;
  names: {
    ar: string;
    en: string;
    fr: string;
  };
}

export interface CitiesData {
  cities: {
    count: number;
    data: CityJSON[];
  };
}

export interface Region {
  id: number;
  name: string;
}

export interface City {
  id: number;
  regionId: number;
  name: string;
}
