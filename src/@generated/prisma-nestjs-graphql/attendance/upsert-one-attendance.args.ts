import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendanceWhereUniqueInput } from './attendance-where-unique.input';
import { AttendanceCreateInput } from './attendance-create.input';
import { AttendanceUpdateInput } from './attendance-update.input';

@ArgsType()
export class UpsertOneAttendanceArgs {

    @Field(() => AttendanceWhereUniqueInput, {nullable:false})
    where!: AttendanceWhereUniqueInput;

    @Field(() => AttendanceCreateInput, {nullable:false})
    create!: AttendanceCreateInput;

    @Field(() => AttendanceUpdateInput, {nullable:false})
    update!: AttendanceUpdateInput;
}
