import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateManyUploadUserInput } from './report-create-many-upload-user.input';

@InputType()
export class ReportCreateManyUploadUserInputEnvelope {

    @Field(() => [ReportCreateManyUploadUserInput], {nullable:false})
    data!: Array<ReportCreateManyUploadUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
