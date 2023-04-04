import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.MaxLength(100)
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.MaxLength(100)
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.Length(8, 100)
    password!: string;

    @Field(() => Int, {nullable:true})
    role?: number;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    clubId!: number;

    @Field(() => Int, {nullable:true})
    score?: number;

    @Field(() => Int, {nullable:true})
    assist?: number;

    @Field(() => Int, {nullable:true})
    countTool?: number;

    @Field(() => Int, {nullable:true})
    absence?: number;

    @Field(() => Int, {nullable:true})
    lateness?: number;

    @Field(() => Int, {nullable:true})
    contactLate?: number;

    @Field(() => Int, {nullable:true})
    countPicture?: number;

    @Field(() => Int, {nullable:true})
    countReport?: number;

    @Field(() => Int, {nullable:true})
    commentLate?: number;

    @Field(() => Int, {nullable:true})
    insurance?: number;
}
