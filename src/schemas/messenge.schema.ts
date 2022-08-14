import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class Messenge {
    @Prop()
    content: string;

    @Prop()
    user: string;

    @Prop()
    createAt: number;

    @Prop()
    toUser: string;
}

export type MessengeDocument = Messenge & Document;

export const MessengeShema = SchemaFactory.createForClass(Messenge);