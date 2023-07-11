import { User } from './user.entity';
import { AuthCredentialDto } from './dto/auth-credential';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentialDto: AuthCredentialDto): Promise<void>;
    signIn(authCredentialDto: AuthCredentialDto): Promise<{
        accessToken: string;
    }>;
    test(user: User): void;
}
