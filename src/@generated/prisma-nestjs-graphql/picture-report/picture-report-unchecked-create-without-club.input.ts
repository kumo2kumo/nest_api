import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PictureUncheckedCreateNestedManyWithoutPictureReportInput } from '../picture/picture-unchecked-create-nested-many-without-picture-report.input';

@InputType()
export class PictureReportUncheckedCreateWithoutClubInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    uploadUserId!: number;

    @Field(() => PictureUncheckedCreateNestedManyWithoutPictureReportInput, {nullable:true})
    pictures?: PictureUncheckedCreateNestedManyWithoutPictureReportInput;
}
