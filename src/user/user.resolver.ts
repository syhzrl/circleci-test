import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { AuthPayload, AuthUnion } from './entities/auth-payload.entity';
import { LoginInput } from './dto/login.input';

@Resolver(() => AuthUnion)
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    @Mutation(() => AuthUnion, { name: 'login' })
    login(@Args('loginInput') loginInput: LoginInput): Promise<typeof AuthUnion> {
        return this.userService.login(loginInput);
    }
}
