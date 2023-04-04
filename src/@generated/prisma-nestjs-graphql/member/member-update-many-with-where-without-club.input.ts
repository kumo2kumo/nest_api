import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberScalarWhereInput } from './member-scalar-where.input';
import { MemberUpdateManyMutationInput } from './member-update-many-mutation.input';

@InputType()
export class MemberUpdateManyWithWhereWithoutClubInput {

    @Field(() => MemberScalarWhereInput, {nullable:false})
    where!: MemberScalarWhereInput;

    @Field(() => MemberUpdateManyMutationInput, {nullable:false})
    data!: MemberUpdateManyMutationInput;
}
