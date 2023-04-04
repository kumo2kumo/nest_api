import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPostSledCommentsInput } from './user-create-without-post-sled-comments.input';
import { UserCreateOrConnectWithoutPostSledCommentsInput } from './user-create-or-connect-without-post-sled-comments.input';
import { UserUpsertWithoutPostSledCommentsInput } from './user-upsert-without-post-sled-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPostSledCommentsInput } from './user-update-without-post-sled-comments.input';

@InputType()
export class UserUpdateOneRequiredWithoutPostSledCommentsInput {

    @Field(() => UserCreateWithoutPostSledCommentsInput, {nullable:true})
    create?: UserCreateWithoutPostSledCommentsInput;

    @Field(() => UserCreateOrConnectWithoutPostSledCommentsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutPostSledCommentsInput;

    @Field(() => UserUpsertWithoutPostSledCommentsInput, {nullable:true})
    upsert?: UserUpsertWithoutPostSledCommentsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPostSledCommentsInput, {nullable:true})
    update?: UserUpdateWithoutPostSledCommentsInput;
}
