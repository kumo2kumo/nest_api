import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AttendanceCountOrderByAggregateInput } from './attendance-count-order-by-aggregate.input';
import { AttendanceAvgOrderByAggregateInput } from './attendance-avg-order-by-aggregate.input';
import { AttendanceMaxOrderByAggregateInput } from './attendance-max-order-by-aggregate.input';
import { AttendanceMinOrderByAggregateInput } from './attendance-min-order-by-aggregate.input';
import { AttendanceSumOrderByAggregateInput } from './attendance-sum-order-by-aggregate.input';

@InputType()
export class AttendanceOrderByWithAggregationInput {

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

    @Field(() => SortOrder, {nullable:true})
    scheduleId?: keyof typeof SortOrder;

    @Field(() => AttendanceCountOrderByAggregateInput, {nullable:true})
    _count?: AttendanceCountOrderByAggregateInput;

    @Field(() => AttendanceAvgOrderByAggregateInput, {nullable:true})
    _avg?: AttendanceAvgOrderByAggregateInput;

    @Field(() => AttendanceMaxOrderByAggregateInput, {nullable:true})
    _max?: AttendanceMaxOrderByAggregateInput;

    @Field(() => AttendanceMinOrderByAggregateInput, {nullable:true})
    _min?: AttendanceMinOrderByAggregateInput;

    @Field(() => AttendanceSumOrderByAggregateInput, {nullable:true})
    _sum?: AttendanceSumOrderByAggregateInput;
}
