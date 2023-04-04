import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class MemberUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(100)
    name!: string;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(100)
    @Validator.IsOptional()
    englishName?: string;

    @Field(() => Int, {nullable:true})
    number?: number;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(100)
    @Validator.IsOptional()
    position?: string;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(100)
    @Validator.IsOptional()
    birthday?: string;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(100)
    @Validator.IsOptional()
    height?: string;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(100)
    @Validator.IsOptional()
    weight?: string;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(100)
    @Validator.IsOptional()
    strongerSide?: string;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(100)
    @Validator.IsOptional()
    from?: string;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(100)
    @Validator.IsOptional()
    occupation?: string;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(100)
    @Validator.IsOptional()
    hobby?: string;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(100)
    @Validator.IsOptional()
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

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    clubId!: number;
}
