import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubCreateWithoutMembershipFeesInput } from './club-create-without-membership-fees.input';

@InputType()
export class ClubCreateOrConnectWithoutMembershipFeesInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    where!: ClubWhereUniqueInput;

    @Field(() => ClubCreateWithoutMembershipFeesInput, {nullable:false})
    create!: ClubCreateWithoutMembershipFeesInput;
}
