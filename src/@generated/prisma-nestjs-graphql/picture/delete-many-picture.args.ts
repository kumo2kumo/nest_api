import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureWhereInput } from './picture-where.input';

@ArgsType()
export class DeleteManyPictureArgs {

    @Field(() => PictureWhereInput, {nullable:true})
    where?: PictureWhereInput;
}
