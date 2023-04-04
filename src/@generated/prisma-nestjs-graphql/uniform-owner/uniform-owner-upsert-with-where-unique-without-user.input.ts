import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UniformOwnerWhereUniqueInput } from './uniform-owner-where-unique.input';
import { UniformOwnerUpdateWithoutUserInput } from './uniform-owner-update-without-user.input';
import { UniformOwnerCreateWithoutUserInput } from './uniform-owner-create-without-user.input';

@InputType()
export class UniformOwnerUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UniformOwnerWhereUniqueInput, {nullable:false})
    where!: UniformOwnerWhereUniqueInput;

    @Field(() => UniformOwnerUpdateWithoutUserInput, {nullable:false})
    update!: UniformOwnerUpdateWithoutUserInput;

    @Field(() => UniformOwnerCreateWithoutUserInput, {nullable:false})
    create!: UniformOwnerCreateWithoutUserInput;
}
