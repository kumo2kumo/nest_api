import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberWhereInput } from './member-where.input';

@ArgsType()
export class DeleteManyMemberArgs {

    @Field(() => MemberWhereInput, {nullable:true})
    where?: MemberWhereInput;
}
