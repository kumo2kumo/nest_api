import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutClubInput } from './user-create-without-club.input';

@InputType()
export class UserCreateOrConnectWithoutClubInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutClubInput, {nullable:false})
    create!: UserCreateWithoutClubInput;
}
