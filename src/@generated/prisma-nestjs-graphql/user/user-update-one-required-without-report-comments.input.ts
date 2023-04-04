import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReportCommentsInput } from './user-create-without-report-comments.input';
import { UserCreateOrConnectWithoutReportCommentsInput } from './user-create-or-connect-without-report-comments.input';
import { UserUpsertWithoutReportCommentsInput } from './user-upsert-without-report-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutReportCommentsInput } from './user-update-without-report-comments.input';

@InputType()
export class UserUpdateOneRequiredWithoutReportCommentsInput {

    @Field(() => UserCreateWithoutReportCommentsInput, {nullable:true})
    create?: UserCreateWithoutReportCommentsInput;

    @Field(() => UserCreateOrConnectWithoutReportCommentsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutReportCommentsInput;

    @Field(() => UserUpsertWithoutReportCommentsInput, {nullable:true})
    upsert?: UserUpsertWithoutReportCommentsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutReportCommentsInput, {nullable:true})
    update?: UserUpdateWithoutReportCommentsInput;
}
