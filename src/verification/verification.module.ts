import { Module } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { PrismaModule } from '../prisma/prisma.module';
import { SmsService } from '../sms/sms.service';
import { SmsModule } from '../sms/sms.module';

@Module({
  imports: [PrismaModule, SmsModule],
  providers: [VerificationService, SmsService],
  exports: [VerificationService],
})
export class VerificationModule {}
