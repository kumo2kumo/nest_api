import { Args, Parent, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { FindManyClubArgs } from '../@generated/prisma-nestjs-graphql/club/find-many-club.args'
import { FindUniqueClubArgs } from '../@generated/prisma-nestjs-graphql/club/find-unique-club.args'
import { CreateOneClubArgs } from '../@generated/prisma-nestjs-graphql/club/create-one-club.args'
import { UpdateOneClubArgs } from '../@generated/prisma-nestjs-graphql/club/update-one-club.args'
import { DeleteOneClubArgs } from '../@generated/prisma-nestjs-graphql/club/delete-one-club.args'
import { ClubService } from './club.service'
import { Club } from '../@generated/prisma-nestjs-graphql/club/club.model'

@Resolver(() => Club)
export class ClubResolver {
  constructor(private readonly clubService: ClubService) {}
  @Query(() => [Club])
  indexClubs(@Args() args: FindManyClubArgs) {
    return this.clubService.findMany(args)
  }

  @Mutation(() => Club)
  async createClub(@Args() args: CreateOneClubArgs): Promise<Club> {
    return this.clubService.create(args)
  }

  @Mutation(() => Club)
  async updateClub(@Args() args: UpdateOneClubArgs): Promise<Club> {
    return this.clubService.update(args)
  }

  @Mutation(() => Club)
  async deleteClub(@Args() args: DeleteOneClubArgs): Promise<Club> {
    return this.clubService.delete(args)
  }

  @ResolveField()
  async pictureReports(@Parent() club: Club) {
    const arg: FindUniqueClubArgs = { where: { id: club.id } }
    return (await this.clubService.getRelationField(arg)).pictureReports
  }

  @ResolveField()
  async reports(@Parent() club: Club) {
    const arg: FindUniqueClubArgs = { where: { id: club.id } }
    return (await this.clubService.getRelationField(arg)).reports
  }

  @ResolveField()
  async schedules(@Parent() club: Club) {
    const arg: FindUniqueClubArgs = { where: { id: club.id } }
    return (await this.clubService.getRelationField(arg)).schedules
  }

  @ResolveField()
  async users(@Parent() club: Club) {
    const arg: FindUniqueClubArgs = { where: { id: club.id } }
    return (await this.clubService.getRelationField(arg)).users
  }
}
