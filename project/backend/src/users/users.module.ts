import { forwardRef, Module } from "@nestjs/common";
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users.model";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";
import { RolesModule } from "../roles/roles.module";
import { AuthModule } from "../auth/auth.module";
import { Chat } from "../chat/chat.model";
import { UserStatus} from "../status/user-status.model";
import { Status} from "../status/status.model";
import { StatusModule} from "../status/status.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      SequelizeModule.forFeature([User, Role, UserRoles, Chat, Status, UserStatus]),
      RolesModule,
      StatusModule,
      forwardRef(() => AuthModule),

  ],
    exports: [
        UsersService,
    ]
})
export class UsersModule {}
