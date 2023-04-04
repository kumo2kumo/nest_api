import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UniformOwnerUpdateInput } from './uniform-owner-update.input';
import { UniformOwnerWhereUniqueInput } from './uniform-owner-where-unique.input';

@ArgsType()
export class UpdateOneUniformOwnerArgs {

    @Field(() => UniformOwnerUpdateInput, {nullable:false})
    data!: UniformOwnerUpdateInput;

    @Field(() => UniformOwnerWhereUniqueInput, {nullable:false})
    where!: UniformOwnerWhereUniqueInput;
}
