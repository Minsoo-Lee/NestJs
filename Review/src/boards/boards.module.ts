import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {BoardRepository} from "./board.repository";
import {Board} from "./board.entity";
import {JwtStrategy} from "../auth/jwt.strategy";
import {PassportModule} from "@nestjs/passport";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {AuthGuard} from "../auth/auth.guard";
import {AuthModule} from "../auth/auth.module";
import {UserRepository} from "../auth/user.repository";
import {User} from "../auth/user.entity";

@Module({
  imports: [
      AuthModule,
      TypeOrmModule.forFeature([Board]),
      TypeOrmModule.forFeature([User])
  ],
  controllers: [BoardsController],
  providers: [BoardsService, BoardRepository, UserRepository, JwtService]
})
export class BoardsModule {}
