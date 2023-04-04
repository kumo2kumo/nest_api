import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberUpdateManyMutationInput } from './member-update-many-mutation.input';
import { MemberWhereInput } from './member-where.input';

@ArgsType()
export class UpdateManyMemberArgs {

    @Field(() => MemberUpdateManyMutationInput, {nullable:false})
    data!: MemberUpdateManyMutationInput;

    @Field(() => MemberWhereInput, {nullable:true})
    where?: MemberWhereInput;
}
