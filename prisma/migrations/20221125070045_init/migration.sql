-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "resetPasswordtoken" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TEXT NOT NULL,
    "lastActive" TEXT NOT NULL,
    "resetPasswordExpires" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganisationMember" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "isOrgManager" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,

    CONSTRAINT "OrganisationMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organisation" (
    "id" TEXT NOT NULL,
    "partnerCode" TEXT NOT NULL,
    "dateCreated" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "supportPlans" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "userCap" INTEGER NOT NULL,
    "orgServiceId" TEXT NOT NULL,

    CONSTRAINT "Organisation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrgService" (
    "id" TEXT NOT NULL,
    "orgServiceUpviseId" TEXT NOT NULL,

    CONSTRAINT "OrgService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrgServiceUpvise" (
    "id" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "adminEyesOnly" BOOLEAN NOT NULL,
    "userCap" INTEGER NOT NULL,
    "upviseAccountId" TEXT NOT NULL,

    CONSTRAINT "OrgServiceUpvise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UpviseAccount" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "creationDate" TEXT NOT NULL,
    "dbName" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailDropbox" TEXT NOT NULL,
    "expiryDate" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "partnerCode" TEXT NOT NULL,
    "privilege" TEXT NOT NULL,
    "shareToken" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "backupToken" TEXT NOT NULL,

    CONSTRAINT "UpviseAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OrganisationMember_userId_key" ON "OrganisationMember"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Organisation_orgServiceId_key" ON "Organisation"("orgServiceId");

-- CreateIndex
CREATE UNIQUE INDEX "OrgService_orgServiceUpviseId_key" ON "OrgService"("orgServiceUpviseId");

-- CreateIndex
CREATE UNIQUE INDEX "OrgServiceUpvise_upviseAccountId_key" ON "OrgServiceUpvise"("upviseAccountId");

-- AddForeignKey
ALTER TABLE "OrganisationMember" ADD CONSTRAINT "OrganisationMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganisationMember" ADD CONSTRAINT "OrganisationMember_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organisation" ADD CONSTRAINT "Organisation_orgServiceId_fkey" FOREIGN KEY ("orgServiceId") REFERENCES "OrgService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgService" ADD CONSTRAINT "OrgService_orgServiceUpviseId_fkey" FOREIGN KEY ("orgServiceUpviseId") REFERENCES "OrgServiceUpvise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgServiceUpvise" ADD CONSTRAINT "OrgServiceUpvise_upviseAccountId_fkey" FOREIGN KEY ("upviseAccountId") REFERENCES "UpviseAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
