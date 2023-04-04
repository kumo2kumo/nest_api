import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipFeeCreateManyInput } from './membership-fee-create-many.input';

@ArgsType()
export class CreateManyMembershipFeeArgs {

    @Field(() => [MembershipFeeCreateManyInput], {nullable:false})
    data!: Array<MembershipFeeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
