import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureWhereUniqueInput } from './picture-where-unique.input';
import { PictureCreateInput } from './picture-create.input';
import { PictureUpdateInput } from './picture-update.input';

@ArgsType()
export class UpsertOnePictureArgs {

    @Field(() => PictureWhereUniqueInput, {nullable:false})
    where!: PictureWhereUniqueInput;

    @Field(() => PictureCreateInput, {nullable:false})
    create!: PictureCreateInput;

    @Field(() => PictureUpdateInput, {nullable:false})
    update!: PictureUpdateInput;
}
