import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { MessengeService } from 'src/messenges/service/messenge/messenge.service';
import { Messenge } from '../../models/messenge.model'

@Controller('messenges')
export class MessengesController {
    constructor(private messegeServeice: MessengeService){}

    @Post('/send')
    public async sendMessenge(@Body() messege: Messenge){
        return await this.messegeServeice.create(messege);
    }

    @Get('/')
    public async getMesseges(@Query('from') fromId: string,@Query('to') toId: string){
        return await this.messegeServeice.findByUserId(fromId, toId);
    }
}
