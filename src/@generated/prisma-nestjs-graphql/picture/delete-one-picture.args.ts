import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureWhereUniqueInput } from './picture-where-unique.input';

@ArgsType()
export class DeleteOnePictureArgs {

    @Field(() => PictureWhereUniqueInput, {nullable:false})
    where!: PictureWhereUniqueInput;
}
