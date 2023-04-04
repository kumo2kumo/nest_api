import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureWhereUniqueInput } from './picture-where-unique.input';

@ArgsType()
export class FindUniquePictureArgs {

    @Field(() => PictureWhereUniqueInput, {nullable:false})
    where!: PictureWhereUniqueInput;
}
