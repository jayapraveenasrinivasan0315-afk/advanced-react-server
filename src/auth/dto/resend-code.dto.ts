import { IsPhoneNumber } from 'class-validator';

export class ResendCodeDto {
  @IsPhoneNumber()
  phone: string;
}
