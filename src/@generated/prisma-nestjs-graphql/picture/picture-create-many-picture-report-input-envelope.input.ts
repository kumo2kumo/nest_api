import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureCreateManyPictureReportInput } from './picture-create-many-picture-report.input';

@InputType()
export class PictureCreateManyPictureReportInputEnvelope {

    @Field(() => [PictureCreateManyPictureReportInput], {nullable:false})
    data!: Array<PictureCreateManyPictureReportInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
