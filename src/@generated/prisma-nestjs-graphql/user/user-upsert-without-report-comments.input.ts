import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReportCommentsInput } from './user-update-without-report-comments.input';
import { UserCreateWithoutReportCommentsInput } from './user-create-without-report-comments.input';

@InputType()
export class UserUpsertWithoutReportCommentsInput {

    @Field(() => UserUpdateWithoutReportCommentsInput, {nullable:false})
    update!: UserUpdateWithoutReportCommentsInput;

    @Field(() => UserCreateWithoutReportCommentsInput, {nullable:false})
    create!: UserCreateWithoutReportCommentsInput;
}
