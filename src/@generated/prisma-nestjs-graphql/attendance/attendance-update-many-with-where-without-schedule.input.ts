import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendanceScalarWhereInput } from './attendance-scalar-where.input';
import { AttendanceUpdateManyMutationInput } from './attendance-update-many-mutation.input';

@InputType()
export class AttendanceUpdateManyWithWhereWithoutScheduleInput {

    @Field(() => AttendanceScalarWhereInput, {nullable:false})
    where!: AttendanceScalarWhereInput;

    @Field(() => AttendanceUpdateManyMutationInput, {nullable:false})
    data!: AttendanceUpdateManyMutationInput;
}
