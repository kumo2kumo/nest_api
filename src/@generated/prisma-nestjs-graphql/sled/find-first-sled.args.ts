import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SledWhereInput } from './sled-where.input';
import { SledOrderByWithRelationInput } from './sled-order-by-with-relation.input';
import { SledWhereUniqueInput } from './sled-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SledScalarFieldEnum } from './sled-scalar-field.enum';

@ArgsType()
export class FindFirstSledArgs {

    @Field(() => SledWhereInput, {nullable:true})
    where?: SledWhereInput;

    @Field(() => [SledOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SledOrderByWithRelationInput>;

    @Field(() => SledWhereUniqueInput, {nullable:true})
    cursor?: SledWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SledScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SledScalarFieldEnum>;
}
