import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CreateChatDto } from "./dto/create-chat.dto";
import { ChatService } from "./chat.service";
import { FileInterceptor } from "@nestjs/platform-express";


@Controller('chat')
export class ChatController {

    constructor(private chatService: ChatService) {}

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createChat(@Body() dto: CreateChatDto,
               @UploadedFile() image) {
        return this.chatService.create(dto, image)
    }
}
