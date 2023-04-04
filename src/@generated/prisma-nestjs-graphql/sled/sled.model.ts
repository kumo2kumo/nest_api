import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Club } from '../club/club.model';
import { Int } from '@nestjs/graphql';
import { SledComment } from '../sled-comment/sled-comment.model';
import { SledCount } from './sled-count.output';

@ObjectType()
export class Sled {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    topic!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Club, {nullable:false})
    club?: Club;

    @Field(() => Int, {nullable:false})
    clubId!: number;

    @Field(() => [SledComment], {nullable:true})
    sledComments?: Array<SledComment>;

    @Field(() => SledCount, {nullable:false})
    _count?: SledCount;
}
