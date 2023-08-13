import {DataSource, Repository} from "typeorm";
import {User} from "./user.entity";
import {AuthCredentialDto} from "./dto/auth-credential.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {ConflictException, InternalServerErrorException} from "@nestjs/common";
import * as bcrypt from 'bcrypt';

export class UserRepository extends Repository<User> {
    constructor(@InjectRepository(User) private dataSource: DataSource) {
        super(User, dataSource.manager) // 변경
    }

    async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
        const { username, password } = authCredentialDto;

        const salt = await bcrypt.genSalt();
        console.log("salt: " + salt);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("hashedPassword: " + hashedPassword);

        const user = this.create({ username, password: hashedPassword });
        try {
            await this.save(user);
        } catch(error) {
            if (error.code === '23505') {
                throw new ConflictException('Existing username');
            }
            throw new InternalServerErrorException();
        }
    }
}