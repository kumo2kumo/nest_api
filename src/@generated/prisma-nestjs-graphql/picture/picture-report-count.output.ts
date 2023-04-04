import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PictureReportCount {

    @Field(() => Int, {nullable:false})
    pictures?: number;
}
