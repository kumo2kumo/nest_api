import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScheduleWhereInput } from './schedule-where.input';

@ArgsType()
export class DeleteManyScheduleArgs {

    @Field(() => ScheduleWhereInput, {nullable:true})
    where?: ScheduleWhereInput;
}
