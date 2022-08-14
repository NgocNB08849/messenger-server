import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://bichngoc:b.ngoc17092002@cluster0.ar6v8eh.mongodb.net/test")
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
