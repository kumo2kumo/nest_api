import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UniformOwnerWhereUniqueInput } from './uniform-owner-where-unique.input';
import { UniformOwnerUpdateWithoutUserInput } from './uniform-owner-update-without-user.input';

@InputType()
export class UniformOwnerUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UniformOwnerWhereUniqueInput, {nullable:false})
    where!: UniformOwnerWhereUniqueInput;

    @Field(() => UniformOwnerUpdateWithoutUserInput, {nullable:false})
    data!: UniformOwnerUpdateWithoutUserInput;
}
