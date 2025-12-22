import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ReverseGeocodeDto {
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  lat: number;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  lon: number;

  @IsOptional()
  @IsString()
  locale?: string;
}
