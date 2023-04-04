import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportUpdateWithoutPicturesInput } from './picture-report-update-without-pictures.input';
import { PictureReportCreateWithoutPicturesInput } from './picture-report-create-without-pictures.input';

@InputType()
export class PictureReportUpsertWithoutPicturesInput {

    @Field(() => PictureReportUpdateWithoutPicturesInput, {nullable:false})
    update!: PictureReportUpdateWithoutPicturesInput;

    @Field(() => PictureReportCreateWithoutPicturesInput, {nullable:false})
    create!: PictureReportCreateWithoutPicturesInput;
}
