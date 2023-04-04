import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureCreateManyInput } from './picture-create-many.input';

@ArgsType()
export class CreateManyPictureArgs {

    @Field(() => [PictureCreateManyInput], {nullable:false})
    data!: Array<PictureCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
