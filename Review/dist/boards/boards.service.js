"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const board_repository_1 = require("./board.repository");
const user_repository_1 = require("../auth/user.repository");
let BoardsService = exports.BoardsService = class BoardsService {
    constructor(boardRepository, userRepository) {
        this.boardRepository = boardRepository;
        this.userRepository = userRepository;
    }
    async createBoard(createBoardDto, user) {
        const userData = await this.userRepository.findOneBy({ username: user.username });
        return this.boardRepository.createBoard(createBoardDto, userData);
    }
    async getBoardById(id) {
        const found = await this.boardRepository.findOneBy({ id });
        if (!found) {
            throw new common_1.NotFoundException(`Can't find Board with id ${id}`);
        }
        return found;
    }
    async deleteBoard(id, user) {
        const userData = await this.userRepository.findOneBy({ username: user.username });
        const result = await this.boardRepository.delete({
            id,
            user: {
                id: userData.id
            }
        });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Can't find Board with id ${id}`);
        }
        console.log('result: ', result);
    }
    async updateBoardStatus(id, status) {
        const board = await this.getBoardById(id);
        board.status = status;
        await this.boardRepository.save(board);
        return board;
    }
    async getAllBoards(user) {
        const userData = await this.userRepository.findOneBy({ username: user.username });
        const query = this.boardRepository.createQueryBuilder('board');
        query.where('board.userId = :userId', { userId: userData.id });
        return await query.getMany();
    }
};
exports.BoardsService = BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [board_repository_1.BoardRepository,
        user_repository_1.UserRepository])
], BoardsService);
//# sourceMappingURL=boards.service.js.map