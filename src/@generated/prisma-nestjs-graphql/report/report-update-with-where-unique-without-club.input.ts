import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithoutClubInput } from './report-update-without-club.input';

@InputType()
export class ReportUpdateWithWhereUniqueWithoutClubInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;

    @Field(() => ReportUpdateWithoutClubInput, {nullable:false})
    data!: ReportUpdateWithoutClubInput;
}
