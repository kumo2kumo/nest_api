import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubCreateWithoutUniformOwnersInput } from './club-create-without-uniform-owners.input';

@InputType()
export class ClubCreateOrConnectWithoutUniformOwnersInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    where!: ClubWhereUniqueInput;

    @Field(() => ClubCreateWithoutUniformOwnersInput, {nullable:false})
    create!: ClubCreateWithoutUniformOwnersInput;
}
