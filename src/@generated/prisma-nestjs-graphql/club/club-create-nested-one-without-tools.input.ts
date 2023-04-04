import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutToolsInput } from './club-create-without-tools.input';
import { ClubCreateOrConnectWithoutToolsInput } from './club-create-or-connect-without-tools.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@InputType()
export class ClubCreateNestedOneWithoutToolsInput {

    @Field(() => ClubCreateWithoutToolsInput, {nullable:true})
    create?: ClubCreateWithoutToolsInput;

    @Field(() => ClubCreateOrConnectWithoutToolsInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutToolsInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;
}
