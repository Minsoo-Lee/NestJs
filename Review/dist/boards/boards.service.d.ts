import { BoardStatus } from "./board-status.enum";
import { CreateBoardDto } from "./dto/create-board.dto";
import { BoardRepository } from "./board.repository";
import { Board } from "./board.entity";
import { User } from "../auth/user.entity";
import { UserRepository } from "../auth/user.repository";
export declare class BoardsService {
    private boardRepository;
    private userRepository;
    constructor(boardRepository: BoardRepository, userRepository: UserRepository);
    createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>;
    getBoardById(id: number): Promise<Board>;
    deleteBoard(id: number, user: User): Promise<void>;
    updateBoardStatus(id: number, status: BoardStatus): Promise<Board>;
    getAllBoards(user: User): Promise<Board[]>;
}
