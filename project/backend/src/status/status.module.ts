import {forwardRef, Module} from '@nestjs/common';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';
import {UsersService} from "../users/users.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Status} from "./status.model";
import {UserStatus} from "./user-status.model";
import {AuthModule} from "../auth/auth.module";


@Module({
  controllers: [StatusController],
  providers: [StatusService],
  exports: [
    StatusService,

  ],
  imports:[
    SequelizeModule.forFeature([User, Status, UserStatus]),
    forwardRef(() => AuthModule),
  ]
})
export class StatusModule {}
