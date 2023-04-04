import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendanceCreateManyInput } from './attendance-create-many.input';

@ArgsType()
export class CreateManyAttendanceArgs {

    @Field(() => [AttendanceCreateManyInput], {nullable:false})
    data!: Array<AttendanceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
