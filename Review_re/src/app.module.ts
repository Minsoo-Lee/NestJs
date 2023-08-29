import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import {typeORMConfig} from "./configs/typeORMConfig";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
      TypeOrmModule.forRoot(typeORMConfig),
      BoardsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
