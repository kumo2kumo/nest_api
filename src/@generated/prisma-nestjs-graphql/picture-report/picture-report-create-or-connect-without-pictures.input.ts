import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';
import { PictureReportCreateWithoutPicturesInput } from './picture-report-create-without-pictures.input';

@InputType()
export class PictureReportCreateOrConnectWithoutPicturesInput {

    @Field(() => PictureReportWhereUniqueInput, {nullable:false})
    where!: PictureReportWhereUniqueInput;

    @Field(() => PictureReportCreateWithoutPicturesInput, {nullable:false})
    create!: PictureReportCreateWithoutPicturesInput;
}
