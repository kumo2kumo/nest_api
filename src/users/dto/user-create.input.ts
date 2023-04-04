import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import * as Validator from 'class-validator'
import { Int } from '@nestjs/graphql'
import { HideField } from '@nestjs/graphql'

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  @Validator.MaxLength(100)
  email!: string

  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  @Validator.MaxLength(100)
  name!: string

  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  @Validator.Length(8, 100)
  password!: string

  @Field(() => Int, { nullable: false })
  role!: number

  @HideField()
  createdAt?: Date | string

  @HideField()
  updatedAt?: Date | string

  @Field(() => Int, { nullable: false })
  @Validator.IsNotEmpty()
  club!: number
}
