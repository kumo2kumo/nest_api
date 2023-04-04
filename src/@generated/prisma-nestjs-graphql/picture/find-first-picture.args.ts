import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureWhereInput } from './picture-where.input';
import { PictureOrderByWithRelationInput } from './picture-order-by-with-relation.input';
import { PictureWhereUniqueInput } from './picture-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PictureScalarFieldEnum } from './picture-scalar-field.enum';

@ArgsType()
export class FindFirstPictureArgs {

    @Field(() => PictureWhereInput, {nullable:true})
    where?: PictureWhereInput;

    @Field(() => [PictureOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PictureOrderByWithRelationInput>;

    @Field(() => PictureWhereUniqueInput, {nullable:true})
    cursor?: PictureWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PictureScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PictureScalarFieldEnum>;
}
