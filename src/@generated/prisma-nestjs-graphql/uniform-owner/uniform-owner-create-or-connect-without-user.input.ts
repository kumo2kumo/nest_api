import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UniformOwnerWhereUniqueInput } from './uniform-owner-where-unique.input';
import { UniformOwnerCreateWithoutUserInput } from './uniform-owner-create-without-user.input';

@InputType()
export class UniformOwnerCreateOrConnectWithoutUserInput {

    @Field(() => UniformOwnerWhereUniqueInput, {nullable:false})
    where!: UniformOwnerWhereUniqueInput;

    @Field(() => UniformOwnerCreateWithoutUserInput, {nullable:false})
    create!: UniformOwnerCreateWithoutUserInput;
}
