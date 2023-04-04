import { Injectable } from '@nestjs/common'
import { PictureReport } from '../@generated/prisma-nestjs-graphql/picture-report/picture-report.model'
import { FindManyPictureReportArgs } from '../@generated/prisma-nestjs-graphql/picture-report/find-many-picture-report.args'
import { FindUniquePictureReportArgs } from '../@generated/prisma-nestjs-graphql/picture-report/find-unique-picture-report.args'
import { CreateOnePictureReportArgs } from '../@generated/prisma-nestjs-graphql/picture-report/create-one-picture-report.args'
import { UpdateOnePictureReportArgs } from '../@generated/prisma-nestjs-graphql/picture-report/update-one-picture-report.args'
import { DeleteOnePictureReportArgs } from '../@generated/prisma-nestjs-graphql/picture-report/delete-one-picture-report.args'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PictureReportService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManyPictureReportArgs): Promise<PictureReport[] | null> {
    return this.prisma.pictureReport.findMany(args)
  }

  create(args: CreateOnePictureReportArgs): Promise<PictureReport | null> {
    //@ts-ignore
    return this.prisma.pictureReport.create(args)
  }

  update(args: UpdateOnePictureReportArgs): Promise<PictureReport | null> {
    //@ts-ignore
    return this.prisma.pictureReport.update(args)
  }

  delete(args: DeleteOnePictureReportArgs): Promise<PictureReport | null> {
    return this.prisma.pictureReport.delete(args)
  }

  async getRelationField(args: FindUniquePictureReportArgs): Promise<PictureReport | null> {
    const pictureReport: PictureReport = await this.prisma.pictureReport.findUnique({
      ...args,
      include: { uploadUser: true, club: true, pictures: true },
    })
    return pictureReport
  }
}
