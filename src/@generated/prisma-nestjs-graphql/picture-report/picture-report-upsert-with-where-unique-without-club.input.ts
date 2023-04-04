import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';
import { PictureReportUpdateWithoutClubInput } from './picture-report-update-without-club.input';
import { PictureReportCreateWithoutClubInput } from './picture-report-create-without-club.input';

@InputType()
export class PictureReportUpsertWithWhereUniqueWithoutClubInput {

    @Field(() => PictureReportWhereUniqueInput, {nullable:false})
    where!: PictureReportWhereUniqueInput;

    @Field(() => PictureReportUpdateWithoutClubInput, {nullable:false})
    update!: PictureReportUpdateWithoutClubInput;

    @Field(() => PictureReportCreateWithoutClubInput, {nullable:false})
    create!: PictureReportCreateWithoutClubInput;
}
