import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutSchedulesInput } from './club-create-without-schedules.input';
import { ClubCreateOrConnectWithoutSchedulesInput } from './club-create-or-connect-without-schedules.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@InputType()
export class ClubCreateNestedOneWithoutSchedulesInput {

    @Field(() => ClubCreateWithoutSchedulesInput, {nullable:true})
    create?: ClubCreateWithoutSchedulesInput;

    @Field(() => ClubCreateOrConnectWithoutSchedulesInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutSchedulesInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;
}
