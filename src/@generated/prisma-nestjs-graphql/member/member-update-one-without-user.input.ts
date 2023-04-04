import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberCreateWithoutUserInput } from './member-create-without-user.input';
import { MemberCreateOrConnectWithoutUserInput } from './member-create-or-connect-without-user.input';
import { MemberUpsertWithoutUserInput } from './member-upsert-without-user.input';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { MemberUpdateWithoutUserInput } from './member-update-without-user.input';

@InputType()
export class MemberUpdateOneWithoutUserInput {

    @Field(() => MemberCreateWithoutUserInput, {nullable:true})
    create?: MemberCreateWithoutUserInput;

    @Field(() => MemberCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: MemberCreateOrConnectWithoutUserInput;

    @Field(() => MemberUpsertWithoutUserInput, {nullable:true})
    upsert?: MemberUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => MemberWhereUniqueInput, {nullable:true})
    connect?: MemberWhereUniqueInput;

    @Field(() => MemberUpdateWithoutUserInput, {nullable:true})
    update?: MemberUpdateWithoutUserInput;
}
