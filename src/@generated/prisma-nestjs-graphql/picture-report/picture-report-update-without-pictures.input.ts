import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ClubUpdateOneRequiredWithoutPictureReportsInput } from '../club/club-update-one-required-without-picture-reports.input';
import { UserUpdateOneRequiredWithoutPictureReportsInput } from '../user/user-update-one-required-without-picture-reports.input';

@InputType()
export class PictureReportUpdateWithoutPicturesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ClubUpdateOneRequiredWithoutPictureReportsInput, {nullable:true})
    club?: ClubUpdateOneRequiredWithoutPictureReportsInput;

    @Field(() => UserUpdateOneRequiredWithoutPictureReportsInput, {nullable:true})
    uploadUser?: UserUpdateOneRequiredWithoutPictureReportsInput;
}
