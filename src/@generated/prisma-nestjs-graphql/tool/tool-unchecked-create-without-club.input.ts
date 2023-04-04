import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ToolOwnerUncheckedCreateNestedManyWithoutToolInput } from '../tool-owner/tool-owner-unchecked-create-nested-many-without-tool.input';

@InputType()
export class ToolUncheckedCreateWithoutClubInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(100)
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ToolOwnerUncheckedCreateNestedManyWithoutToolInput, {nullable:true})
    toolOwners?: ToolOwnerUncheckedCreateNestedManyWithoutToolInput;
}
