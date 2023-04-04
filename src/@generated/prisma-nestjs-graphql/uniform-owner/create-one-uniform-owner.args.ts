import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UniformOwnerCreateInput } from './uniform-owner-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUniformOwnerArgs {

    @Field(() => UniformOwnerCreateInput, {nullable:false})
    @ValidateNested()
    @Type(() => UniformOwnerCreateInput)
    data!: UniformOwnerCreateInput;
}
