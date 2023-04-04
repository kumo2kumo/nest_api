import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutToolsInput } from './user-create-without-tools.input';

@InputType()
export class UserCreateOrConnectWithoutToolsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutToolsInput, {nullable:false})
    create!: UserCreateWithoutToolsInput;
}
