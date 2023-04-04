import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @HideField()
    password!: number;

    @Field(() => Int, {nullable:false})
    role!: number;

    @HideField()
    createdAt!: number;

    @HideField()
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    clubId!: number;

    @Field(() => Int, {nullable:false})
    score!: number;

    @Field(() => Int, {nullable:false})
    assist!: number;

    @Field(() => Int, {nullable:false})
    countTool!: number;

    @Field(() => Int, {nullable:false})
    absence!: number;

    @Field(() => Int, {nullable:false})
    lateness!: number;

    @Field(() => Int, {nullable:false})
    contactLate!: number;

    @Field(() => Int, {nullable:false})
    countPicture!: number;

    @Field(() => Int, {nullable:false})
    countReport!: number;

    @Field(() => Int, {nullable:false})
    commentLate!: number;

    @Field(() => Int, {nullable:false})
    insurance!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
