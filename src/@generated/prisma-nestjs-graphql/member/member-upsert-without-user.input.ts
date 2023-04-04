import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberUpdateWithoutUserInput } from './member-update-without-user.input';
import { MemberCreateWithoutUserInput } from './member-create-without-user.input';

@InputType()
export class MemberUpsertWithoutUserInput {

    @Field(() => MemberUpdateWithoutUserInput, {nullable:false})
    update!: MemberUpdateWithoutUserInput;

    @Field(() => MemberCreateWithoutUserInput, {nullable:false})
    create!: MemberCreateWithoutUserInput;
}
