import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ScheduleCount {

    @Field(() => Int, {nullable:false})
    attendances?: number;
}
