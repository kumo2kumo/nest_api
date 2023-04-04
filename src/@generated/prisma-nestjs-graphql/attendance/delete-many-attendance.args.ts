import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendanceWhereInput } from './attendance-where.input';

@ArgsType()
export class DeleteManyAttendanceArgs {

    @Field(() => AttendanceWhereInput, {nullable:true})
    where?: AttendanceWhereInput;
}
