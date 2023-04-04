import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ToolOwnerCreateNestedManyWithoutToolInput } from '../tool-owner/tool-owner-create-nested-many-without-tool.input';

@InputType()
export class ToolCreateWithoutClubInput {

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(100)
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ToolOwnerCreateNestedManyWithoutToolInput, {nullable:true})
    toolOwners?: ToolOwnerCreateNestedManyWithoutToolInput;
}
