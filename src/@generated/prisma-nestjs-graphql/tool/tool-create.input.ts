import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ClubCreateNestedOneWithoutToolsInput } from '../club/club-create-nested-one-without-tools.input';
import { ToolOwnerCreateNestedManyWithoutToolInput } from '../tool-owner/tool-owner-create-nested-many-without-tool.input';

@InputType()
export class ToolCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(100)
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ClubCreateNestedOneWithoutToolsInput, {nullable:false})
    club!: ClubCreateNestedOneWithoutToolsInput;

    @Field(() => ToolOwnerCreateNestedManyWithoutToolInput, {nullable:true})
    toolOwners?: ToolOwnerCreateNestedManyWithoutToolInput;
}
