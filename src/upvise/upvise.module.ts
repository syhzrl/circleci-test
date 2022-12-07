import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpviseResolver } from './upvise.resolver';
import { UpviseService } from './upvise.service';

@Module({
    providers: [UpviseService, UpviseResolver, PrismaService],
})

export class UpviseModule { }
