import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AttendanceUncheckedCreateNestedManyWithoutScheduleInput } from '../attendance/attendance-unchecked-create-nested-many-without-schedule.input';

@InputType()
export class ScheduleUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:false})
    activityDay!: Date | string;

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(100)
    time!: string;

    @Field(() => Int, {nullable:false})
    category!: number;

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(100)
    place!: string;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(100)
    address?: string;

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(100)
    meetingTime!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.MaxLength(100)
    opponent?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.MaxLength(100)
    matchTime?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    clubId!: number;

    @Field(() => AttendanceUncheckedCreateNestedManyWithoutScheduleInput, {nullable:true})
    attendances?: AttendanceUncheckedCreateNestedManyWithoutScheduleInput;
}
