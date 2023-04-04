import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureCreateWithoutPictureReportInput } from './picture-create-without-picture-report.input';
import { PictureCreateOrConnectWithoutPictureReportInput } from './picture-create-or-connect-without-picture-report.input';
import { PictureUpsertWithWhereUniqueWithoutPictureReportInput } from './picture-upsert-with-where-unique-without-picture-report.input';
import { PictureCreateManyPictureReportInputEnvelope } from './picture-create-many-picture-report-input-envelope.input';
import { PictureWhereUniqueInput } from './picture-where-unique.input';
import { PictureUpdateWithWhereUniqueWithoutPictureReportInput } from './picture-update-with-where-unique-without-picture-report.input';
import { PictureUpdateManyWithWhereWithoutPictureReportInput } from './picture-update-many-with-where-without-picture-report.input';
import { PictureScalarWhereInput } from './picture-scalar-where.input';

@InputType()
export class PictureUncheckedUpdateManyWithoutPictureReportInput {

    @Field(() => [PictureCreateWithoutPictureReportInput], {nullable:true})
    create?: Array<PictureCreateWithoutPictureReportInput>;

    @Field(() => [PictureCreateOrConnectWithoutPictureReportInput], {nullable:true})
    connectOrCreate?: Array<PictureCreateOrConnectWithoutPictureReportInput>;

    @Field(() => [PictureUpsertWithWhereUniqueWithoutPictureReportInput], {nullable:true})
    upsert?: Array<PictureUpsertWithWhereUniqueWithoutPictureReportInput>;

    @Field(() => PictureCreateManyPictureReportInputEnvelope, {nullable:true})
    createMany?: PictureCreateManyPictureReportInputEnvelope;

    @Field(() => [PictureWhereUniqueInput], {nullable:true})
    set?: Array<PictureWhereUniqueInput>;

    @Field(() => [PictureWhereUniqueInput], {nullable:true})
    disconnect?: Array<PictureWhereUniqueInput>;

    @Field(() => [PictureWhereUniqueInput], {nullable:true})
    delete?: Array<PictureWhereUniqueInput>;

    @Field(() => [PictureWhereUniqueInput], {nullable:true})
    connect?: Array<PictureWhereUniqueInput>;

    @Field(() => [PictureUpdateWithWhereUniqueWithoutPictureReportInput], {nullable:true})
    update?: Array<PictureUpdateWithWhereUniqueWithoutPictureReportInput>;

    @Field(() => [PictureUpdateManyWithWhereWithoutPictureReportInput], {nullable:true})
    updateMany?: Array<PictureUpdateManyWithWhereWithoutPictureReportInput>;

    @Field(() => [PictureScalarWhereInput], {nullable:true})
    deleteMany?: Array<PictureScalarWhereInput>;
}
