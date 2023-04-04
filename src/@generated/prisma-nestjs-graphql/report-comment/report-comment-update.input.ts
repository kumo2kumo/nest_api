import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutReportCommentsInput } from '../user/user-update-one-required-without-report-comments.input';
import { ReportUpdateOneRequiredWithoutReportCommentsInput } from '../report/report-update-one-required-without-report-comments.input';

@InputType()
export class ReportCommentUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comment?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutReportCommentsInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutReportCommentsInput;

    @Field(() => ReportUpdateOneRequiredWithoutReportCommentsInput, {nullable:true})
    report?: ReportUpdateOneRequiredWithoutReportCommentsInput;
}
