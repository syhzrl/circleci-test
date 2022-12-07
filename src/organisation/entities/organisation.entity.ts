import { ObjectType, Field, Int } from '@nestjs/graphql';
import { OrgService } from './org-service.entity';

@ObjectType()
export class Organisation {
    @Field()
    id: string;

    @Field()
    partnerCode: string;

    @Field()
    dateCreated: string;

    @Field()
    name: string;

    @Field()
    phone: string;

    @Field()
    website: string;

    @Field()
    address: string;

    @Field()
    supportPlans: string;

    @Field()
    logo: string;

    @Field(() => Int)
    userCap: number;

    @Field()
    orgServiceId: string;
}
