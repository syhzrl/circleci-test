import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrganisationResolver } from './organisation.resolver';
import { OrganisationService } from './organisation.service';

@Module({
    providers: [OrganisationService, OrganisationResolver, PrismaService],
})

export class OrganisationModule { }
