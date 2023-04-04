import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberUpdateInput } from './member-update.input';
import { MemberWhereUniqueInput } from './member-where-unique.input';

@ArgsType()
export class UpdateOneMemberArgs {

    @Field(() => MemberUpdateInput, {nullable:false})
    data!: MemberUpdateInput;

    @Field(() => MemberWhereUniqueInput, {nullable:false})
    where!: MemberWhereUniqueInput;
}
