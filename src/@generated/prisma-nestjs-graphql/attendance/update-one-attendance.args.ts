import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendanceUpdateInput } from './attendance-update.input';
import { AttendanceWhereUniqueInput } from './attendance-where-unique.input';

@ArgsType()
export class UpdateOneAttendanceArgs {

    @Field(() => AttendanceUpdateInput, {nullable:false})
    data!: AttendanceUpdateInput;

    @Field(() => AttendanceWhereUniqueInput, {nullable:false})
    where!: AttendanceWhereUniqueInput;
}
