import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureCreateWithoutPictureReportInput } from './picture-create-without-picture-report.input';
import { PictureCreateOrConnectWithoutPictureReportInput } from './picture-create-or-connect-without-picture-report.input';
import { PictureCreateManyPictureReportInputEnvelope } from './picture-create-many-picture-report-input-envelope.input';
import { PictureWhereUniqueInput } from './picture-where-unique.input';

@InputType()
export class PictureCreateNestedManyWithoutPictureReportInput {

    @Field(() => [PictureCreateWithoutPictureReportInput], {nullable:true})
    create?: Array<PictureCreateWithoutPictureReportInput>;

    @Field(() => [PictureCreateOrConnectWithoutPictureReportInput], {nullable:true})
    connectOrCreate?: Array<PictureCreateOrConnectWithoutPictureReportInput>;

    @Field(() => PictureCreateManyPictureReportInputEnvelope, {nullable:true})
    createMany?: PictureCreateManyPictureReportInputEnvelope;

    @Field(() => [PictureWhereUniqueInput], {nullable:true})
    connect?: Array<PictureWhereUniqueInput>;
}
