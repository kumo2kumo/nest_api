import { Injectable } from '@nestjs/common'
import { Attendance } from '../@generated/prisma-nestjs-graphql/attendance/attendance.model'
import { FindManyAttendanceArgs } from '../@generated/prisma-nestjs-graphql/attendance/find-many-attendance.args'
import { FindUniqueAttendanceArgs } from '../@generated/prisma-nestjs-graphql/attendance/find-unique-attendance.args'
import { CreateOneAttendanceArgs } from '../@generated/prisma-nestjs-graphql/attendance/create-one-attendance.args'
import { UpdateOneAttendanceArgs } from '../@generated/prisma-nestjs-graphql/attendance/update-one-attendance.args'
import { DeleteOneAttendanceArgs } from '../@generated/prisma-nestjs-graphql/attendance/delete-one-attendance.args'
import { PrismaService } from '../prisma.service'

@Injectable()
export class AttendanceService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManyAttendanceArgs): Promise<Attendance[] | null> {
    return this.prisma.attendance.findMany(args)
  }

  create(args: CreateOneAttendanceArgs): Promise<Attendance | null> {
    //@ts-ignore
    return this.prisma.attendance.create(args)
  }

  update(args: UpdateOneAttendanceArgs): Promise<Attendance | null> {
    //@ts-ignore
    return this.prisma.attendance.update(args)
  }

  delete(args: DeleteOneAttendanceArgs) {
    return this.prisma.attendance.delete(args)
  }

  async getRelationField(args: FindUniqueAttendanceArgs): Promise<Attendance | null> {
    const attendance: Attendance = await this.prisma.attendance.findUnique({
      ...args,
      include: { schedule: true },
    })
    return attendance
  }
}
