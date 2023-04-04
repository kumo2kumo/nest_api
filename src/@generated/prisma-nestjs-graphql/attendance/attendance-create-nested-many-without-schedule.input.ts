import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendanceCreateWithoutScheduleInput } from './attendance-create-without-schedule.input';
import { AttendanceCreateOrConnectWithoutScheduleInput } from './attendance-create-or-connect-without-schedule.input';
import { AttendanceCreateManyScheduleInputEnvelope } from './attendance-create-many-schedule-input-envelope.input';
import { AttendanceWhereUniqueInput } from './attendance-where-unique.input';

@InputType()
export class AttendanceCreateNestedManyWithoutScheduleInput {

    @Field(() => [AttendanceCreateWithoutScheduleInput], {nullable:true})
    create?: Array<AttendanceCreateWithoutScheduleInput>;

    @Field(() => [AttendanceCreateOrConnectWithoutScheduleInput], {nullable:true})
    connectOrCreate?: Array<AttendanceCreateOrConnectWithoutScheduleInput>;

    @Field(() => AttendanceCreateManyScheduleInputEnvelope, {nullable:true})
    createMany?: AttendanceCreateManyScheduleInputEnvelope;

    @Field(() => [AttendanceWhereUniqueInput], {nullable:true})
    connect?: Array<AttendanceWhereUniqueInput>;
}
