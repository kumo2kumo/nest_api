import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';
import { PictureReportCreateWithoutUploadUserInput } from './picture-report-create-without-upload-user.input';

@InputType()
export class PictureReportCreateOrConnectWithoutUploadUserInput {

    @Field(() => PictureReportWhereUniqueInput, {nullable:false})
    where!: PictureReportWhereUniqueInput;

    @Field(() => PictureReportCreateWithoutUploadUserInput, {nullable:false})
    create!: PictureReportCreateWithoutUploadUserInput;
}
