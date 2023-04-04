import { registerEnumType } from '@nestjs/graphql';

export enum MemberScalarFieldEnum {
    id = "id",
    name = "name",
    englishName = "englishName",
    number = "number",
    position = "position",
    birthday = "birthday",
    height = "height",
    weight = "weight",
    strongerSide = "strongerSide",
    from = "from",
    occupation = "occupation",
    hobby = "hobby",
    skill = "skill",
    startBelong = "startBelong",
    startSport = "startSport",
    chance = "chance",
    dream = "dream",
    goal = "goal",
    image = "image",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId",
    clubId = "clubId"
}


registerEnumType(MemberScalarFieldEnum, { name: 'MemberScalarFieldEnum', description: undefined })
