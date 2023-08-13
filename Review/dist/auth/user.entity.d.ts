import { BaseEntity } from "typeorm";
import { Board } from "../boards/board.entity";
export declare class User extends BaseEntity {
    id: number;
    username: string;
    password: string;
    board: Board[];
}
