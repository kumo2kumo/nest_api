import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class LoginUserInput {
  @Field(() => String, { nullable: false })
  email!: string

  @Field(() => String, { nullable: false })
  password!: string

  @Field(() => Int, { nullable: false })
  clubId!: number
}
