import {DataSource, Repository} from "typeorm";
import {Board} from "./board.entity";
import {InjectRepository} from "@nestjs/typeorm";

export class BoardRepository extends Repository<Board> {
    constructor(@InjectRepository(Board) private dataSource: DataSource) {
        super(Board, dataSource.manager) // 변경
    }
}