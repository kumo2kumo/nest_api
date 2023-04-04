import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleUpdateWithoutClubInput } from './schedule-update-without-club.input';
import { ScheduleCreateWithoutClubInput } from './schedule-create-without-club.input';

@InputType()
export class ScheduleUpsertWithWhereUniqueWithoutClubInput {

    @Field(() => ScheduleWhereUniqueInput, {nullable:false})
    where!: ScheduleWhereUniqueInput;

    @Field(() => ScheduleUpdateWithoutClubInput, {nullable:false})
    update!: ScheduleUpdateWithoutClubInput;

    @Field(() => ScheduleCreateWithoutClubInput, {nullable:false})
    create!: ScheduleCreateWithoutClubInput;
}
