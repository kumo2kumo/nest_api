import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolOwnerWhereUniqueInput } from './tool-owner-where-unique.input';
import { ToolOwnerCreateWithoutToolInput } from './tool-owner-create-without-tool.input';

@InputType()
export class ToolOwnerCreateOrConnectWithoutToolInput {

    @Field(() => ToolOwnerWhereUniqueInput, {nullable:false})
    where!: ToolOwnerWhereUniqueInput;

    @Field(() => ToolOwnerCreateWithoutToolInput, {nullable:false})
    create!: ToolOwnerCreateWithoutToolInput;
}
