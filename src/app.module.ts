import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { PrismaService } from './prisma.service'
import { UsersModule } from './users/users.module'
import { ClubModule } from './club/club.module'
import { ReportModule } from './report/report.module'
import { ScheduleModule } from './schedule/schedule.module'
import { AttendanceModule } from './attendance/attendance.module'
import { MemberModule } from './member/member.module'
import { ToolModule } from './tool/tool.module'
import { ToolOwnerModule } from './tool-owner/tool-owner.module'
import { EventFeeModule } from './event-fee/event-fee.module'
import { MembershipFeeModule } from './membership-fee/membership-fee.module'
import { UniformOwnerModule } from './uniform-owner/uniform-owner.module';
import { SledModule } from './sled/sled.module';
import { SledCommentModule } from './sled-comment/sled-comment.module';
import { PictureReportModule } from './picture-report/picture-report.module';
import { PictureModule } from './picture/picture.module';
import { ReportCommentModule } from './report-comment/report-comment.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    AuthModule,
    UsersModule,
    ClubModule,
    ReportModule,
    ScheduleModule,
    AttendanceModule,
    MemberModule,
    ToolModule,
    ToolOwnerModule,
    EventFeeModule,
    MembershipFeeModule,
    UniformOwnerModule,
    SledModule,
    SledCommentModule,
    PictureReportModule,
    PictureModule,
    ReportCommentModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
