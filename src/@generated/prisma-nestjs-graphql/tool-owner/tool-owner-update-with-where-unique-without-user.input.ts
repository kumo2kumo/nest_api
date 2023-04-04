import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolOwnerWhereUniqueInput } from './tool-owner-where-unique.input';
import { ToolOwnerUpdateWithoutUserInput } from './tool-owner-update-without-user.input';

@InputType()
export class ToolOwnerUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ToolOwnerWhereUniqueInput, {nullable:false})
    where!: ToolOwnerWhereUniqueInput;

    @Field(() => ToolOwnerUpdateWithoutUserInput, {nullable:false})
    data!: ToolOwnerUpdateWithoutUserInput;
}
