import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutClubInput } from './user-update-without-club.input';
import { UserCreateWithoutClubInput } from './user-create-without-club.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutClubInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutClubInput, {nullable:false})
    update!: UserUpdateWithoutClubInput;

    @Field(() => UserCreateWithoutClubInput, {nullable:false})
    create!: UserCreateWithoutClubInput;
}
