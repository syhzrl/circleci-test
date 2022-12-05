import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UpviseAccount {
    @Field()
    id: string;

    @Field()
    companyId: string

    @Field()
    companyName: string

    @Field()
    countryCode: string

    @Field()
    creationDate: string

    @Field()
    dbName: string

    @Field()
    displayName: string

    @Field()
    email: string

    @Field()
    emailDropbox: string

    @Field()
    expiryDate: string

    @Field()
    language: string

    @Field()
    partnerCode: string

    @Field()
    privilege: string

    @Field()
    shareToken: string

    @Field()
    token: string

    @Field()
    backupToken: string
}
