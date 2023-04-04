import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ClubCount {

    @Field(() => Int, {nullable:false})
    users?: number;

    @Field(() => Int, {nullable:false})
    schedules?: number;

    @Field(() => Int, {nullable:false})
    members?: number;

    @Field(() => Int, {nullable:false})
    pictureReports?: number;

    @Field(() => Int, {nullable:false})
    reports?: number;

    @Field(() => Int, {nullable:false})
    tools?: number;

    @Field(() => Int, {nullable:false})
    uniformOwners?: number;

    @Field(() => Int, {nullable:false})
    sleds?: number;

    @Field(() => Int, {nullable:false})
    eventFees?: number;

    @Field(() => Int, {nullable:false})
    membershipFees?: number;
}
