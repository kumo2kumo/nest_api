import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    password = "password",
    role = "role",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    clubId = "clubId",
    score = "score",
    assist = "assist",
    countTool = "countTool",
    absence = "absence",
    lateness = "lateness",
    contactLate = "contactLate",
    countPicture = "countPicture",
    countReport = "countReport",
    commentLate = "commentLate",
    insurance = "insurance"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
