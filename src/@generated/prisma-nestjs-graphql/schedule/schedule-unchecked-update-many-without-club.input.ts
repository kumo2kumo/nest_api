import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleCreateWithoutClubInput } from './schedule-create-without-club.input';
import { ScheduleCreateOrConnectWithoutClubInput } from './schedule-create-or-connect-without-club.input';
import { ScheduleUpsertWithWhereUniqueWithoutClubInput } from './schedule-upsert-with-where-unique-without-club.input';
import { ScheduleCreateManyClubInputEnvelope } from './schedule-create-many-club-input-envelope.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleUpdateWithWhereUniqueWithoutClubInput } from './schedule-update-with-where-unique-without-club.input';
import { ScheduleUpdateManyWithWhereWithoutClubInput } from './schedule-update-many-with-where-without-club.input';
import { ScheduleScalarWhereInput } from './schedule-scalar-where.input';

@InputType()
export class ScheduleUncheckedUpdateManyWithoutClubInput {

    @Field(() => [ScheduleCreateWithoutClubInput], {nullable:true})
    create?: Array<ScheduleCreateWithoutClubInput>;

    @Field(() => [ScheduleCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<ScheduleCreateOrConnectWithoutClubInput>;

    @Field(() => [ScheduleUpsertWithWhereUniqueWithoutClubInput], {nullable:true})
    upsert?: Array<ScheduleUpsertWithWhereUniqueWithoutClubInput>;

    @Field(() => ScheduleCreateManyClubInputEnvelope, {nullable:true})
    createMany?: ScheduleCreateManyClubInputEnvelope;

    @Field(() => [ScheduleWhereUniqueInput], {nullable:true})
    set?: Array<ScheduleWhereUniqueInput>;

    @Field(() => [ScheduleWhereUniqueInput], {nullable:true})
    disconnect?: Array<ScheduleWhereUniqueInput>;

    @Field(() => [ScheduleWhereUniqueInput], {nullable:true})
    delete?: Array<ScheduleWhereUniqueInput>;

    @Field(() => [ScheduleWhereUniqueInput], {nullable:true})
    connect?: Array<ScheduleWhereUniqueInput>;

    @Field(() => [ScheduleUpdateWithWhereUniqueWithoutClubInput], {nullable:true})
    update?: Array<ScheduleUpdateWithWhereUniqueWithoutClubInput>;

    @Field(() => [ScheduleUpdateManyWithWhereWithoutClubInput], {nullable:true})
    updateMany?: Array<ScheduleUpdateManyWithWhereWithoutClubInput>;

    @Field(() => [ScheduleScalarWhereInput], {nullable:true})
    deleteMany?: Array<ScheduleScalarWhereInput>;
}
