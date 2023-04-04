import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolUpdateInput } from './tool-update.input';
import { ToolWhereUniqueInput } from './tool-where-unique.input';

@ArgsType()
export class UpdateOneToolArgs {

    @Field(() => ToolUpdateInput, {nullable:false})
    data!: ToolUpdateInput;

    @Field(() => ToolWhereUniqueInput, {nullable:false})
    where!: ToolWhereUniqueInput;
}
