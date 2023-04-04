import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserEmailClubIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.MaxLength(100)
    email!: string;

    @Field(() => Int, {nullable:false})
    clubId!: number;
}
