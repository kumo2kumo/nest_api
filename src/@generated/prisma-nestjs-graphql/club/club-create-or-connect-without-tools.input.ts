import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubCreateWithoutToolsInput } from './club-create-without-tools.input';

@InputType()
export class ClubCreateOrConnectWithoutToolsInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    where!: ClubWhereUniqueInput;

    @Field(() => ClubCreateWithoutToolsInput, {nullable:false})
    create!: ClubCreateWithoutToolsInput;
}
