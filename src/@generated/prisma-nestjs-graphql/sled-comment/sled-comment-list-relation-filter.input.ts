import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentWhereInput } from './sled-comment-where.input';

@InputType()
export class SledCommentListRelationFilter {

    @Field(() => SledCommentWhereInput, {nullable:true})
    every?: SledCommentWhereInput;

    @Field(() => SledCommentWhereInput, {nullable:true})
    some?: SledCommentWhereInput;

    @Field(() => SledCommentWhereInput, {nullable:true})
    none?: SledCommentWhereInput;
}
