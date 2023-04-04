import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UniformOwnerScalarWhereInput } from './uniform-owner-scalar-where.input';
import { UniformOwnerUpdateManyMutationInput } from './uniform-owner-update-many-mutation.input';

@InputType()
export class UniformOwnerUpdateManyWithWhereWithoutUserInput {

    @Field(() => UniformOwnerScalarWhereInput, {nullable:false})
    where!: UniformOwnerScalarWhereInput;

    @Field(() => UniformOwnerUpdateManyMutationInput, {nullable:false})
    data!: UniformOwnerUpdateManyMutationInput;
}
