import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolOwnerWhereUniqueInput } from './tool-owner-where-unique.input';
import { ToolOwnerUpdateWithoutToolInput } from './tool-owner-update-without-tool.input';

@InputType()
export class ToolOwnerUpdateWithWhereUniqueWithoutToolInput {

    @Field(() => ToolOwnerWhereUniqueInput, {nullable:false})
    where!: ToolOwnerWhereUniqueInput;

    @Field(() => ToolOwnerUpdateWithoutToolInput, {nullable:false})
    data!: ToolOwnerUpdateWithoutToolInput;
}
