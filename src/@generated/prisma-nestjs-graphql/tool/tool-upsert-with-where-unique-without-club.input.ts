import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolWhereUniqueInput } from './tool-where-unique.input';
import { ToolUpdateWithoutClubInput } from './tool-update-without-club.input';
import { ToolCreateWithoutClubInput } from './tool-create-without-club.input';

@InputType()
export class ToolUpsertWithWhereUniqueWithoutClubInput {

    @Field(() => ToolWhereUniqueInput, {nullable:false})
    where!: ToolWhereUniqueInput;

    @Field(() => ToolUpdateWithoutClubInput, {nullable:false})
    update!: ToolUpdateWithoutClubInput;

    @Field(() => ToolCreateWithoutClubInput, {nullable:false})
    create!: ToolCreateWithoutClubInput;
}
