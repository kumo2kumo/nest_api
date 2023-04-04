import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleScalarWhereInput } from './schedule-scalar-where.input';
import { ScheduleUpdateManyMutationInput } from './schedule-update-many-mutation.input';

@InputType()
export class ScheduleUpdateManyWithWhereWithoutClubInput {

    @Field(() => ScheduleScalarWhereInput, {nullable:false})
    where!: ScheduleScalarWhereInput;

    @Field(() => ScheduleUpdateManyMutationInput, {nullable:false})
    data!: ScheduleUpdateManyMutationInput;
}
