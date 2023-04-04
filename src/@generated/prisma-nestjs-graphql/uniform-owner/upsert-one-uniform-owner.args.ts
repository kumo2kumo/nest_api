import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UniformOwnerWhereUniqueInput } from './uniform-owner-where-unique.input';
import { UniformOwnerCreateInput } from './uniform-owner-create.input';
import { UniformOwnerUpdateInput } from './uniform-owner-update.input';

@ArgsType()
export class UpsertOneUniformOwnerArgs {

    @Field(() => UniformOwnerWhereUniqueInput, {nullable:false})
    where!: UniformOwnerWhereUniqueInput;

    @Field(() => UniformOwnerCreateInput, {nullable:false})
    create!: UniformOwnerCreateInput;

    @Field(() => UniformOwnerUpdateInput, {nullable:false})
    update!: UniformOwnerUpdateInput;
}
