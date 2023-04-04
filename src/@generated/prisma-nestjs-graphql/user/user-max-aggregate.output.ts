import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @HideField()
    password?: string;

    @Field(() => Int, {nullable:true})
    role?: number;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    clubId?: number;

    @Field(() => Int, {nullable:true})
    score?: number;

    @Field(() => Int, {nullable:true})
    assist?: number;

    @Field(() => Int, {nullable:true})
    countTool?: number;

    @Field(() => Int, {nullable:true})
    absence?: number;

    @Field(() => Int, {nullable:true})
    lateness?: number;

    @Field(() => Int, {nullable:true})
    contactLate?: number;

    @Field(() => Int, {nullable:true})
    countPicture?: number;

    @Field(() => Int, {nullable:true})
    countReport?: number;

    @Field(() => Int, {nullable:true})
    commentLate?: number;

    @Field(() => Int, {nullable:true})
    insurance?: number;
}
