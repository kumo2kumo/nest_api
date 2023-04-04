import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureReportCreateManyInput } from './picture-report-create-many.input';

@ArgsType()
export class CreateManyPictureReportArgs {

    @Field(() => [PictureReportCreateManyInput], {nullable:false})
    data!: Array<PictureReportCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
