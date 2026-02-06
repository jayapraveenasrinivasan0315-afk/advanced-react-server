import {
  IsString,
  IsPhoneNumber,
  MinLength,
} from 'class-validator';

export class LoginDto {
  @IsPhoneNumber()
  phone: string;

  @IsString()
  @MinLength(6)
  password: string;
}