import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureUpdateManyMutationInput } from './picture-update-many-mutation.input';
import { PictureWhereInput } from './picture-where.input';

@ArgsType()
export class UpdateManyPictureArgs {

    @Field(() => PictureUpdateManyMutationInput, {nullable:false})
    data!: PictureUpdateManyMutationInput;

    @Field(() => PictureWhereInput, {nullable:true})
    where?: PictureWhereInput;
}
