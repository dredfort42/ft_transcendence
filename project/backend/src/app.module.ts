import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { Chat } from "./chat/chat.model";
import { FilesModule } from './files/files.module';
import * as path from "path";
import { ServeStaticModule } from "@nestjs/serve-static";
import { LoginModule } from './login/login.module';
import { StatusModule } from './status/status.module';
import {Status} from './status/status.model';
import {UserStatus} from "./status/user-status.model";



@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
        rootPath: path.resolve( __dirname, 'static'),
    }),
  SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRESS_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    models: [User, Role, UserRoles, Chat, Status, UserStatus],
    autoLoadModels: true
  }),
  UsersModule,
  LoginModule,
  RolesModule,
  AuthModule,
  ChatModule,
  FilesModule,
  StatusModule,
]
})

export class AppModule {}
