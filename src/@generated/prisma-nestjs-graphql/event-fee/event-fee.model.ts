import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { Club } from '../club/club.model';

@ObjectType()
export class EventFee {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Boolean, {nullable:false})
    january!: boolean;

    @Field(() => Boolean, {nullable:false})
    february!: boolean;

    @Field(() => Boolean, {nullable:false})
    march!: boolean;

    @Field(() => Boolean, {nullable:false})
    april!: boolean;

    @Field(() => Boolean, {nullable:false})
    may!: boolean;

    @Field(() => Boolean, {nullable:false})
    june!: boolean;

    @Field(() => Boolean, {nullable:false})
    july!: boolean;

    @Field(() => Boolean, {nullable:false})
    august!: boolean;

    @Field(() => Boolean, {nullable:false})
    september!: boolean;

    @Field(() => Boolean, {nullable:false})
    october!: boolean;

    @Field(() => Boolean, {nullable:false})
    november!: boolean;

    @Field(() => Boolean, {nullable:false})
    december!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Club, {nullable:false})
    club?: Club;

    @Field(() => Int, {nullable:false})
    clubId!: number;
}
