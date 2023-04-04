import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolWhereUniqueInput } from './tool-where-unique.input';
import { ToolCreateWithoutToolOwnersInput } from './tool-create-without-tool-owners.input';

@InputType()
export class ToolCreateOrConnectWithoutToolOwnersInput {

    @Field(() => ToolWhereUniqueInput, {nullable:false})
    where!: ToolWhereUniqueInput;

    @Field(() => ToolCreateWithoutToolOwnersInput, {nullable:false})
    create!: ToolCreateWithoutToolOwnersInput;
}
