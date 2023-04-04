import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureScalarWhereInput } from './picture-scalar-where.input';
import { PictureUpdateManyMutationInput } from './picture-update-many-mutation.input';

@InputType()
export class PictureUpdateManyWithWhereWithoutPictureReportInput {

    @Field(() => PictureScalarWhereInput, {nullable:false})
    where!: PictureScalarWhereInput;

    @Field(() => PictureUpdateManyMutationInput, {nullable:false})
    data!: PictureUpdateManyMutationInput;
}
