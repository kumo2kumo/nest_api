import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportCreateWithoutClubInput } from './report-create-without-club.input';

@InputType()
export class ReportCreateOrConnectWithoutClubInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;

    @Field(() => ReportCreateWithoutClubInput, {nullable:false})
    create!: ReportCreateWithoutClubInput;
}
