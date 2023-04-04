import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutToolsInput } from '../user/user-create-nested-one-without-tools.input';

@InputType()
export class ToolOwnerCreateWithoutToolInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutToolsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutToolsInput;
}
