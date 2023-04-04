import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubCreateWithoutSchedulesInput } from './club-create-without-schedules.input';

@InputType()
export class ClubCreateOrConnectWithoutSchedulesInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    where!: ClubWhereUniqueInput;

    @Field(() => ClubCreateWithoutSchedulesInput, {nullable:false})
    create!: ClubCreateWithoutSchedulesInput;
}
