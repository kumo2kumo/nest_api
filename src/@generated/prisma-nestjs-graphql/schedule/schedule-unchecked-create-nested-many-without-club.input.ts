import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleCreateWithoutClubInput } from './schedule-create-without-club.input';
import { ScheduleCreateOrConnectWithoutClubInput } from './schedule-create-or-connect-without-club.input';
import { ScheduleCreateManyClubInputEnvelope } from './schedule-create-many-club-input-envelope.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';

@InputType()
export class ScheduleUncheckedCreateNestedManyWithoutClubInput {

    @Field(() => [ScheduleCreateWithoutClubInput], {nullable:true})
    create?: Array<ScheduleCreateWithoutClubInput>;

    @Field(() => [ScheduleCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<ScheduleCreateOrConnectWithoutClubInput>;

    @Field(() => ScheduleCreateManyClubInputEnvelope, {nullable:true})
    createMany?: ScheduleCreateManyClubInputEnvelope;

    @Field(() => [ScheduleWhereUniqueInput], {nullable:true})
    connect?: Array<ScheduleWhereUniqueInput>;
}
