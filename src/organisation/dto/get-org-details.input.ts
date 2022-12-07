import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GetOrgDetailsInput {
    @Field()
    orgId: string;
}
