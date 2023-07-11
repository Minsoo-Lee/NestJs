import { AuthCredentialDto } from './dto/auth-credential';
import { User } from './user.entity';
import { Repository } from 'typeorm';
export declare class UserRepository extends Repository<User> {
    createUser(authCredentialDto: AuthCredentialDto): Promise<void>;
}
