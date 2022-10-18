import { Body, Controller, Get, Post, UseGuards, UsePipes } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import { ValidationPipe } from "../pipes/validation.pipe";
import {changeStatusDto} from "../status/dto/status.dto";

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User})
 //   @UsePipes(ValidationPipe)
    @Post()
    create(@Body() userDto: CreateUserDto) {

        return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary: 'Получить всех пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
      return this.usersService.getAllUsers();
    }

    @ApiOperation({summary: 'Выдать роль'})
    @ApiResponse({status: 200})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto);
    }

    @ApiOperation({summary: 'Забрать роль'})
    @ApiResponse({status: 200})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/role')
    deleteRole(@Body() dto: AddRoleDto) {
      return this.usersService.deleteRole(dto);
    }

    @ApiOperation({summary: 'Установить статус'})
    @ApiResponse({status: 200})
    @Post('/addStatus')
    addStatus(@Body() dto: changeStatusDto) {
      return this.usersService.addStatus(dto);
    }

    @ApiOperation({summary: 'Удалить статус'})
    @ApiResponse({status: 200})
    @Post('/deleteStatus')
    deleteStatus(@Body() dto: changeStatusDto) {
      return this.usersService.deleteStatus(dto);
    }

    @ApiOperation({summary: 'Забанить пользователя'})
    @ApiResponse({status: 200})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/addBan')
    ban(@Body() dto: BanUserDto) {
        return this.usersService.ban(dto);
    }

    @ApiOperation({summary: 'Забанить пользователя'})
    @ApiResponse({status: 200})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/addBan')
    deleteBan(@Body() dto: BanUserDto) {
      return this.usersService.deleteBan(dto);
    }

    @ApiOperation({summary: 'Добавить друга пользователя'})
    @ApiResponse({status: 200})
    @Get('/addFriend')
    addFriend(@Body() UserId: string) {
      //todo
      return 0;
    }

  @ApiOperation({summary: 'Получить информацию о пользователе  по его электронной почте'})
  @ApiResponse({status: 200})
  @Get('/getUserByEmail')
  getUserByEmail(email: string) {
    return this.usersService.getUserByEmail(email);
  }

}
