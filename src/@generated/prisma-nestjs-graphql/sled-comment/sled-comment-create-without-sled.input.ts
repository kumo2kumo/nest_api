import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPostSledCommentsInput } from '../user/user-create-nested-one-without-post-sled-comments.input';
import { UserCreateNestedOneWithoutUpdateSledCommentsInput } from '../user/user-create-nested-one-without-update-sled-comments.input';

@InputType()
export class SledCommentCreateWithoutSledInput {

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutPostSledCommentsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutPostSledCommentsInput;

    @Field(() => UserCreateNestedOneWithoutUpdateSledCommentsInput, {nullable:true})
    updateUser?: UserCreateNestedOneWithoutUpdateSledCommentsInput;
}
