import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportCreateWithoutPicturesInput } from './picture-report-create-without-pictures.input';
import { PictureReportCreateOrConnectWithoutPicturesInput } from './picture-report-create-or-connect-without-pictures.input';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';

@InputType()
export class PictureReportCreateNestedOneWithoutPicturesInput {

    @Field(() => PictureReportCreateWithoutPicturesInput, {nullable:true})
    create?: PictureReportCreateWithoutPicturesInput;

    @Field(() => PictureReportCreateOrConnectWithoutPicturesInput, {nullable:true})
    connectOrCreate?: PictureReportCreateOrConnectWithoutPicturesInput;

    @Field(() => PictureReportWhereUniqueInput, {nullable:true})
    connect?: PictureReportWhereUniqueInput;
}
