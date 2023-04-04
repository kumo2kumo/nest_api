import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipFeeCreateManyUserInput } from './membership-fee-create-many-user.input';

@InputType()
export class MembershipFeeCreateManyUserInputEnvelope {

    @Field(() => [MembershipFeeCreateManyUserInput], {nullable:false})
    data!: Array<MembershipFeeCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
