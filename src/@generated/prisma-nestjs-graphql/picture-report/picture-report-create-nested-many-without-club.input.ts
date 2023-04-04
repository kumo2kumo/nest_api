import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportCreateWithoutClubInput } from './picture-report-create-without-club.input';
import { PictureReportCreateOrConnectWithoutClubInput } from './picture-report-create-or-connect-without-club.input';
import { PictureReportCreateManyClubInputEnvelope } from './picture-report-create-many-club-input-envelope.input';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';

@InputType()
export class PictureReportCreateNestedManyWithoutClubInput {

    @Field(() => [PictureReportCreateWithoutClubInput], {nullable:true})
    create?: Array<PictureReportCreateWithoutClubInput>;

    @Field(() => [PictureReportCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<PictureReportCreateOrConnectWithoutClubInput>;

    @Field(() => PictureReportCreateManyClubInputEnvelope, {nullable:true})
    createMany?: PictureReportCreateManyClubInputEnvelope;

    @Field(() => [PictureReportWhereUniqueInput], {nullable:true})
    connect?: Array<PictureReportWhereUniqueInput>;
}
