import {Body, Controller, Post, UseGuards} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {CreateStatusDto} from "./dto/create-status.dto";
import {StatusService} from "./status.service";
import {Status} from "./status.model";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";

@ApiTags('Статусы Пользователей')
@Controller('status')
export class StatusController {

  constructor(private statusService: StatusService) {}

  @ApiOperation({summary: 'Создание статуса'})
  @ApiResponse({status: 200, type: Status})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() CreateStatusDto: CreateStatusDto) {
    return this.statusService.createStatus(CreateStatusDto);
  }
}
