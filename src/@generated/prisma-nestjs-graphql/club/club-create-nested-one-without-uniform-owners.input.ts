import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutUniformOwnersInput } from './club-create-without-uniform-owners.input';
import { ClubCreateOrConnectWithoutUniformOwnersInput } from './club-create-or-connect-without-uniform-owners.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@InputType()
export class ClubCreateNestedOneWithoutUniformOwnersInput {

    @Field(() => ClubCreateWithoutUniformOwnersInput, {nullable:true})
    create?: ClubCreateWithoutUniformOwnersInput;

    @Field(() => ClubCreateOrConnectWithoutUniformOwnersInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutUniformOwnersInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;
}
