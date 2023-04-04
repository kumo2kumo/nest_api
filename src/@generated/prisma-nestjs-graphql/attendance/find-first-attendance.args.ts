import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendanceWhereInput } from './attendance-where.input';
import { AttendanceOrderByWithRelationInput } from './attendance-order-by-with-relation.input';
import { AttendanceWhereUniqueInput } from './attendance-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AttendanceScalarFieldEnum } from './attendance-scalar-field.enum';

@ArgsType()
export class FindFirstAttendanceArgs {

    @Field(() => AttendanceWhereInput, {nullable:true})
    where?: AttendanceWhereInput;

    @Field(() => [AttendanceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AttendanceOrderByWithRelationInput>;

    @Field(() => AttendanceWhereUniqueInput, {nullable:true})
    cursor?: AttendanceWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AttendanceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AttendanceScalarFieldEnum>;
}
