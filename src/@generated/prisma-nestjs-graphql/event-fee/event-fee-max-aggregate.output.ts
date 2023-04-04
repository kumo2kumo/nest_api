import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventFeeMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Boolean, {nullable:true})
    january?: boolean;

    @Field(() => Boolean, {nullable:true})
    february?: boolean;

    @Field(() => Boolean, {nullable:true})
    march?: boolean;

    @Field(() => Boolean, {nullable:true})
    april?: boolean;

    @Field(() => Boolean, {nullable:true})
    may?: boolean;

    @Field(() => Boolean, {nullable:true})
    june?: boolean;

    @Field(() => Boolean, {nullable:true})
    july?: boolean;

    @Field(() => Boolean, {nullable:true})
    august?: boolean;

    @Field(() => Boolean, {nullable:true})
    september?: boolean;

    @Field(() => Boolean, {nullable:true})
    october?: boolean;

    @Field(() => Boolean, {nullable:true})
    november?: boolean;

    @Field(() => Boolean, {nullable:true})
    december?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    clubId?: number;
}
