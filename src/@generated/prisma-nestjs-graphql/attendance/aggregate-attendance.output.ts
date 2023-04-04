import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AttendanceCountAggregate } from './attendance-count-aggregate.output';
import { AttendanceAvgAggregate } from './attendance-avg-aggregate.output';
import { AttendanceSumAggregate } from './attendance-sum-aggregate.output';
import { AttendanceMinAggregate } from './attendance-min-aggregate.output';
import { AttendanceMaxAggregate } from './attendance-max-aggregate.output';

@ObjectType()
export class AggregateAttendance {

    @Field(() => AttendanceCountAggregate, {nullable:true})
    _count?: AttendanceCountAggregate;

    @Field(() => AttendanceAvgAggregate, {nullable:true})
    _avg?: AttendanceAvgAggregate;

    @Field(() => AttendanceSumAggregate, {nullable:true})
    _sum?: AttendanceSumAggregate;

    @Field(() => AttendanceMinAggregate, {nullable:true})
    _min?: AttendanceMinAggregate;

    @Field(() => AttendanceMaxAggregate, {nullable:true})
    _max?: AttendanceMaxAggregate;
}
