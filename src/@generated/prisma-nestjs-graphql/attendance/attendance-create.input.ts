import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { ScheduleCreateNestedOneWithoutAttendancesInput } from '../schedule/schedule-create-nested-one-without-attendances.input';

@InputType()
export class AttendanceCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(100)
    text!: string;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ScheduleCreateNestedOneWithoutAttendancesInput, {nullable:false})
    schedule!: ScheduleCreateNestedOneWithoutAttendancesInput;
}
