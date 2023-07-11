import { User } from "src/auth/user.entity";
import { Repository } from "typeorm";
import { BoardStatus } from "./board-status.enum";
import { Board } from "./board.entity";
import { CreateBoardDto } from "./dto/create-board.dto";
export declare class BoardRepository extends Repository<Board> {
    getBoardById(id: number): Promise<Board>;
    createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>;
    deleteBoard(id: number, user: User): Promise<void>;
    updateBoardStatus(id: number, status: BoardStatus): Promise<Board>;
    getAllBoards(user: User): Promise<Board[]>;
}
