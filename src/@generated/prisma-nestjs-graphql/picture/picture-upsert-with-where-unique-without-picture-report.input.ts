import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureWhereUniqueInput } from './picture-where-unique.input';
import { PictureUpdateWithoutPictureReportInput } from './picture-update-without-picture-report.input';
import { PictureCreateWithoutPictureReportInput } from './picture-create-without-picture-report.input';

@InputType()
export class PictureUpsertWithWhereUniqueWithoutPictureReportInput {

    @Field(() => PictureWhereUniqueInput, {nullable:false})
    where!: PictureWhereUniqueInput;

    @Field(() => PictureUpdateWithoutPictureReportInput, {nullable:false})
    update!: PictureUpdateWithoutPictureReportInput;

    @Field(() => PictureCreateWithoutPictureReportInput, {nullable:false})
    create!: PictureCreateWithoutPictureReportInput;
}
