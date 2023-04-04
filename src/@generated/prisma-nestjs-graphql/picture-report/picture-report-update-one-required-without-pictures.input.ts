import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportCreateWithoutPicturesInput } from './picture-report-create-without-pictures.input';
import { PictureReportCreateOrConnectWithoutPicturesInput } from './picture-report-create-or-connect-without-pictures.input';
import { PictureReportUpsertWithoutPicturesInput } from './picture-report-upsert-without-pictures.input';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';
import { PictureReportUpdateWithoutPicturesInput } from './picture-report-update-without-pictures.input';

@InputType()
export class PictureReportUpdateOneRequiredWithoutPicturesInput {

    @Field(() => PictureReportCreateWithoutPicturesInput, {nullable:true})
    create?: PictureReportCreateWithoutPicturesInput;

    @Field(() => PictureReportCreateOrConnectWithoutPicturesInput, {nullable:true})
    connectOrCreate?: PictureReportCreateOrConnectWithoutPicturesInput;

    @Field(() => PictureReportUpsertWithoutPicturesInput, {nullable:true})
    upsert?: PictureReportUpsertWithoutPicturesInput;

    @Field(() => PictureReportWhereUniqueInput, {nullable:true})
    connect?: PictureReportWhereUniqueInput;

    @Field(() => PictureReportUpdateWithoutPicturesInput, {nullable:true})
    update?: PictureReportUpdateWithoutPicturesInput;
}
