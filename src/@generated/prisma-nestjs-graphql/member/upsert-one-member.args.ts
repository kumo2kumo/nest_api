import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { MemberCreateInput } from './member-create.input';
import { MemberUpdateInput } from './member-update.input';

@ArgsType()
export class UpsertOneMemberArgs {

    @Field(() => MemberWhereUniqueInput, {nullable:false})
    where!: MemberWhereUniqueInput;

    @Field(() => MemberCreateInput, {nullable:false})
    create!: MemberCreateInput;

    @Field(() => MemberUpdateInput, {nullable:false})
    update!: MemberUpdateInput;
}
