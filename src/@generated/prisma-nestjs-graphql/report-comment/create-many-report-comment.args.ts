import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportCommentCreateManyInput } from './report-comment-create-many.input';

@ArgsType()
export class CreateManyReportCommentArgs {

    @Field(() => [ReportCommentCreateManyInput], {nullable:false})
    data!: Array<ReportCommentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
