import { DataSource, Repository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialDto } from "./dto/auth-credential.dto";
export declare class UserRepository extends Repository<User> {
    private dataSource;
    constructor(dataSource: DataSource);
    createUser(authCredentialDto: AuthCredentialDto): Promise<void>;
}
