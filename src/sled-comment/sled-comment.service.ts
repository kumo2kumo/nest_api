import { Injectable } from '@nestjs/common'
import { SledComment } from '../@generated/prisma-nestjs-graphql/sled-comment/sled-comment.model'
import { FindManySledCommentArgs } from '../@generated/prisma-nestjs-graphql/sled-comment/find-many-sled-comment.args'
import { FindUniqueSledCommentArgs } from '../@generated/prisma-nestjs-graphql/sled-comment/find-unique-sled-comment.args'
import { CreateOneSledCommentArgs } from '../@generated/prisma-nestjs-graphql/sled-comment/create-one-sled-comment.args'
import { UpdateOneSledCommentArgs } from '../@generated/prisma-nestjs-graphql/sled-comment/update-one-sled-comment.args'
import { DeleteOneSledCommentArgs } from '../@generated/prisma-nestjs-graphql/sled-comment/delete-one-sled-comment.args'
import { PrismaService } from '../prisma.service'

@Injectable()
export class SledCommentService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManySledCommentArgs): Promise<SledComment[] | null> {
    return this.prisma.sledComment.findMany(args)
  }

  create(args: CreateOneSledCommentArgs): Promise<SledComment | null> {
    //@ts-ignore
    return this.prisma.sledComment.create(args)
  }

  update(args: UpdateOneSledCommentArgs): Promise<SledComment | null> {
    //@ts-ignore
    return this.prisma.sledComment.update(args)
  }

  delete(args: DeleteOneSledCommentArgs): Promise<SledComment | null> {
    return this.prisma.sledComment.delete(args)
  }

  async getRelationField(args: FindUniqueSledCommentArgs): Promise<SledComment | null> {
    const sledComment: SledComment = await this.prisma.sledComment.findUnique({
      ...args,
      include: { user: true, sled: true, updateUser: true },
    })
    return sledComment
  }
}
