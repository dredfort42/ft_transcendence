import { Injectable } from '@nestjs/common';
import { CreateChatDto } from "./dto/create-chat.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Chat } from "./chat.model";
import { FilesService } from "../files/files.service";

@Injectable()
export class ChatService {

  constructor(@InjectModel(Chat) private  postRepository: typeof Chat,
              private fileService: FilesService) {}

  async create(dto: CreateChatDto, image: any) {
      const fileName = await this.fileService.createFile(image);
      const chat = await this.postRepository.create({...dto, image: fileName})
      return chat;

  }
}
