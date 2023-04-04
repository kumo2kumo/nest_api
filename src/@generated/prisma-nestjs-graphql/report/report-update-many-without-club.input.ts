import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutClubInput } from './report-create-without-club.input';
import { ReportCreateOrConnectWithoutClubInput } from './report-create-or-connect-without-club.input';
import { ReportUpsertWithWhereUniqueWithoutClubInput } from './report-upsert-with-where-unique-without-club.input';
import { ReportCreateManyClubInputEnvelope } from './report-create-many-club-input-envelope.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithWhereUniqueWithoutClubInput } from './report-update-with-where-unique-without-club.input';
import { ReportUpdateManyWithWhereWithoutClubInput } from './report-update-many-with-where-without-club.input';
import { ReportScalarWhereInput } from './report-scalar-where.input';

@InputType()
export class ReportUpdateManyWithoutClubInput {

    @Field(() => [ReportCreateWithoutClubInput], {nullable:true})
    create?: Array<ReportCreateWithoutClubInput>;

    @Field(() => [ReportCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutClubInput>;

    @Field(() => [ReportUpsertWithWhereUniqueWithoutClubInput], {nullable:true})
    upsert?: Array<ReportUpsertWithWhereUniqueWithoutClubInput>;

    @Field(() => ReportCreateManyClubInputEnvelope, {nullable:true})
    createMany?: ReportCreateManyClubInputEnvelope;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    set?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    delete?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportUpdateWithWhereUniqueWithoutClubInput], {nullable:true})
    update?: Array<ReportUpdateWithWhereUniqueWithoutClubInput>;

    @Field(() => [ReportUpdateManyWithWhereWithoutClubInput], {nullable:true})
    updateMany?: Array<ReportUpdateManyWithWhereWithoutClubInput>;

    @Field(() => [ReportScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReportScalarWhereInput>;
}
