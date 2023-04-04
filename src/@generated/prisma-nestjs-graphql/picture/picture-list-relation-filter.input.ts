import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureWhereInput } from './picture-where.input';

@InputType()
export class PictureListRelationFilter {

    @Field(() => PictureWhereInput, {nullable:true})
    every?: PictureWhereInput;

    @Field(() => PictureWhereInput, {nullable:true})
    some?: PictureWhereInput;

    @Field(() => PictureWhereInput, {nullable:true})
    none?: PictureWhereInput;
}
