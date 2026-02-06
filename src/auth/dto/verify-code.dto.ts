import { IsPhoneNumber, IsString, Length } from 'class-validator';

export class VerifyCodeDto {
  @IsString()
  @Length(4, 4)
  code: string;

  @IsPhoneNumber()
  phone: string;
}
