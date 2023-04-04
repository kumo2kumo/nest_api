import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SledCommentWhereInput } from './sled-comment-where.input';
import { SledCommentOrderByWithRelationInput } from './sled-comment-order-by-with-relation.input';
import { SledCommentWhereUniqueInput } from './sled-comment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SledCommentScalarFieldEnum } from './sled-comment-scalar-field.enum';

@ArgsType()
export class FindFirstSledCommentArgs {

    @Field(() => SledCommentWhereInput, {nullable:true})
    where?: SledCommentWhereInput;

    @Field(() => [SledCommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SledCommentOrderByWithRelationInput>;

    @Field(() => SledCommentWhereUniqueInput, {nullable:true})
    cursor?: SledCommentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SledCommentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SledCommentScalarFieldEnum>;
}
