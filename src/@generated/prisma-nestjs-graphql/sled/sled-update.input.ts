import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ClubUpdateOneRequiredWithoutSledsInput } from '../club/club-update-one-required-without-sleds.input';
import { SledCommentUpdateManyWithoutSledInput } from '../sled-comment/sled-comment-update-many-without-sled.input';

@InputType()
export class SledUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    topic?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ClubUpdateOneRequiredWithoutSledsInput, {nullable:true})
    club?: ClubUpdateOneRequiredWithoutSledsInput;

    @Field(() => SledCommentUpdateManyWithoutSledInput, {nullable:true})
    sledComments?: SledCommentUpdateManyWithoutSledInput;
}
