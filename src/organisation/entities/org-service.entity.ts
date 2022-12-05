import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class OrgService {
    @Field()
    id: string;

    @Field()
    orgServiceUpviseId: string;
}
