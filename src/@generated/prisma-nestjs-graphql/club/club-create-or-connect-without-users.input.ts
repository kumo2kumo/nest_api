import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubCreateWithoutUsersInput } from './club-create-without-users.input';

@InputType()
export class ClubCreateOrConnectWithoutUsersInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    where!: ClubWhereUniqueInput;

    @Field(() => ClubCreateWithoutUsersInput, {nullable:false})
    create!: ClubCreateWithoutUsersInput;
}
