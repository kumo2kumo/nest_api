import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';
import { PictureReportCreateWithoutClubInput } from './picture-report-create-without-club.input';

@InputType()
export class PictureReportCreateOrConnectWithoutClubInput {

    @Field(() => PictureReportWhereUniqueInput, {nullable:false})
    where!: PictureReportWhereUniqueInput;

    @Field(() => PictureReportCreateWithoutClubInput, {nullable:false})
    create!: PictureReportCreateWithoutClubInput;
}
