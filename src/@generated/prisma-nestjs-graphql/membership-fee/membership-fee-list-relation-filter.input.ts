import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipFeeWhereInput } from './membership-fee-where.input';

@InputType()
export class MembershipFeeListRelationFilter {

    @Field(() => MembershipFeeWhereInput, {nullable:true})
    every?: MembershipFeeWhereInput;

    @Field(() => MembershipFeeWhereInput, {nullable:true})
    some?: MembershipFeeWhereInput;

    @Field(() => MembershipFeeWhereInput, {nullable:true})
    none?: MembershipFeeWhereInput;
}
