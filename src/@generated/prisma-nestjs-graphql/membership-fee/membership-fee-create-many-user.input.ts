import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MembershipFeeCreateManyUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Boolean, {nullable:false})
    january!: boolean;

    @Field(() => Boolean, {nullable:false})
    february!: boolean;

    @Field(() => Boolean, {nullable:false})
    march!: boolean;

    @Field(() => Boolean, {nullable:false})
    april!: boolean;

    @Field(() => Boolean, {nullable:false})
    may!: boolean;

    @Field(() => Boolean, {nullable:false})
    june!: boolean;

    @Field(() => Boolean, {nullable:false})
    july!: boolean;

    @Field(() => Boolean, {nullable:false})
    august!: boolean;

    @Field(() => Boolean, {nullable:false})
    september!: boolean;

    @Field(() => Boolean, {nullable:false})
    october!: boolean;

    @Field(() => Boolean, {nullable:false})
    november!: boolean;

    @Field(() => Boolean, {nullable:false})
    december!: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    clubId!: number;
}
