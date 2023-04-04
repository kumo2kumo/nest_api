import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberCreateWithoutUserInput } from './member-create-without-user.input';
import { MemberCreateOrConnectWithoutUserInput } from './member-create-or-connect-without-user.input';
import { MemberWhereUniqueInput } from './member-where-unique.input';

@InputType()
export class MemberCreateNestedOneWithoutUserInput {

    @Field(() => MemberCreateWithoutUserInput, {nullable:true})
    create?: MemberCreateWithoutUserInput;

    @Field(() => MemberCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: MemberCreateOrConnectWithoutUserInput;

    @Field(() => MemberWhereUniqueInput, {nullable:true})
    connect?: MemberWhereUniqueInput;
}
