import { Injectable } from '@nestjs/common'
import { ReportComment } from '../@generated/prisma-nestjs-graphql/report-comment/report-comment.model'
import { FindManyReportCommentArgs } from '../@generated/prisma-nestjs-graphql/report-comment/find-many-report-comment.args'
import { FindUniqueReportCommentArgs } from '../@generated/prisma-nestjs-graphql/report-comment/find-unique-report-comment.args'
import { CreateOneReportCommentArgs } from '../@generated/prisma-nestjs-graphql/report-comment/create-one-report-comment.args'
import { UpdateOneReportCommentArgs } from '../@generated/prisma-nestjs-graphql/report-comment/update-one-report-comment.args'
import { DeleteOneReportCommentArgs } from '../@generated/prisma-nestjs-graphql/report-comment/delete-one-report-comment.args'
import { PrismaService } from '../prisma.service'

@Injectable()
export class ReportCommentService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManyReportCommentArgs): Promise<ReportComment[] | null> {
    return this.prisma.reportComment.findMany(args)
  }

  create(args: CreateOneReportCommentArgs): Promise<ReportComment | null> {
    //@ts-ignore
    return this.prisma.reportComment.create(args)
  }

  update(args: UpdateOneReportCommentArgs): Promise<ReportComment | null> {
    //@ts-ignore
    return this.prisma.reportComment.update(args)
  }

  delete(args: DeleteOneReportCommentArgs): Promise<ReportComment | null> {
    return this.prisma.reportComment.delete(args)
  }

  async getRelationField(args: FindUniqueReportCommentArgs): Promise<ReportComment | null> {
    const reportComment: ReportComment = await this.prisma.reportComment.findUnique({
      ...args,
      include: { user: true, report: true },
    })
    return reportComment
  }
}
