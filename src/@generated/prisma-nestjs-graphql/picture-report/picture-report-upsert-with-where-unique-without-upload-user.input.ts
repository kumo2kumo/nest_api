import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';
import { PictureReportUpdateWithoutUploadUserInput } from './picture-report-update-without-upload-user.input';
import { PictureReportCreateWithoutUploadUserInput } from './picture-report-create-without-upload-user.input';

@InputType()
export class PictureReportUpsertWithWhereUniqueWithoutUploadUserInput {

    @Field(() => PictureReportWhereUniqueInput, {nullable:false})
    where!: PictureReportWhereUniqueInput;

    @Field(() => PictureReportUpdateWithoutUploadUserInput, {nullable:false})
    update!: PictureReportUpdateWithoutUploadUserInput;

    @Field(() => PictureReportCreateWithoutUploadUserInput, {nullable:false})
    create!: PictureReportCreateWithoutUploadUserInput;
}
