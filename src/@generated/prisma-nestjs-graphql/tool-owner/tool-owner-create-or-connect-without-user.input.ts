import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolOwnerWhereUniqueInput } from './tool-owner-where-unique.input';
import { ToolOwnerCreateWithoutUserInput } from './tool-owner-create-without-user.input';

@InputType()
export class ToolOwnerCreateOrConnectWithoutUserInput {

    @Field(() => ToolOwnerWhereUniqueInput, {nullable:false})
    where!: ToolOwnerWhereUniqueInput;

    @Field(() => ToolOwnerCreateWithoutUserInput, {nullable:false})
    create!: ToolOwnerCreateWithoutUserInput;
}
