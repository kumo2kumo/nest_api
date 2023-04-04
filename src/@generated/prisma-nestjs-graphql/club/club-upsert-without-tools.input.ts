import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubUpdateWithoutToolsInput } from './club-update-without-tools.input';
import { ClubCreateWithoutToolsInput } from './club-create-without-tools.input';

@InputType()
export class ClubUpsertWithoutToolsInput {

    @Field(() => ClubUpdateWithoutToolsInput, {nullable:false})
    update!: ClubUpdateWithoutToolsInput;

    @Field(() => ClubCreateWithoutToolsInput, {nullable:false})
    create!: ClubCreateWithoutToolsInput;
}
