export interface NominatimSearchResult {
  lat: string;
  lon: string;
  display_name: string;
  address?: {
    road?: string;
    house_number?: string;
    city?: string;
    town?: string;
    village?: string;
    postcode?: string;
    country?: string;
  };
}

export interface AddressSearchResult {
  lat: string;
  lon: string;
  display_name: string;
}

export interface GeocodeResponse {
  features: Array<{
    properties: {
      geocoding: Geocoding;
    };
  }>;
}

export interface Geocoding {
  housenumber?: string;
  street?: string;
  postcode?: string;
  city?: string;
  district?: string;
  county?: string;
  state?: string;
  country?: string;
}
