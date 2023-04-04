import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPostSledCommentsInput } from './user-create-without-post-sled-comments.input';
import { UserCreateOrConnectWithoutPostSledCommentsInput } from './user-create-or-connect-without-post-sled-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPostSledCommentsInput {

    @Field(() => UserCreateWithoutPostSledCommentsInput, {nullable:true})
    create?: UserCreateWithoutPostSledCommentsInput;

    @Field(() => UserCreateOrConnectWithoutPostSledCommentsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutPostSledCommentsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
