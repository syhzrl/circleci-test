import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class OrgServiceUpvise {
    @Field()
    id: string;

    @Field()
    enabled: boolean

    @Field()
    email: string

    @Field()
    password: string

    @Field()
    url: string

    @Field()
    adminEyesOnly: boolean

    @Field()
    upviseAccountId: string

    @Field(() => Int)
    userCap: number
}
