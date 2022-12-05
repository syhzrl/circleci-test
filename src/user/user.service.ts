import { HttpStatus, Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { LoginInput } from './dto/login.input';
import { AuthUnion, AuthPayload, AuthError } from './entities/auth-payload.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async login(loginInput: LoginInput): Promise<typeof AuthUnion> {
        const userExists = await this.prisma.user.findFirst({
            where: {
                email: loginInput.email,
            },
        });

        if (!userExists) {
            const userNotFound: AuthError = {
                message: 'User Not Found',
            };

            return userNotFound;
        }

        if (userExists.password !== loginInput.password) {
            const wrongPassword: AuthError = {
                message: 'Incorrect password',
            };

            return wrongPassword;
        }

        const payload: AuthPayload = {
            id: userExists.id,
            name: userExists.name,
            email: userExists.email,
            isAuthenticated: true,
        };

        return payload;
    }
}
