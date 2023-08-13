import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        try {
            const authorization = request.headers.authorization;
            const token = this.extractTokenFromRequest(authorization);
            request['user'] = this.jwtService.verify(
                token,
                {
                    secret: "Secret1234"
                });
        } catch {
            throw new UnauthorizedException();
        }
        return true;
    }

    private extractTokenFromRequest(authorization: string): string | undefined {
        const [type, token] = authorization.split(" ") ?? [];
        return type === "Bearer" ? token : undefined;
    }
}