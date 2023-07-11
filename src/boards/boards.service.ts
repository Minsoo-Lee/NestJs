import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository: BoardRepository,
    ) { }

    getBoardById(id: number): Promise<Board> {
        return this.boardRepository.getBoardById(id);
    }

    createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
        return this.boardRepository.createBoard(createBoardDto, user);
    }

    deleteBoard(id: number): Promise<void> {
        return this.boardRepository.deleteBoard(id);
    }

    updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
        return this.boardRepository.updateBoardStatus(id, status);
    }

    getAllBoards(user: User): Promise <Board[]> {
        return this.boardRepository.getAllBoards(user);
    }
}