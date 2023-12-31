"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardRepository = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../auth/user.entity");
const typeorm_1 = require("typeorm");
const board_status_enum_1 = require("./board-status.enum");
const board_entity_1 = require("./board.entity");
let BoardRepository = class BoardRepository extends typeorm_1.Repository {
    async getBoardById(id) {
        const found = await this.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException(`Can't find Board with id ${id}`);
        }
        return found;
    }
    async createBoard(createBoardDto, user) {
        const { title, description } = createBoardDto;
        const board = this.create({
            title,
            description,
            status: board_status_enum_1.BoardStatus.PUBLIC,
            user
        });
        await this.save(board);
        return board;
    }
    async deleteBoard(id, user) {
        const result = await this.delete({ id, user });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Can't find Board with id ${id}`);
        }
    }
    async updateBoardStatus(id, status) {
        const board = await this.getBoardById(id);
        board.status = status;
        await this.save(board);
        return board;
    }
    async getAllBoards(user) {
        const query = this.createQueryBuilder('board');
        query.where('board.userId = :userId', { userId: user.id });
        const boards = await query.getMany();
        return boards;
    }
};
BoardRepository = __decorate([
    typeorm_1.EntityRepository(board_entity_1.Board)
], BoardRepository);
exports.BoardRepository = BoardRepository;
//# sourceMappingURL=board.repository.js.map