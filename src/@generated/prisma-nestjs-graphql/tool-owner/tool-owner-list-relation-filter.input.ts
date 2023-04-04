import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolOwnerWhereInput } from './tool-owner-where.input';

@InputType()
export class ToolOwnerListRelationFilter {

    @Field(() => ToolOwnerWhereInput, {nullable:true})
    every?: ToolOwnerWhereInput;

    @Field(() => ToolOwnerWhereInput, {nullable:true})
    some?: ToolOwnerWhereInput;

    @Field(() => ToolOwnerWhereInput, {nullable:true})
    none?: ToolOwnerWhereInput;
}
