import { HttpStatus, Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';

import { PrismaService } from '../prisma/prisma.service';
import { OrgServiceUpvise } from './entities/org-service-upvise.entity';
import { OrgService } from './entities/org-service.entity';
import { Organisation } from './entities/organisation.entity';

@Injectable()
export class OrganisationService {
    constructor(private prisma: PrismaService) { }

    async getAll(): Promise<Organisation[]> {
        const orgs = await this.prisma.organisation.findMany();

        return orgs;
    }

    async getOrgDetails(orgId: string): Promise<Organisation> {
        const orgDetails = await this.prisma.organisation.findUnique({
            where: {
                id: orgId,
            },
        });

        if (!orgDetails) {
            throw new GraphQLError('Organisation Not Found', {
                extensions: {
                    code: HttpStatus.NOT_FOUND,
                },
            });
        }

        return orgDetails;
    }

    async getOrgService(serviceId: string): Promise<OrgService> {
        const orgService = await this.prisma.orgService.findUnique({
            where: {
                id: serviceId,
            },
        });

        return orgService;
    }

    async getOrgServiceUpviseDetails(orgServiceUpviseId: string): Promise<OrgServiceUpvise> {
        const orgServiceUpvise = await this.prisma.orgServiceUpvise.findUnique({
            where: {
                id: orgServiceUpviseId,
            },
        });

        return orgServiceUpvise;
    }
}
