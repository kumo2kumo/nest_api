import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class UserAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    role?: number;

    @Field(() => Float, {nullable:true})
    clubId?: number;

    @Field(() => Float, {nullable:true})
    score?: number;

    @Field(() => Float, {nullable:true})
    assist?: number;

    @Field(() => Float, {nullable:true})
    countTool?: number;

    @Field(() => Float, {nullable:true})
    absence?: number;

    @Field(() => Float, {nullable:true})
    lateness?: number;

    @Field(() => Float, {nullable:true})
    contactLate?: number;

    @Field(() => Float, {nullable:true})
    countPicture?: number;

    @Field(() => Float, {nullable:true})
    countReport?: number;

    @Field(() => Float, {nullable:true})
    commentLate?: number;

    @Field(() => Float, {nullable:true})
    insurance?: number;
}
