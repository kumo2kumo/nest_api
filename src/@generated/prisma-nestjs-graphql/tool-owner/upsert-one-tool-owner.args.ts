import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolOwnerWhereUniqueInput } from './tool-owner-where-unique.input';
import { ToolOwnerCreateInput } from './tool-owner-create.input';
import { ToolOwnerUpdateInput } from './tool-owner-update.input';

@ArgsType()
export class UpsertOneToolOwnerArgs {

    @Field(() => ToolOwnerWhereUniqueInput, {nullable:false})
    where!: ToolOwnerWhereUniqueInput;

    @Field(() => ToolOwnerCreateInput, {nullable:false})
    create!: ToolOwnerCreateInput;

    @Field(() => ToolOwnerUpdateInput, {nullable:false})
    update!: ToolOwnerUpdateInput;
}
