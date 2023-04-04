import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportCreateWithoutClubInput } from './picture-report-create-without-club.input';
import { PictureReportCreateOrConnectWithoutClubInput } from './picture-report-create-or-connect-without-club.input';
import { PictureReportUpsertWithWhereUniqueWithoutClubInput } from './picture-report-upsert-with-where-unique-without-club.input';
import { PictureReportCreateManyClubInputEnvelope } from './picture-report-create-many-club-input-envelope.input';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';
import { PictureReportUpdateWithWhereUniqueWithoutClubInput } from './picture-report-update-with-where-unique-without-club.input';
import { PictureReportUpdateManyWithWhereWithoutClubInput } from './picture-report-update-many-with-where-without-club.input';
import { PictureReportScalarWhereInput } from './picture-report-scalar-where.input';

@InputType()
export class PictureReportUncheckedUpdateManyWithoutClubInput {

    @Field(() => [PictureReportCreateWithoutClubInput], {nullable:true})
    create?: Array<PictureReportCreateWithoutClubInput>;

    @Field(() => [PictureReportCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<PictureReportCreateOrConnectWithoutClubInput>;

    @Field(() => [PictureReportUpsertWithWhereUniqueWithoutClubInput], {nullable:true})
    upsert?: Array<PictureReportUpsertWithWhereUniqueWithoutClubInput>;

    @Field(() => PictureReportCreateManyClubInputEnvelope, {nullable:true})
    createMany?: PictureReportCreateManyClubInputEnvelope;

    @Field(() => [PictureReportWhereUniqueInput], {nullable:true})
    set?: Array<PictureReportWhereUniqueInput>;

    @Field(() => [PictureReportWhereUniqueInput], {nullable:true})
    disconnect?: Array<PictureReportWhereUniqueInput>;

    @Field(() => [PictureReportWhereUniqueInput], {nullable:true})
    delete?: Array<PictureReportWhereUniqueInput>;

    @Field(() => [PictureReportWhereUniqueInput], {nullable:true})
    connect?: Array<PictureReportWhereUniqueInput>;

    @Field(() => [PictureReportUpdateWithWhereUniqueWithoutClubInput], {nullable:true})
    update?: Array<PictureReportUpdateWithWhereUniqueWithoutClubInput>;

    @Field(() => [PictureReportUpdateManyWithWhereWithoutClubInput], {nullable:true})
    updateMany?: Array<PictureReportUpdateManyWithWhereWithoutClubInput>;

    @Field(() => [PictureReportScalarWhereInput], {nullable:true})
    deleteMany?: Array<PictureReportScalarWhereInput>;
}
