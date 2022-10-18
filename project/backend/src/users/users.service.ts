import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import * as bcrypt from 'bcryptjs'
import {changeStatusDto, GetStatusDtoByName} from "../status/dto/status.dto";
import {StatusService} from "../status/status.service";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRrepository: typeof User,
                private  roleService: RolesService, private statusService: StatusService ) {}

    async createUser(dto: CreateUserDto){
        const user = await this.userRrepository.create(dto);
        const role = await this.roleService.getRoleByValue("ADMIN")
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user;
    }

    async getAllUsers(){
        const user = await this.userRrepository.findAll({include: {all: true}});
        return user;

    }

    async getUserByEmail(email: string) {
        const user = await this.userRrepository.findOne({where: {email}, include: {all: true}})
        return user;
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.userRrepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if(role && user) {
            await user.$add('role', role.id);
            return dto;
        }
        throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
    }

    async deleteRole(dto: AddRoleDto) {
      const user = await this.userRrepository.findByPk(dto.userId);
      const role = await this.roleService.getRoleByValue(dto.value);
      if(role && user) {
        await user.$remove('role', role.id);
        return dto;
     }
      throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
    }

    async addStatus(dto: changeStatusDto) {
        const user = await this.userRrepository.findByPk(dto.userId);
        const status = await this.statusService.getStatusByName(dto.statusName);
        if(status && user) {
            await user.$add('status', status.id);
            return dto;
        }
        throw new HttpException('Пользователь или статус не найдены', HttpStatus.NOT_FOUND);
    }

    async deleteStatus(dto: changeStatusDto) {
      const user = await this.userRrepository.findByPk(dto.userId);
      const status = await this.statusService.getStatusByName(dto.statusName);
      if(status && user) {
        await user.$remove('status', status.id);
        return dto;
      }
    throw new HttpException('Пользователь или статус не найдены', HttpStatus.NOT_FOUND);
    }

    async ban(dto: BanUserDto) {
        const user = await this.userRrepository.findByPk(dto.userId);
        if (!user) {
            throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);

        }
        user.banned = true;
        user.banReason = dto.banReason;
        await user.save();
        return user;

    }

    async deleteBan(dto: BanUserDto) {
      const user = await this.userRrepository.findByPk(dto.userId);
      if (!user) {
        throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);

      }
      user.banned = false;
      user.banReason = dto.banReason;
      await user.save();
      return user;
    }

    async findOrCreate({ email: email, intraId: intraId, username: username }) {
      let user: void | User = await this.userRrepository.findOne(
        {where: {intraId}, include: {all: true}}
      );
      if (!user) {
        const hashPassword = await bcrypt.hash("changeme", 5);
        user = await this.userRrepository.create(
          {email: email, password: hashPassword},
        )
        user.intraId = intraId;
        user.username = username;
        await user.save();
      }
      return user;
    }
}
