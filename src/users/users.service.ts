import * as bcrypt from 'bcrypt'
import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model'
import { Club } from '../@generated/prisma-nestjs-graphql/club/club.model'
import { FindFirstUserArgs } from '../@generated/prisma-nestjs-graphql/user/find-first-user.args'
import { FindUniqueUserArgs } from '../@generated/prisma-nestjs-graphql/user/find-unique-user.args'
import { UserCreateInput } from './dto/user-create.input'
import { ClubService } from '../club/club.service'
import { FindManyUserArgs } from '../@generated/prisma-nestjs-graphql/user/find-many-user.args'
import { UpdateOneUserArgs } from '../@generated/prisma-nestjs-graphql/user/update-one-user.args'
import { SendEmail } from '../utils/send-email'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService, private readonly clubService: ClubService) {}

  async findFirst(args: FindFirstUserArgs): Promise<User | null> {
    return this.prisma.user.findFirst(args)
  }

  async findUnique(args: FindUniqueUserArgs): Promise<User | null> {
    return this.prisma.user.findUnique(args)
  }

  async findMany(args: FindManyUserArgs): Promise<User[]> {
    return this.prisma.user.findMany(args)
  }

  update(args: UpdateOneUserArgs): Promise<User | null> {
    //@ts-ignore
    return this.prisma.user.update(args)
  }

  async getClubOfUser(args: FindUniqueUserArgs): Promise<Club | null> {
    const user: User = await this.prisma.user.findUnique({
      ...args,
      include: { club: true },
    })
    return user.club
  }

  async createUser(input: UserCreateInput): Promise<User> {
    const rawPassword = input.password //mailで送るため素のパスワードを格納
    input.password = await bcrypt.hash(input.password, 10)
    const club = await this.clubService.findClubById(input.club)
    //@ts-ignore
    const data = { ...input, club: { connect: { id: club.id } } }
    try {
      const user = await this.prisma.user.create({ data })
      if (user) {
        const mailInfo = {
          name: user.name,
          email: user.email,
          password: rawPassword,
          clubName: club.name,
        }
        SendEmail(mailInfo)
      }
      return user
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
