import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UniformOwnerWhereInput } from './uniform-owner-where.input';

@ArgsType()
export class DeleteManyUniformOwnerArgs {

    @Field(() => UniformOwnerWhereInput, {nullable:true})
    where?: UniformOwnerWhereInput;
}
