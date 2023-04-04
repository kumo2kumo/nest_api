import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithoutUploadUserInput } from './report-update-without-upload-user.input';

@InputType()
export class ReportUpdateWithWhereUniqueWithoutUploadUserInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;

    @Field(() => ReportUpdateWithoutUploadUserInput, {nullable:false})
    data!: ReportUpdateWithoutUploadUserInput;
}
