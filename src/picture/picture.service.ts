import { Injectable } from '@nestjs/common'
import { Picture } from '../@generated/prisma-nestjs-graphql/picture/picture.model'
import { FindManyPictureArgs } from '../@generated/prisma-nestjs-graphql/picture/find-many-picture.args'
import { FindUniquePictureArgs } from '../@generated/prisma-nestjs-graphql/picture/find-unique-picture.args'
import { CreateOnePictureArgs } from '../@generated/prisma-nestjs-graphql/picture/create-one-picture.args'
import { UpdateOnePictureArgs } from '../@generated/prisma-nestjs-graphql/picture/update-one-picture.args'
import { DeleteOnePictureArgs } from '../@generated/prisma-nestjs-graphql/picture/delete-one-picture.args'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PictureService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManyPictureArgs): Promise<Picture[] | null> {
    return this.prisma.picture.findMany(args)
  }

  create(args: CreateOnePictureArgs): Promise<Picture | null> {
    //@ts-ignore
    return this.prisma.picture.create(args)
  }

  update(args: UpdateOnePictureArgs): Promise<Picture | null> {
    //@ts-ignore
    return this.prisma.picture.update(args)
  }

  delete(args: DeleteOnePictureArgs): Promise<Picture | null> {
    return this.prisma.picture.delete(args)
  }

  async getRelationField(args: FindUniquePictureArgs): Promise<Picture | null> {
    const picture: Picture = await this.prisma.picture.findUnique({
      ...args,
      include: { pictureReport: true },
    })
    return picture
  }
}
