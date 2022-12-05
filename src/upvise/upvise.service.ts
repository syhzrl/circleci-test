import { HttpStatus, Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';

import { PrismaService } from '../prisma/prisma.service';
import { UpviseAccount } from './entity/upvise-account.entity';

@Injectable()
export class UpviseService {
    constructor(private prisma: PrismaService) { }

    async getAccountDetails(accountId: string): Promise<UpviseAccount> {
        const upviseAcc = await this.prisma.upviseAccount.findUnique({
            where: {
                id: accountId,
            },
        });

        return upviseAcc;
    }
}
