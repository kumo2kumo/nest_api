import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolWhereUniqueInput } from './tool-where-unique.input';
import { ToolUpdateWithoutClubInput } from './tool-update-without-club.input';

@InputType()
export class ToolUpdateWithWhereUniqueWithoutClubInput {

    @Field(() => ToolWhereUniqueInput, {nullable:false})
    where!: ToolWhereUniqueInput;

    @Field(() => ToolUpdateWithoutClubInput, {nullable:false})
    data!: ToolUpdateWithoutClubInput;
}
