import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';

@ArgsType()
export class DeleteOneScheduleArgs {

    @Field(() => ScheduleWhereUniqueInput, {nullable:false})
    where!: ScheduleWhereUniqueInput;
}
