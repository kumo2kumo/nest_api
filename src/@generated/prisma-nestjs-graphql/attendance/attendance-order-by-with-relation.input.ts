import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ScheduleOrderByWithRelationInput } from '../schedule/schedule-order-by-with-relation.input';

@InputType()
export class AttendanceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ScheduleOrderByWithRelationInput, {nullable:true})
    schedule?: ScheduleOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    scheduleId?: keyof typeof SortOrder;
}
