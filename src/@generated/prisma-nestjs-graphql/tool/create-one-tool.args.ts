import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolCreateInput } from './tool-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneToolArgs {

    @Field(() => ToolCreateInput, {nullable:false})
    @ValidateNested()
    @Type(() => ToolCreateInput)
    data!: ToolCreateInput;
}
