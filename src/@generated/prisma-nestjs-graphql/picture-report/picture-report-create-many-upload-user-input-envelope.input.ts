import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportCreateManyUploadUserInput } from './picture-report-create-many-upload-user.input';

@InputType()
export class PictureReportCreateManyUploadUserInputEnvelope {

    @Field(() => [PictureReportCreateManyUploadUserInput], {nullable:false})
    data!: Array<PictureReportCreateManyUploadUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
