import { Args, Parent, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { FindManyPictureArgs } from '../@generated/prisma-nestjs-graphql/picture/find-many-picture.args'
import { FindUniquePictureArgs } from '../@generated/prisma-nestjs-graphql/picture/find-unique-picture.args'
import { CreateOnePictureArgs } from '../@generated/prisma-nestjs-graphql/picture/create-one-picture.args'
import { UpdateOnePictureArgs } from '../@generated/prisma-nestjs-graphql/picture/update-one-picture.args'
import { DeleteOnePictureArgs } from '../@generated/prisma-nestjs-graphql/picture/delete-one-picture.args'
import { Picture } from '../@generated/prisma-nestjs-graphql/picture/picture.model'
import { PictureService } from './picture.service'

@Resolver(() => Picture)
export class PictureResolver {
  constructor(private readonly pictureService: PictureService) {}

  @Query(() => [Picture])
  indexPictures(@Args() args: FindManyPictureArgs) {
    return this.pictureService.findMany(args)
  }

  @Mutation(() => Picture)
  async createPicture(@Args() args: CreateOnePictureArgs): Promise<Picture> {
    return this.pictureService.create(args)
  }

  @Mutation(() => Picture)
  async updatePicture(@Args() args: UpdateOnePictureArgs): Promise<Picture> {
    return this.pictureService.update(args)
  }

  @Mutation(() => Picture)
  async deletePicture(@Args() args: DeleteOnePictureArgs): Promise<Picture> {
    return this.pictureService.delete(args)
  }

  @ResolveField()
  async pictureReport(@Parent() picture: Picture) {
    const arg: FindUniquePictureArgs = { where: { id: picture.id } }
    return (await this.pictureService.getRelationField(arg)).pictureReport
  }
}
