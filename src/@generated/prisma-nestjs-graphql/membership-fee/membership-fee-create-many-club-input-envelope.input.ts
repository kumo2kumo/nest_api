import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipFeeCreateManyClubInput } from './membership-fee-create-many-club.input';

@InputType()
export class MembershipFeeCreateManyClubInputEnvelope {

    @Field(() => [MembershipFeeCreateManyClubInput], {nullable:false})
    data!: Array<MembershipFeeCreateManyClubInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
