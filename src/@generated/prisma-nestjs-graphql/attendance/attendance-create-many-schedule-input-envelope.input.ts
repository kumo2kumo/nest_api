import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendanceCreateManyScheduleInput } from './attendance-create-many-schedule.input';

@InputType()
export class AttendanceCreateManyScheduleInputEnvelope {

    @Field(() => [AttendanceCreateManyScheduleInput], {nullable:false})
    data!: Array<AttendanceCreateManyScheduleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
