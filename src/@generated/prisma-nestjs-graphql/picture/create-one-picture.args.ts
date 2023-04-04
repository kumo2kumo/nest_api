import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureCreateInput } from './picture-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePictureArgs {

    @Field(() => PictureCreateInput, {nullable:false})
    @ValidateNested()
    @Type(() => PictureCreateInput)
    data!: PictureCreateInput;
}
