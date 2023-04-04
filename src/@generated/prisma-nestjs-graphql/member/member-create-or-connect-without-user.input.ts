import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { MemberCreateWithoutUserInput } from './member-create-without-user.input';

@InputType()
export class MemberCreateOrConnectWithoutUserInput {

    @Field(() => MemberWhereUniqueInput, {nullable:false})
    where!: MemberWhereUniqueInput;

    @Field(() => MemberCreateWithoutUserInput, {nullable:false})
    create!: MemberCreateWithoutUserInput;
}
