import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ToolUpdateOneRequiredWithoutToolOwnersInput } from '../tool/tool-update-one-required-without-tool-owners.input';

@InputType()
export class ToolOwnerUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ToolUpdateOneRequiredWithoutToolOwnersInput, {nullable:true})
    tool?: ToolUpdateOneRequiredWithoutToolOwnersInput;
}
