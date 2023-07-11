import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
	imports: [
		PassportModule.register({ defaultStrategy: 'jwt' }),
		JwtModule.register({
			secret: 'Secret1234',
			signOptions: {
				expiresIn: 3600
			}
		}),
		TypeOrmModule.forFeature([UserRepository])
	],
	controllers: [AuthController],
	providers: [AuthService]
})
export class AuthModule {}
