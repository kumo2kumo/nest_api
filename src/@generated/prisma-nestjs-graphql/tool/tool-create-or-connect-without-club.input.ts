import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolWhereUniqueInput } from './tool-where-unique.input';
import { ToolCreateWithoutClubInput } from './tool-create-without-club.input';

@InputType()
export class ToolCreateOrConnectWithoutClubInput {

    @Field(() => ToolWhereUniqueInput, {nullable:false})
    where!: ToolWhereUniqueInput;

    @Field(() => ToolCreateWithoutClubInput, {nullable:false})
    create!: ToolCreateWithoutClubInput;
}
