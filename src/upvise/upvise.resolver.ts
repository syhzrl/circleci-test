import { Resolver, Query, Args } from '@nestjs/graphql';
import { UpviseAccount } from './entity/upvise-account.entity';
import { UpviseService } from './upvise.service';

@Resolver(() => UpviseAccount)
export class UpviseResolver {
    constructor(private readonly upviseService: UpviseService) { }

    @Query(() => UpviseAccount, { name: 'upviseAccDetails' })
    getUpviseAccDetails(@Args('accountId') accountId: string): Promise<UpviseAccount> {
        return this.upviseService.getAccountDetails(accountId);
    }
}
