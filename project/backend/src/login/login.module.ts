import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FtStrategy } from './ft.strategy';
import { LoginController } from './login.controller';
import { SessionSerializer } from './session.serializer';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [LoginController],
  providers: [ConfigService, FtStrategy, SessionSerializer],
})
export class LoginModule {}
