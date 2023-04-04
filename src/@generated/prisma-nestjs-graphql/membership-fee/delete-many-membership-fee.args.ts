import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipFeeWhereInput } from './membership-fee-where.input';

@ArgsType()
export class DeleteManyMembershipFeeArgs {

    @Field(() => MembershipFeeWhereInput, {nullable:true})
    where?: MembershipFeeWhereInput;
}
