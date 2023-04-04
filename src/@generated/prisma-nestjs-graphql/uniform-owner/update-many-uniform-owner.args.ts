import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UniformOwnerUpdateManyMutationInput } from './uniform-owner-update-many-mutation.input';
import { UniformOwnerWhereInput } from './uniform-owner-where.input';

@ArgsType()
export class UpdateManyUniformOwnerArgs {

    @Field(() => UniformOwnerUpdateManyMutationInput, {nullable:false})
    data!: UniformOwnerUpdateManyMutationInput;

    @Field(() => UniformOwnerWhereInput, {nullable:true})
    where?: UniformOwnerWhereInput;
}
