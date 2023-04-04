import { Args, Parent, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { FindManyAttendanceArgs } from '../@generated/prisma-nestjs-graphql/attendance/find-many-attendance.args'
import { FindUniqueAttendanceArgs } from '../@generated/prisma-nestjs-graphql/attendance/find-unique-attendance.args'
import { CreateOneAttendanceArgs } from '../@generated/prisma-nestjs-graphql/attendance/create-one-attendance.args'
import { UpdateOneAttendanceArgs } from '../@generated/prisma-nestjs-graphql/attendance/update-one-attendance.args'
import { DeleteOneAttendanceArgs } from '../@generated/prisma-nestjs-graphql/attendance/delete-one-attendance.args'
import { Attendance } from '../@generated/prisma-nestjs-graphql/attendance/attendance.model'
import { AttendanceService } from './attendance.service'

@Resolver(() => Attendance)
export class AttendanceResolver {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Query(() => Attendance)
  indexAttendances(@Args() args: FindManyAttendanceArgs) {
    return this.attendanceService.findMany(args)
  }

  @Mutation(() => Attendance)
  async createAttendance(@Args() args: CreateOneAttendanceArgs): Promise<Attendance> {
    return this.attendanceService.create(args)
  }

  @Mutation(() => Attendance)
  async updateAttendance(@Args() args: UpdateOneAttendanceArgs): Promise<Attendance> {
    return this.attendanceService.update(args)
  }

  @Mutation(() => Attendance)
  async deleteAttendance(@Args() args: DeleteOneAttendanceArgs) {
    return this.attendanceService.delete(args)
  }

  @ResolveField()
  async schedule(@Parent() attendance: Attendance) {
    const arg: FindUniqueAttendanceArgs = { where: { id: attendance.id } }
    return (await this.attendanceService.getRelationField(arg)).schedule
  }
}
