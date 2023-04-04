import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ClubUpdateOneRequiredWithoutReportsInput } from '../club/club-update-one-required-without-reports.input';
import { UserUpdateOneRequiredWithoutReportsInput } from '../user/user-update-one-required-without-reports.input';
import { ReportCommentUpdateManyWithoutReportInput } from '../report-comment/report-comment-update-many-without-report.input';

@InputType()
export class ReportUpdateWithoutScheduleInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ClubUpdateOneRequiredWithoutReportsInput, {nullable:true})
    club?: ClubUpdateOneRequiredWithoutReportsInput;

    @Field(() => UserUpdateOneRequiredWithoutReportsInput, {nullable:true})
    uploadUser?: UserUpdateOneRequiredWithoutReportsInput;

    @Field(() => ReportCommentUpdateManyWithoutReportInput, {nullable:true})
    reportComments?: ReportCommentUpdateManyWithoutReportInput;
}
