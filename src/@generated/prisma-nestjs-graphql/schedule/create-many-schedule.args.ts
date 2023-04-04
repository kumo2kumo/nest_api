import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScheduleCreateManyInput } from './schedule-create-many.input';

@ArgsType()
export class CreateManyScheduleArgs {

    @Field(() => [ScheduleCreateManyInput], {nullable:false})
    data!: Array<ScheduleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
