import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScheduleCreateInput } from './schedule-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneScheduleArgs {

    @Field(() => ScheduleCreateInput, {nullable:false})
    @ValidateNested()
    @Type(() => ScheduleCreateInput)
    data!: ScheduleCreateInput;
}
