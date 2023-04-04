import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleCreateInput } from './schedule-create.input';
import { ScheduleUpdateInput } from './schedule-update.input';

@ArgsType()
export class UpsertOneScheduleArgs {

    @Field(() => ScheduleWhereUniqueInput, {nullable:false})
    where!: ScheduleWhereUniqueInput;

    @Field(() => ScheduleCreateInput, {nullable:false})
    create!: ScheduleCreateInput;

    @Field(() => ScheduleUpdateInput, {nullable:false})
    update!: ScheduleUpdateInput;
}
