import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Club } from '../club/club.model';
import { Int } from '@nestjs/graphql';
import { ToolOwner } from '../tool-owner/tool-owner.model';
import { ToolCount } from './tool-count.output';

@ObjectType()
export class Tool {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Club, {nullable:false})
    club?: Club;

    @Field(() => Int, {nullable:false})
    clubId!: number;

    @Field(() => [ToolOwner], {nullable:true})
    toolOwners?: Array<ToolOwner>;

    @Field(() => ToolCount, {nullable:false})
    _count?: ToolCount;
}
