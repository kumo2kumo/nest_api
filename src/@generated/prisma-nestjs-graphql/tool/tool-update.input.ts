import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ClubUpdateOneRequiredWithoutToolsInput } from '../club/club-update-one-required-without-tools.input';
import { ToolOwnerUpdateManyWithoutToolInput } from '../tool-owner/tool-owner-update-many-without-tool.input';

@InputType()
export class ToolUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ClubUpdateOneRequiredWithoutToolsInput, {nullable:true})
    club?: ClubUpdateOneRequiredWithoutToolsInput;

    @Field(() => ToolOwnerUpdateManyWithoutToolInput, {nullable:true})
    toolOwners?: ToolOwnerUpdateManyWithoutToolInput;
}
