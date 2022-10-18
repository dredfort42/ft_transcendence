import { Injectable } from '@nestjs/common';
import {CreateStatusDto} from "./dto/create-status.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Status} from "./status.model";

@Injectable()
export class StatusService {

  constructor(@InjectModel(Status) private StausRrepository: typeof Status) {}

  async createStatus(dto: CreateStatusDto){
    const status = await this.StausRrepository.create(dto);

    return status;
  }

  async getStatusByName(statusName: string) {
    const status = await this.StausRrepository.findOne({where: {statusName}})
    return status;
  }
}
