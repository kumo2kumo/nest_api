import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MembershipFeeCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    january!: number;

    @Field(() => Int, {nullable:false})
    february!: number;

    @Field(() => Int, {nullable:false})
    march!: number;

    @Field(() => Int, {nullable:false})
    april!: number;

    @Field(() => Int, {nullable:false})
    may!: number;

    @Field(() => Int, {nullable:false})
    june!: number;

    @Field(() => Int, {nullable:false})
    july!: number;

    @Field(() => Int, {nullable:false})
    august!: number;

    @Field(() => Int, {nullable:false})
    september!: number;

    @Field(() => Int, {nullable:false})
    october!: number;

    @Field(() => Int, {nullable:false})
    november!: number;

    @Field(() => Int, {nullable:false})
    december!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    clubId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
