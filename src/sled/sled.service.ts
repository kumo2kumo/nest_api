import { Injectable } from '@nestjs/common'
import { Sled } from '../@generated/prisma-nestjs-graphql/sled/sled.model'
import { FindManySledArgs } from '../@generated/prisma-nestjs-graphql/sled/find-many-sled.args'
import { FindUniqueSledArgs } from '../@generated/prisma-nestjs-graphql/sled/find-unique-sled.args'
import { CreateOneSledArgs } from '../@generated/prisma-nestjs-graphql/sled/create-one-sled.args'
import { UpdateOneSledArgs } from '../@generated/prisma-nestjs-graphql/sled/update-one-sled.args'
import { DeleteOneSledArgs } from '../@generated/prisma-nestjs-graphql/sled/delete-one-sled.args'
import { PrismaService } from '../prisma.service'

@Injectable()
export class SledService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManySledArgs): Promise<Sled[] | null> {
    return this.prisma.sled.findMany(args)
  }

  create(args: CreateOneSledArgs): Promise<Sled | null> {
    //@ts-ignore
    return this.prisma.sled.create(args)
  }

  update(args: UpdateOneSledArgs): Promise<Sled | null> {
    //@ts-ignore
    return this.prisma.sled.update(args)
  }

  delete(args: DeleteOneSledArgs): Promise<Sled | null> {
    return this.prisma.sled.delete(args)
  }

  async getRelationField(args: FindUniqueSledArgs): Promise<Sled | null> {
    const sled: Sled = await this.prisma.sled.findUnique({
      ...args,
      include: { club: true, sledComments: true },
    })
    return sled
  }
}
