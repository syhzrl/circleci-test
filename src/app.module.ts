import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { PrismaService } from './prisma/prisma.service';

import { OrganisationModule } from './organisation/organisation.module';
import { UserModule } from './user/user.module';
import { UpviseModule } from './upvise/upvise.module';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            sortSchema: true,
        }),
        UserModule,
        OrganisationModule,
        UpviseModule,
    ],
    providers: [PrismaService],
})

export class AppModule { }
