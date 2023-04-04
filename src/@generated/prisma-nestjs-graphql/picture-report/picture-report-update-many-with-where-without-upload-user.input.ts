import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportScalarWhereInput } from './picture-report-scalar-where.input';
import { PictureReportUpdateManyMutationInput } from './picture-report-update-many-mutation.input';

@InputType()
export class PictureReportUpdateManyWithWhereWithoutUploadUserInput {

    @Field(() => PictureReportScalarWhereInput, {nullable:false})
    where!: PictureReportScalarWhereInput;

    @Field(() => PictureReportUpdateManyMutationInput, {nullable:false})
    data!: PictureReportUpdateManyMutationInput;
}
