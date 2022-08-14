import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Messenge, MessengeShema } from 'src/schemas/messenge.schema';
import { MessengesController } from '../apis/messenges/messenges.controller';
import { MessengeService } from './service/messenge/messenge.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Messenge', schema: MessengeShema }])],
    //controllers: [MessengesController],
    exports: [MessengeService],
    providers: [MessengeService],
})
export class MessengesModule { }

