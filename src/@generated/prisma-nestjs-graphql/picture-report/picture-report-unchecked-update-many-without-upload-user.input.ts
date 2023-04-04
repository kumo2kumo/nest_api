import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportCreateWithoutUploadUserInput } from './picture-report-create-without-upload-user.input';
import { PictureReportCreateOrConnectWithoutUploadUserInput } from './picture-report-create-or-connect-without-upload-user.input';
import { PictureReportUpsertWithWhereUniqueWithoutUploadUserInput } from './picture-report-upsert-with-where-unique-without-upload-user.input';
import { PictureReportCreateManyUploadUserInputEnvelope } from './picture-report-create-many-upload-user-input-envelope.input';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';
import { PictureReportUpdateWithWhereUniqueWithoutUploadUserInput } from './picture-report-update-with-where-unique-without-upload-user.input';
import { PictureReportUpdateManyWithWhereWithoutUploadUserInput } from './picture-report-update-many-with-where-without-upload-user.input';
import { PictureReportScalarWhereInput } from './picture-report-scalar-where.input';

@InputType()
export class PictureReportUncheckedUpdateManyWithoutUploadUserInput {

    @Field(() => [PictureReportCreateWithoutUploadUserInput], {nullable:true})
    create?: Array<PictureReportCreateWithoutUploadUserInput>;

    @Field(() => [PictureReportCreateOrConnectWithoutUploadUserInput], {nullable:true})
    connectOrCreate?: Array<PictureReportCreateOrConnectWithoutUploadUserInput>;

    @Field(() => [PictureReportUpsertWithWhereUniqueWithoutUploadUserInput], {nullable:true})
    upsert?: Array<PictureReportUpsertWithWhereUniqueWithoutUploadUserInput>;

    @Field(() => PictureReportCreateManyUploadUserInputEnvelope, {nullable:true})
    createMany?: PictureReportCreateManyUploadUserInputEnvelope;

    @Field(() => [PictureReportWhereUniqueInput], {nullable:true})
    set?: Array<PictureReportWhereUniqueInput>;

    @Field(() => [PictureReportWhereUniqueInput], {nullable:true})
    disconnect?: Array<PictureReportWhereUniqueInput>;

    @Field(() => [PictureReportWhereUniqueInput], {nullable:true})
    delete?: Array<PictureReportWhereUniqueInput>;

    @Field(() => [PictureReportWhereUniqueInput], {nullable:true})
    connect?: Array<PictureReportWhereUniqueInput>;

    @Field(() => [PictureReportUpdateWithWhereUniqueWithoutUploadUserInput], {nullable:true})
    update?: Array<PictureReportUpdateWithWhereUniqueWithoutUploadUserInput>;

    @Field(() => [PictureReportUpdateManyWithWhereWithoutUploadUserInput], {nullable:true})
    updateMany?: Array<PictureReportUpdateManyWithWhereWithoutUploadUserInput>;

    @Field(() => [PictureReportScalarWhereInput], {nullable:true})
    deleteMany?: Array<PictureReportScalarWhereInput>;
}
