import { Injectable } from '@nestjs/common'
import { UniformOwner } from '../@generated/prisma-nestjs-graphql/uniform-owner/uniform-owner.model'
import { FindManyUniformOwnerArgs } from '../@generated/prisma-nestjs-graphql/uniform-owner/find-many-uniform-owner.args'
import { FindUniqueUniformOwnerArgs } from '../@generated/prisma-nestjs-graphql/uniform-owner/find-unique-uniform-owner.args'
import { CreateOneUniformOwnerArgs } from '../@generated/prisma-nestjs-graphql/uniform-owner/create-one-uniform-owner.args'
import { UpdateOneUniformOwnerArgs } from '../@generated/prisma-nestjs-graphql/uniform-owner/update-one-uniform-owner.args'
import { DeleteOneUniformOwnerArgs } from '../@generated/prisma-nestjs-graphql/uniform-owner/delete-one-uniform-owner.args'
import { PrismaService } from '../prisma.service'

@Injectable()
export class UniformOwnerService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManyUniformOwnerArgs): Promise<UniformOwner[] | null> {
    return this.prisma.uniformOwner.findMany(args)
  }

  create(args: CreateOneUniformOwnerArgs): Promise<UniformOwner | null> {
    //@ts-ignore
    return this.prisma.uniformOwner.create(args)
  }

  update(args: UpdateOneUniformOwnerArgs): Promise<UniformOwner | null> {
    //@ts-ignore
    return this.prisma.uniformOwner.update(args)
  }

  delete(args: DeleteOneUniformOwnerArgs): Promise<UniformOwner | null> {
    return this.prisma.uniformOwner.delete(args)
  }

  async getRelationField(args: FindUniqueUniformOwnerArgs): Promise<UniformOwner | null> {
    const uniformOwner: UniformOwner = await this.prisma.uniformOwner.findUnique({
      ...args,
      include: { user: true, club: true },
    })
    return uniformOwner
  }
}
