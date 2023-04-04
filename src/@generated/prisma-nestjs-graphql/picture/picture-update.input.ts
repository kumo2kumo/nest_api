import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { PictureReportUpdateOneRequiredWithoutPicturesInput } from '../picture-report/picture-report-update-one-required-without-pictures.input';

@InputType()
export class PictureUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    base64?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    mainFlag?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => PictureReportUpdateOneRequiredWithoutPicturesInput, {nullable:true})
    pictureReport?: PictureReportUpdateOneRequiredWithoutPicturesInput;
}
