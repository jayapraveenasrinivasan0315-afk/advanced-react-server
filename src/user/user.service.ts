import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from '../auth/dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(registerDto: RegisterDto) {
    if (!registerDto.phone) {
      throw new BadRequestException(
        'Phone number is required',
      );
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        phone: registerDto.phone?.trim(),
        password: hashedPassword,
      },
      select: {
        id: true,
        phone: true,
        isVerified: true,
      },
    });

    return user;
  }


  async findByPhone(phone: string) {
    return await this.prisma.user.findUnique({
      where: { phone },
    });
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async verifyUser(userId: string) {
    return await this.prisma.user.update({
      where: { id: userId },
      data: {
        isVerified: true,
        verifiedAt: new Date(),
      },
      select: {
        id: true,
        phone: true,
        isVerified: true,
        verifiedAt: true,
      },
    });
  }
}
