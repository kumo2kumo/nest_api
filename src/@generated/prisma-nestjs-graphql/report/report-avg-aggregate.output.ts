import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ReportAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    myScore?: number;

    @Field(() => Float, {nullable:true})
    opponentScore?: number;

    @Field(() => Float, {nullable:true})
    category?: number;

    @Field(() => Float, {nullable:true})
    clubId?: number;

    @Field(() => Float, {nullable:true})
    uploadUserId?: number;
}
