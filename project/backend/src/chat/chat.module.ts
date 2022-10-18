import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";
import { Chat } from "./chat.model";
import { User } from "../users/users.model";
import { FilesModule } from "../files/files.module";

@Module({
  providers: [ChatService],
  controllers: [ChatController],
  imports: [
    SequelizeModule.forFeature([User, Chat]),
      FilesModule
  ]
})
export class ChatModule {}
