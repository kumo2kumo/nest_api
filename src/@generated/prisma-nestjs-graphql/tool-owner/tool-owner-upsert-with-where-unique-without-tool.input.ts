import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolOwnerWhereUniqueInput } from './tool-owner-where-unique.input';
import { ToolOwnerUpdateWithoutToolInput } from './tool-owner-update-without-tool.input';
import { ToolOwnerCreateWithoutToolInput } from './tool-owner-create-without-tool.input';

@InputType()
export class ToolOwnerUpsertWithWhereUniqueWithoutToolInput {

    @Field(() => ToolOwnerWhereUniqueInput, {nullable:false})
    where!: ToolOwnerWhereUniqueInput;

    @Field(() => ToolOwnerUpdateWithoutToolInput, {nullable:false})
    update!: ToolOwnerUpdateWithoutToolInput;

    @Field(() => ToolOwnerCreateWithoutToolInput, {nullable:false})
    create!: ToolOwnerCreateWithoutToolInput;
}
