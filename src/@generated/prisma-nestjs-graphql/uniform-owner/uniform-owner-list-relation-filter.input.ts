import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UniformOwnerWhereInput } from './uniform-owner-where.input';

@InputType()
export class UniformOwnerListRelationFilter {

    @Field(() => UniformOwnerWhereInput, {nullable:true})
    every?: UniformOwnerWhereInput;

    @Field(() => UniformOwnerWhereInput, {nullable:true})
    some?: UniformOwnerWhereInput;

    @Field(() => UniformOwnerWhereInput, {nullable:true})
    none?: UniformOwnerWhereInput;
}
