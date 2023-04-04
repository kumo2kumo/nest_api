import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolOwnerUpdateInput } from './tool-owner-update.input';
import { ToolOwnerWhereUniqueInput } from './tool-owner-where-unique.input';

@ArgsType()
export class UpdateOneToolOwnerArgs {

    @Field(() => ToolOwnerUpdateInput, {nullable:false})
    data!: ToolOwnerUpdateInput;

    @Field(() => ToolOwnerWhereUniqueInput, {nullable:false})
    where!: ToolOwnerWhereUniqueInput;
}
