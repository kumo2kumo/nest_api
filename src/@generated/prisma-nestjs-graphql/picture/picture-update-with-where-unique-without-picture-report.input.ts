import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureWhereUniqueInput } from './picture-where-unique.input';
import { PictureUpdateWithoutPictureReportInput } from './picture-update-without-picture-report.input';

@InputType()
export class PictureUpdateWithWhereUniqueWithoutPictureReportInput {

    @Field(() => PictureWhereUniqueInput, {nullable:false})
    where!: PictureWhereUniqueInput;

    @Field(() => PictureUpdateWithoutPictureReportInput, {nullable:false})
    data!: PictureUpdateWithoutPictureReportInput;
}
