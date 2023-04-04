import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutUploadUserInput } from './report-create-without-upload-user.input';
import { ReportCreateOrConnectWithoutUploadUserInput } from './report-create-or-connect-without-upload-user.input';
import { ReportCreateManyUploadUserInputEnvelope } from './report-create-many-upload-user-input-envelope.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';

@InputType()
export class ReportCreateNestedManyWithoutUploadUserInput {

    @Field(() => [ReportCreateWithoutUploadUserInput], {nullable:true})
    create?: Array<ReportCreateWithoutUploadUserInput>;

    @Field(() => [ReportCreateOrConnectWithoutUploadUserInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutUploadUserInput>;

    @Field(() => ReportCreateManyUploadUserInputEnvelope, {nullable:true})
    createMany?: ReportCreateManyUploadUserInputEnvelope;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;
}
