import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureUpdateInput } from './picture-update.input';
import { PictureWhereUniqueInput } from './picture-where-unique.input';

@ArgsType()
export class UpdateOnePictureArgs {

    @Field(() => PictureUpdateInput, {nullable:false})
    data!: PictureUpdateInput;

    @Field(() => PictureWhereUniqueInput, {nullable:false})
    where!: PictureWhereUniqueInput;
}
