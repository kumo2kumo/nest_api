import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolOwnerCreateInput } from './tool-owner-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneToolOwnerArgs {

    @Field(() => ToolOwnerCreateInput, {nullable:false})
    @ValidateNested()
    @Type(() => ToolOwnerCreateInput)
    data!: ToolOwnerCreateInput;
}
