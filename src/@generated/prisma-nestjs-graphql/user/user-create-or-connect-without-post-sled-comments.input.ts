import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutPostSledCommentsInput } from './user-create-without-post-sled-comments.input';

@InputType()
export class UserCreateOrConnectWithoutPostSledCommentsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutPostSledCommentsInput, {nullable:false})
    create!: UserCreateWithoutPostSledCommentsInput;
}
