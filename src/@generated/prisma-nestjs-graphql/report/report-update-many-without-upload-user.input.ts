import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutUploadUserInput } from './report-create-without-upload-user.input';
import { ReportCreateOrConnectWithoutUploadUserInput } from './report-create-or-connect-without-upload-user.input';
import { ReportUpsertWithWhereUniqueWithoutUploadUserInput } from './report-upsert-with-where-unique-without-upload-user.input';
import { ReportCreateManyUploadUserInputEnvelope } from './report-create-many-upload-user-input-envelope.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithWhereUniqueWithoutUploadUserInput } from './report-update-with-where-unique-without-upload-user.input';
import { ReportUpdateManyWithWhereWithoutUploadUserInput } from './report-update-many-with-where-without-upload-user.input';
import { ReportScalarWhereInput } from './report-scalar-where.input';

@InputType()
export class ReportUpdateManyWithoutUploadUserInput {

    @Field(() => [ReportCreateWithoutUploadUserInput], {nullable:true})
    create?: Array<ReportCreateWithoutUploadUserInput>;

    @Field(() => [ReportCreateOrConnectWithoutUploadUserInput], {nullable:true})
    connectOrCreate?: Array<ReportCreateOrConnectWithoutUploadUserInput>;

    @Field(() => [ReportUpsertWithWhereUniqueWithoutUploadUserInput], {nullable:true})
    upsert?: Array<ReportUpsertWithWhereUniqueWithoutUploadUserInput>;

    @Field(() => ReportCreateManyUploadUserInputEnvelope, {nullable:true})
    createMany?: ReportCreateManyUploadUserInputEnvelope;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    set?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    delete?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    connect?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportUpdateWithWhereUniqueWithoutUploadUserInput], {nullable:true})
    update?: Array<ReportUpdateWithWhereUniqueWithoutUploadUserInput>;

    @Field(() => [ReportUpdateManyWithWhereWithoutUploadUserInput], {nullable:true})
    updateMany?: Array<ReportUpdateManyWithWhereWithoutUploadUserInput>;

    @Field(() => [ReportScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReportScalarWhereInput>;
}
