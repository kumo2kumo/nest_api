import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserAvgAggregate } from './user-avg-aggregate.output';
import { UserSumAggregate } from './user-sum-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';

@ObjectType()
export class UserGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @HideField()
    password!: string;

    @Field(() => Int, {nullable:false})
    role!: number;

    @HideField()
    createdAt!: Date | string;

    @HideField()
    updatedAt?: Date | string;

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

    @Field(() => UserCountAggregate, {nullable:true})
    _count?: UserCountAggregate;

    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: UserAvgAggregate;

    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: UserSumAggregate;

    @Field(() => UserMinAggregate, {nullable:true})
    _min?: UserMinAggregate;

    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: UserMaxAggregate;
}
