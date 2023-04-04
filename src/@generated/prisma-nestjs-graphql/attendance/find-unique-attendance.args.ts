import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendanceWhereUniqueInput } from './attendance-where-unique.input';

@ArgsType()
export class FindUniqueAttendanceArgs {

    @Field(() => AttendanceWhereUniqueInput, {nullable:false})
    where!: AttendanceWhereUniqueInput;
}
