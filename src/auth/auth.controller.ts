import {
  Controller,
  Post,
  Body,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { VerifyCodeDto } from './dto/verify-code.dto';
import { ResendCodeDto } from './dto/resend-code.dto';
import type { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() registerDto: RegisterDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { user, tokens } = await this.authService.register(registerDto);
    res.cookie(
      'access_token',
      tokens.accessToken,
      this.authService.getAccessCookieOptions(),
    );
    res.cookie(
      'refresh_token',
      tokens.refreshToken,
      this.authService.getRefreshCookieOptions(),
    );
    return user;
  }

  @Post('verify')
  async verifyRegistration(
    @Body() verifyDto: VerifyCodeDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { user, tokens } =
      await this.authService.verifyRegistration(verifyDto);
    res.cookie(
      'access_token',
      tokens.accessToken,
      this.authService.getAccessCookieOptions(),
    );
    res.cookie(
      'refresh_token',
      tokens.refreshToken,
      this.authService.getRefreshCookieOptions(),
    );
    return user;
  }

  @Post('resend-code')
  async resendVerificationCode(@Body() resendCodeDto: ResendCodeDto) {
    return this.authService.resendVerificationCode(resendCodeDto);
  }

  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { user, tokens } = await this.authService.login(loginDto);
    res.cookie(
      'access_token',
      tokens.accessToken,
      this.authService.getAccessCookieOptions(),
    );
    res.cookie(
      'refresh_token',
      tokens.refreshToken,
      this.authService.getRefreshCookieOptions(),
    );
    return user;
  }

  @Post('logout')
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const incomingRefreshToken = req.cookies?.refresh_token;
    await this.authService.logout(incomingRefreshToken);
    res.clearCookie('access_token', this.authService.getAccessCookieOptions());
    res.clearCookie(
      'refresh_token',
      this.authService.getRefreshCookieOptions(),
    );
    return { success: true };
  }
}
