import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutClubInput } from './user-update-without-club.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutClubInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutClubInput, {nullable:false})
    data!: UserUpdateWithoutClubInput;
}
