import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolUpdateWithoutToolOwnersInput } from './tool-update-without-tool-owners.input';
import { ToolCreateWithoutToolOwnersInput } from './tool-create-without-tool-owners.input';

@InputType()
export class ToolUpsertWithoutToolOwnersInput {

    @Field(() => ToolUpdateWithoutToolOwnersInput, {nullable:false})
    update!: ToolUpdateWithoutToolOwnersInput;

    @Field(() => ToolCreateWithoutToolOwnersInput, {nullable:false})
    create!: ToolCreateWithoutToolOwnersInput;
}
