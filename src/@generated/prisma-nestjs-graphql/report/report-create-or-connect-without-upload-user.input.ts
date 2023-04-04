import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportCreateWithoutUploadUserInput } from './report-create-without-upload-user.input';

@InputType()
export class ReportCreateOrConnectWithoutUploadUserInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;

    @Field(() => ReportCreateWithoutUploadUserInput, {nullable:false})
    create!: ReportCreateWithoutUploadUserInput;
}
