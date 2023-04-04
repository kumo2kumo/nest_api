import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolWhereUniqueInput } from './tool-where-unique.input';
import { ToolCreateInput } from './tool-create.input';
import { ToolUpdateInput } from './tool-update.input';

@ArgsType()
export class UpsertOneToolArgs {

    @Field(() => ToolWhereUniqueInput, {nullable:false})
    where!: ToolWhereUniqueInput;

    @Field(() => ToolCreateInput, {nullable:false})
    create!: ToolCreateInput;

    @Field(() => ToolUpdateInput, {nullable:false})
    update!: ToolUpdateInput;
}
