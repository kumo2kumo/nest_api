import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model'
import { UsersService } from './users.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { UseGuards } from '@nestjs/common'
import { FindFirstUserArgs } from '../@generated/prisma-nestjs-graphql/user/find-first-user.args'
import { FindUniqueUserArgs } from '../@generated/prisma-nestjs-graphql/user/find-unique-user.args'
import { UserCreateInput } from './dto/user-create.input'
import { FindManyUserArgs } from '../@generated/prisma-nestjs-graphql/user/find-many-user.args'
import { UpdateOneUserArgs } from '../@generated/prisma-nestjs-graphql/user/update-one-user.args'
@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => User)
  // @UseGuards(JwtAuthGuard)
  showUser(@Args() args: FindFirstUserArgs) {
    return this.userService.findFirst(args)
  }

  @Query(() => [User])
  // @UseGuards(JwtAuthGuard)
  indexUsers(@Args() args: FindManyUserArgs) {
    return this.userService.findMany(args)
  }

  @ResolveField()
  async club(@Parent() user: User) {
    const arg: FindUniqueUserArgs = { where: { id: user.id } }
    return await this.userService.getClubOfUser(arg)
  }

  @Mutation(() => User)
  async createUser(@Args('data') input: UserCreateInput) {
    return this.userService.createUser(input)
  }

  @Mutation(() => User)
  async updateUser(@Args() args: UpdateOneUserArgs): Promise<User> {
    return this.userService.update(args)
  }
}
