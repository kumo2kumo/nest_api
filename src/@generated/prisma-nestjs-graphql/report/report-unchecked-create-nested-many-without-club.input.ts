import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutClubInput } from './report-create-without-club.input';
import { ReportCreateOrConnectWithoutClubInput } from './report-create-or-connect-without-club.input';
import { ReportCreateManyClubInputEnvelope } from './report-create-many-club-input-envelope.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';

@InputType()
export class ReportUncheckedCreateNestedManyWithoutClubInput {

    @Field(() => [ReportCreateWithoutClubInput], {nullable:true})
    create?: Array<ReportCreateWithoutClubInput>;

    @Field(() => [ReportCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutClubInput>;

    @Field(() => ReportCreateManyClubInputEnvelope, {nullable:true})
    createMany?: ReportCreateManyClubInputEnvelope;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;
}
