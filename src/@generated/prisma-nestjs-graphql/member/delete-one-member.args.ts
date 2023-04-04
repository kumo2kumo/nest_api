import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberWhereUniqueInput } from './member-where-unique.input';

@ArgsType()
export class DeleteOneMemberArgs {

    @Field(() => MemberWhereUniqueInput, {nullable:false})
    where!: MemberWhereUniqueInput;
}
