import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubCreateWithoutSledsInput } from './club-create-without-sleds.input';

@InputType()
export class ClubCreateOrConnectWithoutSledsInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    where!: ClubWhereUniqueInput;

    @Field(() => ClubCreateWithoutSledsInput, {nullable:false})
    create!: ClubCreateWithoutSledsInput;
}
