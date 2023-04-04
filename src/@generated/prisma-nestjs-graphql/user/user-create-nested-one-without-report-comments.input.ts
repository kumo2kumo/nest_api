import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReportCommentsInput } from './user-create-without-report-comments.input';
import { UserCreateOrConnectWithoutReportCommentsInput } from './user-create-or-connect-without-report-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReportCommentsInput {

    @Field(() => UserCreateWithoutReportCommentsInput, {nullable:true})
    create?: UserCreateWithoutReportCommentsInput;

    @Field(() => UserCreateOrConnectWithoutReportCommentsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutReportCommentsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
