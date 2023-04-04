import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCreateNestedOneWithoutSledCommentsInput } from '../sled/sled-create-nested-one-without-sled-comments.input';
import { UserCreateNestedOneWithoutUpdateSledCommentsInput } from '../user/user-create-nested-one-without-update-sled-comments.input';

@InputType()
export class SledCommentCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SledCreateNestedOneWithoutSledCommentsInput, {nullable:false})
    sled!: SledCreateNestedOneWithoutSledCommentsInput;

    @Field(() => UserCreateNestedOneWithoutUpdateSledCommentsInput, {nullable:true})
    updateUser?: UserCreateNestedOneWithoutUpdateSledCommentsInput;
}
