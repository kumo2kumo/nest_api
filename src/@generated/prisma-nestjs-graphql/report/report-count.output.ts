import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReportCount {

    @Field(() => Int, {nullable:false})
    reportComments?: number;
}
