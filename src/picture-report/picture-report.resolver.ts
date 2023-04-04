import { Args, Parent, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { FindManyPictureReportArgs } from '../@generated/prisma-nestjs-graphql/picture-report/find-many-picture-report.args'
import { FindUniquePictureReportArgs } from '../@generated/prisma-nestjs-graphql/picture-report/find-unique-picture-report.args'
import { CreateOnePictureReportArgs } from '../@generated/prisma-nestjs-graphql/picture-report/create-one-picture-report.args'
import { UpdateOnePictureReportArgs } from '../@generated/prisma-nestjs-graphql/picture-report/update-one-picture-report.args'
import { DeleteOnePictureReportArgs } from '../@generated/prisma-nestjs-graphql/picture-report/delete-one-picture-report.args'
import { PictureReport } from '../@generated/prisma-nestjs-graphql/picture-report/picture-report.model'
import { PictureReportService } from './picture-report.service'

@Resolver(() => PictureReport)
export class PictureReportResolver {
  constructor(private readonly pictureReportService: PictureReportService) {}

  @Query(() => [PictureReport])
  indexPictureReports(@Args() args: FindManyPictureReportArgs) {
    return this.pictureReportService.findMany(args)
  }

  @Mutation(() => PictureReport)
  async createPictureReport(@Args() args: CreateOnePictureReportArgs): Promise<PictureReport> {
    return this.pictureReportService.create(args)
  }

  @Mutation(() => PictureReport)
  async updatePictureReport(@Args() args: UpdateOnePictureReportArgs): Promise<PictureReport> {
    return this.pictureReportService.update(args)
  }

  @Mutation(() => PictureReport)
  async deletePictureReport(@Args() args: DeleteOnePictureReportArgs): Promise<PictureReport> {
    return this.pictureReportService.delete(args)
  }

  @ResolveField()
  async uploadUser(@Parent() pictureReport: PictureReport) {
    const arg: FindUniquePictureReportArgs = { where: { id: pictureReport.id } }
    return (await this.pictureReportService.getRelationField(arg)).uploadUser
  }

  @ResolveField()
  async club(@Parent() pictureReport: PictureReport) {
    const arg: FindUniquePictureReportArgs = { where: { id: pictureReport.id } }
    return (await this.pictureReportService.getRelationField(arg)).club
  }

  @ResolveField()
  async pictures(@Parent() pictureReport: PictureReport) {
    const arg: FindUniquePictureReportArgs = { where: { id: pictureReport.id } }
    return (await this.pictureReportService.getRelationField(arg)).pictures
  }
}
