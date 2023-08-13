"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsModule = void 0;
const common_1 = require("@nestjs/common");
const boards_controller_1 = require("./boards.controller");
const boards_service_1 = require("./boards.service");
const typeorm_1 = require("@nestjs/typeorm");
const board_repository_1 = require("./board.repository");
const board_entity_1 = require("./board.entity");
const jwt_1 = require("@nestjs/jwt");
const auth_module_1 = require("../auth/auth.module");
const user_repository_1 = require("../auth/user.repository");
const user_entity_1 = require("../auth/user.entity");
let BoardsModule = exports.BoardsModule = class BoardsModule {
};
exports.BoardsModule = BoardsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            typeorm_1.TypeOrmModule.forFeature([board_entity_1.Board]),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])
        ],
        controllers: [boards_controller_1.BoardsController],
        providers: [boards_service_1.BoardsService, board_repository_1.BoardRepository, user_repository_1.UserRepository, jwt_1.JwtService]
    })
], BoardsModule);
//# sourceMappingURL=boards.module.js.map