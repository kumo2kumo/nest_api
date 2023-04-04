import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutMembershipFeesInput } from '../user/user-create-nested-one-without-membership-fees.input';

@InputType()
export class MembershipFeeCreateWithoutClubInput {

    @Field(() => Boolean, {nullable:false})
    january!: boolean;

    @Field(() => Boolean, {nullable:false})
    february!: boolean;

    @Field(() => Boolean, {nullable:false})
    march!: boolean;

    @Field(() => Boolean, {nullable:false})
    april!: boolean;

    @Field(() => Boolean, {nullable:false})
    may!: boolean;

    @Field(() => Boolean, {nullable:false})
    june!: boolean;

    @Field(() => Boolean, {nullable:false})
    july!: boolean;

    @Field(() => Boolean, {nullable:false})
    august!: boolean;

    @Field(() => Boolean, {nullable:false})
    september!: boolean;

    @Field(() => Boolean, {nullable:false})
    october!: boolean;

    @Field(() => Boolean, {nullable:false})
    november!: boolean;

    @Field(() => Boolean, {nullable:false})
    december!: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutMembershipFeesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutMembershipFeesInput;
}
