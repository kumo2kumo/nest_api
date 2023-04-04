import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';
import { PictureReportUpdateWithoutUploadUserInput } from './picture-report-update-without-upload-user.input';

@InputType()
export class PictureReportUpdateWithWhereUniqueWithoutUploadUserInput {

    @Field(() => PictureReportWhereUniqueInput, {nullable:false})
    where!: PictureReportWhereUniqueInput;

    @Field(() => PictureReportUpdateWithoutUploadUserInput, {nullable:false})
    data!: PictureReportUpdateWithoutUploadUserInput;
}
