import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithoutClubInput } from './report-update-without-club.input';
import { ReportCreateWithoutClubInput } from './report-create-without-club.input';

@InputType()
export class ReportUpsertWithWhereUniqueWithoutClubInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;

    @Field(() => ReportUpdateWithoutClubInput, {nullable:false})
    update!: ReportUpdateWithoutClubInput;

    @Field(() => ReportCreateWithoutClubInput, {nullable:false})
    create!: ReportCreateWithoutClubInput;
}
