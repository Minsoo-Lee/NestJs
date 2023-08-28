import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import {typeormConfig} from "./configs/typeorm.config";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
      TypeOrmModule.forRoot(typeormConfig),
      BoardsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
