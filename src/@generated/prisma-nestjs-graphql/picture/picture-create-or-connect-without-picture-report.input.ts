import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureWhereUniqueInput } from './picture-where-unique.input';
import { PictureCreateWithoutPictureReportInput } from './picture-create-without-picture-report.input';

@InputType()
export class PictureCreateOrConnectWithoutPictureReportInput {

    @Field(() => PictureWhereUniqueInput, {nullable:false})
    where!: PictureWhereUniqueInput;

    @Field(() => PictureCreateWithoutPictureReportInput, {nullable:false})
    create!: PictureCreateWithoutPictureReportInput;
}
