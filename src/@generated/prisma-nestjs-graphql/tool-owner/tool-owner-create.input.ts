import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolCreateNestedOneWithoutToolOwnersInput } from '../tool/tool-create-nested-one-without-tool-owners.input';
import { UserCreateNestedOneWithoutToolsInput } from '../user/user-create-nested-one-without-tools.input';

@InputType()
export class ToolOwnerCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ToolCreateNestedOneWithoutToolOwnersInput, {nullable:false})
    tool!: ToolCreateNestedOneWithoutToolOwnersInput;

    @Field(() => UserCreateNestedOneWithoutToolsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutToolsInput;
}
