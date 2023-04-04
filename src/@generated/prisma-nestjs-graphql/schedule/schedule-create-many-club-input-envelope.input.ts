import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleCreateManyClubInput } from './schedule-create-many-club.input';

@InputType()
export class ScheduleCreateManyClubInputEnvelope {

    @Field(() => [ScheduleCreateManyClubInput], {nullable:false})
    data!: Array<ScheduleCreateManyClubInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
