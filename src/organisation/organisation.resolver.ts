import { Resolver, Query, Args, ResolveProperty, Parent } from '@nestjs/graphql';
import { GetOrgDetailsInput } from './dto/get-org-details.input';
import { OrgServiceUpvise } from './entities/org-service-upvise.entity';
import { OrgService } from './entities/org-service.entity';
import { Organisation } from './entities/organisation.entity';
import { OrganisationService } from './organisation.service';

@Resolver(() => Organisation)
export class OrganisationResolver {
    constructor(private readonly orgService: OrganisationService) { }

    @Query(() => [Organisation], { name: 'getAllOrganisations' })
    getAll(): Promise<Organisation[]> {
        return this.orgService.getAll();
    }

    @Query(() => Organisation, { name: 'getOrgDetails' })
    getOrgDetails(@Args('orgId') orgId: string): Promise<Organisation> {
        return this.orgService.getOrgDetails(orgId);
    }

    @ResolveProperty(() => OrgService)
    async getOrgService(@Parent() org: Organisation): Promise<OrgService> {
        const orgId = org.orgServiceId;
        return this.orgService.getOrgService(orgId);
    }

    @Query(() => OrgServiceUpvise, { name: 'getOrgServiceUpviseDetails' })
    getOrgServiceUpviseDetails(@Args('orgServiceUpviseId') orgServiceUpviseId: string): Promise<OrgServiceUpvise> {
        return this.orgService.getOrgServiceUpviseDetails(orgServiceUpviseId);
    }
}
