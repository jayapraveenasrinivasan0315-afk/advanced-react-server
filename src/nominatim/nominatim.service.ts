import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import {
  NominatimSearchResult,
  AddressSearchResult,
  GeocodeResponse,
  Geocoding,
} from './interfaces/nominatim.interface';

@Injectable()
export class NominatimService {
  private readonly baseUrl = 'https://nominatim.openstreetmap.org';
  private readonly userAgent = 'ReactCourseBackend/1.0';

  async searchAddresses(
    searchQuery: string,
    limit: number = 5,
    language: string = 'en',
  ) {
    try {
      const response = await axios.get<NominatimSearchResult[]>(
        `${this.baseUrl}/search`,
        {
          params: {
            q: searchQuery,
            format: 'jsonv2',
            limit,
            addressdetails: 1,
          },
          headers: {
            'Accept-Language': language,
            'User-Agent': this.userAgent,
          },
        },
      );

      const uniqueItems = response.data.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.display_name === item.display_name),
      );

      const results = uniqueItems.map((item) => ({
        lat: parseFloat(item.lat),
        lon: parseFloat(item.lon),
        displayName: item.display_name,
      }));

      return results;
    } catch (error) {
      throw new HttpException(
        'Failed to search addresses',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  async getReverseGeocode(lat: number, lon: number, language: string = 'en') {
    try {
      const response = await axios.get<GeocodeResponse>(
        `${this.baseUrl}/reverse`,
        {
          params: {
            format: 'geocodejson',
            lat,
            lon,
          },
          headers: {
            'Accept-Language': language,
            'User-Agent': this.userAgent,
          },
        },
      );

      const geocoding = response.data.features[0].properties.geocoding;
      return geocoding;
    } catch (error) {
      throw new HttpException(
        'Failed to get reverse geocode',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
