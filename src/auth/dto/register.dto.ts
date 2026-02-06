import {
  IsPhoneNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsPhoneNumber()
  phone: string;

  @IsString()
  @MinLength(6)
  password: string;
}
