import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScheduleUpdateInput } from './schedule-update.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';

@ArgsType()
export class UpdateOneScheduleArgs {

    @Field(() => ScheduleUpdateInput, {nullable:false})
    data!: ScheduleUpdateInput;

    @Field(() => ScheduleWhereUniqueInput, {nullable:false})
    where!: ScheduleWhereUniqueInput;
}
