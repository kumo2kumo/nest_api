import { Args, Parent, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { FindManyReportCommentArgs } from '../@generated/prisma-nestjs-graphql/report-comment/find-many-report-comment.args'
import { FindUniqueReportCommentArgs } from '../@generated/prisma-nestjs-graphql/report-comment/find-unique-report-comment.args'
import { CreateOneReportCommentArgs } from '../@generated/prisma-nestjs-graphql/report-comment/create-one-report-comment.args'
import { UpdateOneReportCommentArgs } from '../@generated/prisma-nestjs-graphql/report-comment/update-one-report-comment.args'
import { DeleteOneReportCommentArgs } from '../@generated/prisma-nestjs-graphql/report-comment/delete-one-report-comment.args'
import { ReportComment } from '../@generated/prisma-nestjs-graphql/report-comment/report-comment.model'
import { ReportCommentService } from './report-comment.service'

@Resolver(() => ReportComment)
export class ReportCommentResolver {
  constructor(private readonly reportCommentService: ReportCommentService) {}

  @Query(() => [ReportComment])
  indexReportComments(@Args() args: FindManyReportCommentArgs) {
    return this.reportCommentService.findMany(args)
  }

  @Mutation(() => ReportComment)
  async createReportComment(@Args() args: CreateOneReportCommentArgs): Promise<ReportComment> {
    return this.reportCommentService.create(args)
  }

  @Mutation(() => ReportComment)
  async updateReportComment(@Args() args: UpdateOneReportCommentArgs): Promise<ReportComment> {
    return this.reportCommentService.update(args)
  }

  @Mutation(() => ReportComment)
  async deleteReportComment(@Args() args: DeleteOneReportCommentArgs): Promise<ReportComment> {
    return this.reportCommentService.delete(args)
  }

  @ResolveField()
  async user(@Parent() reportComment: ReportComment) {
    const arg: FindUniqueReportCommentArgs = { where: { id: reportComment.id } }
    return (await this.reportCommentService.getRelationField(arg)).user
  }

  @ResolveField()
  async report(@Parent() reportComment: ReportComment) {
    const arg: FindUniqueReportCommentArgs = { where: { id: reportComment.id } }
    return (await this.reportCommentService.getRelationField(arg)).report
  }
}
