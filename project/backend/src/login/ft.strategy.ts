import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile, VerifyCallback } from 'passport-42';
import { UsersService } from '../users/users.service';

@Injectable()
export class FtStrategy extends PassportStrategy(Strategy, '42') {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UsersService,
  ) {
    super({
      clientID: configService.get<string>('FORTYTWO_CLIENT_ID'),
      clientSecret: configService.get<string>('FORTYTWO_CLIENT_SECRET'),
      callbackURL: '/login/42/return',
      passReqToCallback: true,
    });
  }

  async validate(
    request: { session: { accessToken: string } },
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    cb: VerifyCallback,
  ): Promise<any> {
    try {
      await this.userService.findOrCreate({
        email: profile.emails[0].value,
        intraId: profile.id,
        username: profile.username,
      });
      cb(null, profile);
    } catch (e) {
      cb(e.message, profile);
    }
  }
}
