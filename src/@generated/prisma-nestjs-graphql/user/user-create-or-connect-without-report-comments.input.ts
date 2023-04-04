import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutReportCommentsInput } from './user-create-without-report-comments.input';

@InputType()
export class UserCreateOrConnectWithoutReportCommentsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutReportCommentsInput, {nullable:false})
    create!: UserCreateWithoutReportCommentsInput;
}
