import { Injectable } from '@nestjs/common'
import { Member } from '../@generated/prisma-nestjs-graphql/member/member.model'
import { FindManyMemberArgs } from '../@generated/prisma-nestjs-graphql/member/find-many-member.args'
import { FindUniqueMemberArgs } from '../@generated/prisma-nestjs-graphql/member/find-unique-member.args'
import { CreateOneMemberArgs } from '../@generated/prisma-nestjs-graphql/member/create-one-member.args'
import { UpdateOneMemberArgs } from '../@generated/prisma-nestjs-graphql/member/update-one-member.args'
import { DeleteOneMemberArgs } from '../@generated/prisma-nestjs-graphql/member/delete-one-member.args'
import { PrismaService } from '../prisma.service'

@Injectable()
export class MemberService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManyMemberArgs): Promise<Member[] | null> {
    return this.prisma.member.findMany(args)
  }

  create(args: CreateOneMemberArgs): Promise<Member | null> {
    //@ts-ignore
    return this.prisma.member.create(args)
  }

  update(args: UpdateOneMemberArgs): Promise<Member | null> {
    //@ts-ignore
    return this.prisma.member.update(args)
  }

  delete(args: DeleteOneMemberArgs): Promise<Member | null> {
    return this.prisma.member.delete(args)
  }

  async getRelationField(args: FindUniqueMemberArgs): Promise<Member | null> {
    const member: Member = await this.prisma.member.findUnique({
      ...args,
      include: { user: true },
    })
    return member
  }
}
