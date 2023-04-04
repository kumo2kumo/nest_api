import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    pictureReports?: number;

    @Field(() => Int, {nullable:false})
    reports?: number;

    @Field(() => Int, {nullable:false})
    reportComments?: number;

    @Field(() => Int, {nullable:false})
    tools?: number;

    @Field(() => Int, {nullable:false})
    uniformOwners?: number;

    @Field(() => Int, {nullable:false})
    postSledComments?: number;

    @Field(() => Int, {nullable:false})
    updateSledComments?: number;

    @Field(() => Int, {nullable:false})
    eventFees?: number;

    @Field(() => Int, {nullable:false})
    membershipFees?: number;
}
