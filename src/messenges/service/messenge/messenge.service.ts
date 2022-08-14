import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Messenge, MessengeDocument } from 'src/schemas/messenge.schema';

import { Messenge as MessengeModel } from '../../../models/messenge.model';

@Injectable()
export class MessengeService {
    constructor(@InjectModel(Messenge.name) private MessageModel: Model<MessengeDocument>) {}

    async create(messenge: MessengeModel){
        messenge.creteAt =Date.now();
        let createMessenge = new this.MessageModel(messenge);
        await createMessenge.save();
    }

    async findAll(){
        return await this.MessageModel.find().exec();
    }

    async findByUserId(fromUserId: string, toUser: string){
        return await this.MessageModel.find({$or: [{user: fromUserId, toUser: toUser}, {user: toUser, toUser: fromUserId}] }).exec();        
    }

}
