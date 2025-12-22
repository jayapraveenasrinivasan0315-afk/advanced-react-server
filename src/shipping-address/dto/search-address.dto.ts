import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  Min,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';

export class SearchAddressDto {
  @IsString()
  @IsNotEmpty()
  searchQuery: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(50)
  @Type(() => Number)
  limit?: number = 5;

  @IsOptional()
  @IsString()
  locale?: string;
}
