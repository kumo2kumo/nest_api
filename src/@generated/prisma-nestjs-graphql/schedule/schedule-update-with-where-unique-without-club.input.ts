import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleUpdateWithoutClubInput } from './schedule-update-without-club.input';

@InputType()
export class ScheduleUpdateWithWhereUniqueWithoutClubInput {

    @Field(() => ScheduleWhereUniqueInput, {nullable:false})
    where!: ScheduleWhereUniqueInput;

    @Field(() => ScheduleUpdateWithoutClubInput, {nullable:false})
    data!: ScheduleUpdateWithoutClubInput;
}
