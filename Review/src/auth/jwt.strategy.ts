import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-local";
import {UserRepository} from "./user.repository";
import {ExtractJwt} from "passport-jwt";
import {Injectable, UnauthorizedException} from "@nestjs/common";
import {User} from "./user.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private userRepository: UserRepository) {
        super({
            secretOrKey: 'Secret1234',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate(payload) {
        const { username } = payload;
        const user: User = await this.userRepository.findOneBy({ username });

        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}