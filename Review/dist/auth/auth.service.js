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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./user.repository");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = exports.AuthService = class AuthService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async signUp(authCredentialDto) {
        return this.userRepository.createUser(authCredentialDto);
    }
    async signIn(authCredentialDto) {
        const { username, password } = authCredentialDto;
        const user = await this.userRepository.findOneBy({ username });
        if (user && (await bcrypt.compare(password, user.password))) {
            const payload = { username };
            const accessToken = await this.jwtService.sign(payload);
            return { accessToken };
        }
        throw new common_1.UnauthorizedException('login failed');
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map