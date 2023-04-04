import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureReportUpdateManyMutationInput } from './picture-report-update-many-mutation.input';
import { PictureReportWhereInput } from './picture-report-where.input';

@ArgsType()
export class UpdateManyPictureReportArgs {

    @Field(() => PictureReportUpdateManyMutationInput, {nullable:false})
    data!: PictureReportUpdateManyMutationInput;

    @Field(() => PictureReportWhereInput, {nullable:true})
    where?: PictureReportWhereInput;
}
