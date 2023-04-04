import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UniformOwnerWhereInput } from './uniform-owner-where.input';
import { UniformOwnerOrderByWithRelationInput } from './uniform-owner-order-by-with-relation.input';
import { UniformOwnerWhereUniqueInput } from './uniform-owner-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UniformOwnerScalarFieldEnum } from './uniform-owner-scalar-field.enum';

@ArgsType()
export class FindFirstUniformOwnerArgs {

    @Field(() => UniformOwnerWhereInput, {nullable:true})
    where?: UniformOwnerWhereInput;

    @Field(() => [UniformOwnerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UniformOwnerOrderByWithRelationInput>;

    @Field(() => UniformOwnerWhereUniqueInput, {nullable:true})
    cursor?: UniformOwnerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UniformOwnerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UniformOwnerScalarFieldEnum>;
}
