import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolOwnerWhereUniqueInput } from './tool-owner-where-unique.input';
import { ToolOwnerUpdateWithoutUserInput } from './tool-owner-update-without-user.input';
import { ToolOwnerCreateWithoutUserInput } from './tool-owner-create-without-user.input';

@InputType()
export class ToolOwnerUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ToolOwnerWhereUniqueInput, {nullable:false})
    where!: ToolOwnerWhereUniqueInput;

    @Field(() => ToolOwnerUpdateWithoutUserInput, {nullable:false})
    update!: ToolOwnerUpdateWithoutUserInput;

    @Field(() => ToolOwnerCreateWithoutUserInput, {nullable:false})
    create!: ToolOwnerCreateWithoutUserInput;
}
