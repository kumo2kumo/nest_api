import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolCreateWithoutToolOwnersInput } from './tool-create-without-tool-owners.input';
import { ToolCreateOrConnectWithoutToolOwnersInput } from './tool-create-or-connect-without-tool-owners.input';
import { ToolWhereUniqueInput } from './tool-where-unique.input';

@InputType()
export class ToolCreateNestedOneWithoutToolOwnersInput {

    @Field(() => ToolCreateWithoutToolOwnersInput, {nullable:true})
    create?: ToolCreateWithoutToolOwnersInput;

    @Field(() => ToolCreateOrConnectWithoutToolOwnersInput, {nullable:true})
    connectOrCreate?: ToolCreateOrConnectWithoutToolOwnersInput;

    @Field(() => ToolWhereUniqueInput, {nullable:true})
    connect?: ToolWhereUniqueInput;
}
