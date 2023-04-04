import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutUniformOwnersInput } from './user-create-without-uniform-owners.input';

@InputType()
export class UserCreateOrConnectWithoutUniformOwnersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutUniformOwnersInput, {nullable:false})
    create!: UserCreateWithoutUniformOwnersInput;
}
