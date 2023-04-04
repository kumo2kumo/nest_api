import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolCreateWithoutToolOwnersInput } from './tool-create-without-tool-owners.input';
import { ToolCreateOrConnectWithoutToolOwnersInput } from './tool-create-or-connect-without-tool-owners.input';
import { ToolUpsertWithoutToolOwnersInput } from './tool-upsert-without-tool-owners.input';
import { ToolWhereUniqueInput } from './tool-where-unique.input';
import { ToolUpdateWithoutToolOwnersInput } from './tool-update-without-tool-owners.input';

@InputType()
export class ToolUpdateOneRequiredWithoutToolOwnersInput {

    @Field(() => ToolCreateWithoutToolOwnersInput, {nullable:true})
    create?: ToolCreateWithoutToolOwnersInput;

    @Field(() => ToolCreateOrConnectWithoutToolOwnersInput, {nullable:true})
    connectOrCreate?: ToolCreateOrConnectWithoutToolOwnersInput;

    @Field(() => ToolUpsertWithoutToolOwnersInput, {nullable:true})
    upsert?: ToolUpsertWithoutToolOwnersInput;

    @Field(() => ToolWhereUniqueInput, {nullable:true})
    connect?: ToolWhereUniqueInput;

    @Field(() => ToolUpdateWithoutToolOwnersInput, {nullable:true})
    update?: ToolUpdateWithoutToolOwnersInput;
}
