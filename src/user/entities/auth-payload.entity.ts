import { ObjectType, Field, createUnionType } from '@nestjs/graphql';
import { Error } from './error.entity';

@ObjectType()
export class AuthPayload {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    isAuthenticated: boolean;
}

@ObjectType()
export class AuthError extends Error { }

export const AuthUnion = createUnionType({
    name: 'AuthResult',
    types: () => [AuthPayload, AuthError],
    resolveType(value) {
        if (value.id) {
            return AuthPayload;
        }

        if (value.message) {
            return AuthError;
        }
    },
});
