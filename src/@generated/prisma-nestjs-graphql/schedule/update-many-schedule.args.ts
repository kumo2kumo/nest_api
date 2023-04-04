import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScheduleUpdateManyMutationInput } from './schedule-update-many-mutation.input';
import { ScheduleWhereInput } from './schedule-where.input';

@ArgsType()
export class UpdateManyScheduleArgs {

    @Field(() => ScheduleUpdateManyMutationInput, {nullable:false})
    data!: ScheduleUpdateManyMutationInput;

    @Field(() => ScheduleWhereInput, {nullable:true})
    where?: ScheduleWhereInput;
}
