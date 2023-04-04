import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';
import { PictureReportUpdateWithoutClubInput } from './picture-report-update-without-club.input';

@InputType()
export class PictureReportUpdateWithWhereUniqueWithoutClubInput {

    @Field(() => PictureReportWhereUniqueInput, {nullable:false})
    where!: PictureReportWhereUniqueInput;

    @Field(() => PictureReportUpdateWithoutClubInput, {nullable:false})
    data!: PictureReportUpdateWithoutClubInput;
}
