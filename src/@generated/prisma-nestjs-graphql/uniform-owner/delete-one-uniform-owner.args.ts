import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UniformOwnerWhereUniqueInput } from './uniform-owner-where-unique.input';

@ArgsType()
export class DeleteOneUniformOwnerArgs {

    @Field(() => UniformOwnerWhereUniqueInput, {nullable:false})
    where!: UniformOwnerWhereUniqueInput;
}
