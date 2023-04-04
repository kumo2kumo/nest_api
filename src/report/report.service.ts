import { Injectable } from '@nestjs/common'
import { FindManyReportArgs } from '../@generated/prisma-nestjs-graphql/report/find-many-report.args'
import { PrismaService } from '../prisma.service'
import { Report } from '../@generated/prisma-nestjs-graphql/report/report.model'
import { FindUniqueReportArgs } from '../@generated/prisma-nestjs-graphql/report/find-unique-report.args'
import { CreateOneReportArgs } from '../@generated/prisma-nestjs-graphql/report/create-one-report.args'
import { UpdateOneReportArgs } from '../@generated/prisma-nestjs-graphql/report/update-one-report.args'
import { DeleteOneReportArgs } from '../@generated/prisma-nestjs-graphql/report/delete-one-report.args'

@Injectable()
export class ReportService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManyReportArgs): Promise<Report[] | null> {
    return this.prisma.report.findMany(args)
  }

  create(args: CreateOneReportArgs): Promise<Report | null> {
    //@ts-ignore
    return this.prisma.report.create(args)
  }

  update(args: UpdateOneReportArgs): Promise<Report | null> {
    //@ts-ignore
    return this.prisma.report.update(args)
  }

  delete(args: DeleteOneReportArgs): Promise<Report | null> {
    return this.prisma.report.delete(args)
  }

  async getRelationField(args: FindUniqueReportArgs): Promise<Report | null> {
    const report: Report = await this.prisma.report.findUnique({
      ...args,
      include: { club: true, uploadUser: true, reportComments: true },
    })
    return report
  }
}
