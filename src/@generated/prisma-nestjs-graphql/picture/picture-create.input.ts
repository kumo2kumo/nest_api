import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportCreateNestedOneWithoutPicturesInput } from '../picture-report/picture-report-create-nested-one-without-pictures.input';

@InputType()
export class PictureCreateInput {

    @Field(() => String, {nullable:false})
    base64!: string;

    @Field(() => Boolean, {nullable:false})
    mainFlag!: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PictureReportCreateNestedOneWithoutPicturesInput, {nullable:false})
    pictureReport!: PictureReportCreateNestedOneWithoutPicturesInput;
}
