import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { FindManyReportArgs } from '../@generated/prisma-nestjs-graphql/report/find-many-report.args'
import { FindUniqueReportArgs } from '../@generated/prisma-nestjs-graphql/report/find-unique-report.args'
import { Report } from '../@generated/prisma-nestjs-graphql/report/report.model'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { ReportService } from './report.service'
import { CreateOneReportArgs } from '../@generated/prisma-nestjs-graphql/report/create-one-report.args'
import { UpdateOneReportArgs } from '../@generated/prisma-nestjs-graphql/report/update-one-report.args'
import { DeleteOneReportArgs } from '../@generated/prisma-nestjs-graphql/report/delete-one-report.args'
import { CurrentUser } from '../users/decorators/user.decorator'

@Resolver(() => Report)
export class ReportResolver {
  constructor(private readonly reportService: ReportService) {}

  @Query(() => [Report])
  indexReports(@Args() args: FindManyReportArgs) {
    return this.reportService.findMany(args)
  }

  @Mutation(() => Report)
  async createReport(@Args() args: CreateOneReportArgs): Promise<Report> {
    return this.reportService.create(args)
  }

  @Mutation(() => Report)
  async updateReport(@Args() args: UpdateOneReportArgs): Promise<Report> {
    return this.reportService.update(args)
  }

  @Mutation(() => Report)
  async deleteReport(@Args() args: DeleteOneReportArgs): Promise<Report> {
    return this.reportService.delete(args)
  }

  @ResolveField()
  async reportComments(@Parent() report: Report) {
    const arg: FindUniqueReportArgs = { where: { id: report.id } }
    return (await this.reportService.getRelationField(arg)).reportComments
  }

  @ResolveField()
  async club(@Parent() report: Report) {
    const arg: FindUniqueReportArgs = { where: { id: report.id } }
    return (await this.reportService.getRelationField(arg)).club
  }

  @ResolveField()
  async uploadUser(@Parent() report: Report) {
    const arg: FindUniqueReportArgs = { where: { id: report.id } }
    return (await this.reportService.getRelationField(arg)).uploadUser
  }
}
