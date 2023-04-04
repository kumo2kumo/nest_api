import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MemberMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    englishName?: string;

    @Field(() => Int, {nullable:true})
    number?: number;

    @Field(() => String, {nullable:true})
    position?: string;

    @Field(() => String, {nullable:true})
    birthday?: string;

    @Field(() => String, {nullable:true})
    height?: string;

    @Field(() => String, {nullable:true})
    weight?: string;

    @Field(() => String, {nullable:true})
    strongerSide?: string;

    @Field(() => String, {nullable:true})
    from?: string;

    @Field(() => String, {nullable:true})
    occupation?: string;

    @Field(() => String, {nullable:true})
    hobby?: string;

    @Field(() => String, {nullable:true})
    skill?: string;

    @Field(() => String, {nullable:true})
    startBelong?: string;

    @Field(() => String, {nullable:true})
    startSport?: string;

    @Field(() => String, {nullable:true})
    chance?: string;

    @Field(() => String, {nullable:true})
    dream?: string;

    @Field(() => String, {nullable:true})
    goal?: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    clubId?: number;
}
