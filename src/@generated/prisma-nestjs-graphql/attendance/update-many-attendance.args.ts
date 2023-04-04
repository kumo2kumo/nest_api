import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendanceUpdateManyMutationInput } from './attendance-update-many-mutation.input';
import { AttendanceWhereInput } from './attendance-where.input';

@ArgsType()
export class UpdateManyAttendanceArgs {

    @Field(() => AttendanceUpdateManyMutationInput, {nullable:false})
    data!: AttendanceUpdateManyMutationInput;

    @Field(() => AttendanceWhereInput, {nullable:true})
    where?: AttendanceWhereInput;
}
