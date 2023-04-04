import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipFeeCreateInput } from './membership-fee-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMembershipFeeArgs {

    @Field(() => MembershipFeeCreateInput, {nullable:false})
    @ValidateNested()
    @Type(() => MembershipFeeCreateInput)
    data!: MembershipFeeCreateInput;
}
