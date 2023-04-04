import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleCreateWithoutClubInput } from './schedule-create-without-club.input';

@InputType()
export class ScheduleCreateOrConnectWithoutClubInput {

    @Field(() => ScheduleWhereUniqueInput, {nullable:false})
    where!: ScheduleWhereUniqueInput;

    @Field(() => ScheduleCreateWithoutClubInput, {nullable:false})
    create!: ScheduleCreateWithoutClubInput;
}
