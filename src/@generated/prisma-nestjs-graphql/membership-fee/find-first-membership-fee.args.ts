import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipFeeWhereInput } from './membership-fee-where.input';
import { MembershipFeeOrderByWithRelationInput } from './membership-fee-order-by-with-relation.input';
import { MembershipFeeWhereUniqueInput } from './membership-fee-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MembershipFeeScalarFieldEnum } from './membership-fee-scalar-field.enum';

@ArgsType()
export class FindFirstMembershipFeeArgs {

    @Field(() => MembershipFeeWhereInput, {nullable:true})
    where?: MembershipFeeWhereInput;

    @Field(() => [MembershipFeeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MembershipFeeOrderByWithRelationInput>;

    @Field(() => MembershipFeeWhereUniqueInput, {nullable:true})
    cursor?: MembershipFeeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MembershipFeeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MembershipFeeScalarFieldEnum>;
}
