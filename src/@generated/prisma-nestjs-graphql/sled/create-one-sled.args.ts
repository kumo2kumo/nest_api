import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SledCreateInput } from './sled-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSledArgs {

    @Field(() => SledCreateInput, {nullable:false})
    @ValidateNested()
    @Type(() => SledCreateInput)
    data!: SledCreateInput;
}
