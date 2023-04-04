import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendanceCreateWithoutScheduleInput } from './attendance-create-without-schedule.input';
import { AttendanceCreateOrConnectWithoutScheduleInput } from './attendance-create-or-connect-without-schedule.input';
import { AttendanceUpsertWithWhereUniqueWithoutScheduleInput } from './attendance-upsert-with-where-unique-without-schedule.input';
import { AttendanceCreateManyScheduleInputEnvelope } from './attendance-create-many-schedule-input-envelope.input';
import { AttendanceWhereUniqueInput } from './attendance-where-unique.input';
import { AttendanceUpdateWithWhereUniqueWithoutScheduleInput } from './attendance-update-with-where-unique-without-schedule.input';
import { AttendanceUpdateManyWithWhereWithoutScheduleInput } from './attendance-update-many-with-where-without-schedule.input';
import { AttendanceScalarWhereInput } from './attendance-scalar-where.input';

@InputType()
export class AttendanceUncheckedUpdateManyWithoutScheduleInput {

    @Field(() => [AttendanceCreateWithoutScheduleInput], {nullable:true})
    create?: Array<AttendanceCreateWithoutScheduleInput>;

    @Field(() => [AttendanceCreateOrConnectWithoutScheduleInput], {nullable:true})
    connectOrCreate?: Array<AttendanceCreateOrConnectWithoutScheduleInput>;

    @Field(() => [AttendanceUpsertWithWhereUniqueWithoutScheduleInput], {nullable:true})
    upsert?: Array<AttendanceUpsertWithWhereUniqueWithoutScheduleInput>;

    @Field(() => AttendanceCreateManyScheduleInputEnvelope, {nullable:true})
    createMany?: AttendanceCreateManyScheduleInputEnvelope;

    @Field(() => [AttendanceWhereUniqueInput], {nullable:true})
    set?: Array<AttendanceWhereUniqueInput>;

    @Field(() => [AttendanceWhereUniqueInput], {nullable:true})
    disconnect?: Array<AttendanceWhereUniqueInput>;

    @Field(() => [AttendanceWhereUniqueInput], {nullable:true})
    delete?: Array<AttendanceWhereUniqueInput>;

    @Field(() => [AttendanceWhereUniqueInput], {nullable:true})
    connect?: Array<AttendanceWhereUniqueInput>;

    @Field(() => [AttendanceUpdateWithWhereUniqueWithoutScheduleInput], {nullable:true})
    update?: Array<AttendanceUpdateWithWhereUniqueWithoutScheduleInput>;

    @Field(() => [AttendanceUpdateManyWithWhereWithoutScheduleInput], {nullable:true})
    updateMany?: Array<AttendanceUpdateManyWithWhereWithoutScheduleInput>;

    @Field(() => [AttendanceScalarWhereInput], {nullable:true})
    deleteMany?: Array<AttendanceScalarWhereInput>;
}
