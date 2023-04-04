import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendanceCreateInput } from './attendance-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAttendanceArgs {

    @Field(() => AttendanceCreateInput, {nullable:false})
    @ValidateNested()
    @Type(() => AttendanceCreateInput)
    data!: AttendanceCreateInput;
}
