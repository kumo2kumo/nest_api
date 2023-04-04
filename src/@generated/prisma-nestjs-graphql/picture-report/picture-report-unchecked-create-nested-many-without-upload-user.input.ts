import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportCreateWithoutUploadUserInput } from './picture-report-create-without-upload-user.input';
import { PictureReportCreateOrConnectWithoutUploadUserInput } from './picture-report-create-or-connect-without-upload-user.input';
import { PictureReportCreateManyUploadUserInputEnvelope } from './picture-report-create-many-upload-user-input-envelope.input';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';

@InputType()
export class PictureReportUncheckedCreateNestedManyWithoutUploadUserInput {

    @Field(() => [PictureReportCreateWithoutUploadUserInput], {nullable:true})
    create?: Array<PictureReportCreateWithoutUploadUserInput>;

    @Field(() => [PictureReportCreateOrConnectWithoutUploadUserInput], {nullable:true})
    connectOrCreate?: Array<PictureReportCreateOrConnectWithoutUploadUserInput>;

    @Field(() => PictureReportCreateManyUploadUserInputEnvelope, {nullable:true})
    createMany?: PictureReportCreateManyUploadUserInputEnvelope;

    @Field(() => [PictureReportWhereUniqueInput], {nullable:true})
    connect?: Array<PictureReportWhereUniqueInput>;
}
