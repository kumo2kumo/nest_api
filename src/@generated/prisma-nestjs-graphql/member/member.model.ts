import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Club } from '../club/club.model';

@ObjectType()
export class Member {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    englishName!: string | null;

    @Field(() => Int, {nullable:true})
    number!: number | null;

    @Field(() => String, {nullable:true})
    position!: string | null;

    @Field(() => String, {nullable:true})
    birthday!: string | null;

    @Field(() => String, {nullable:true})
    height!: string | null;

    @Field(() => String, {nullable:true})
    weight!: string | null;

    @Field(() => String, {nullable:true})
    strongerSide!: string | null;

    @Field(() => String, {nullable:true})
    from!: string | null;

    @Field(() => String, {nullable:true})
    occupation!: string | null;

    @Field(() => String, {nullable:true})
    hobby!: string | null;

    @Field(() => String, {nullable:true})
    skill!: string | null;

    @Field(() => String, {nullable:true})
    startBelong!: string | null;

    @Field(() => String, {nullable:true})
    startSport!: string | null;

    @Field(() => String, {nullable:true})
    chance!: string | null;

    @Field(() => String, {nullable:true})
    dream!: string | null;

    @Field(() => String, {nullable:true})
    goal!: string | null;

    @Field(() => String, {nullable:true})
    image!: string | null;

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
