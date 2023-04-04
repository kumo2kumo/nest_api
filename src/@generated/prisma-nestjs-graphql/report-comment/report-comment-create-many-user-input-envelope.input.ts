import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCommentCreateManyUserInput } from './report-comment-create-many-user.input';

@InputType()
export class ReportCommentCreateManyUserInputEnvelope {

    @Field(() => [ReportCommentCreateManyUserInput], {nullable:false})
    data!: Array<ReportCommentCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
