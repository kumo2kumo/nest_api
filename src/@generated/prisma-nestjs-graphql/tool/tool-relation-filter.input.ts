import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolWhereInput } from './tool-where.input';

@InputType()
export class ToolRelationFilter {

    @Field(() => ToolWhereInput, {nullable:true})
    is?: ToolWhereInput;

    @Field(() => ToolWhereInput, {nullable:true})
    isNot?: ToolWhereInput;
}
