import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { SledUpdateOneRequiredWithoutSledCommentsInput } from '../sled/sled-update-one-required-without-sled-comments.input';
import { UserUpdateOneWithoutUpdateSledCommentsInput } from '../user/user-update-one-without-update-sled-comments.input';

@InputType()
export class SledCommentUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comment?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => SledUpdateOneRequiredWithoutSledCommentsInput, {nullable:true})
    sled?: SledUpdateOneRequiredWithoutSledCommentsInput;

    @Field(() => UserUpdateOneWithoutUpdateSledCommentsInput, {nullable:true})
    updateUser?: UserUpdateOneWithoutUpdateSledCommentsInput;
}
