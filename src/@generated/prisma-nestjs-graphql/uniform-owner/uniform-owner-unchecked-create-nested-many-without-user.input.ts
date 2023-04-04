import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UniformOwnerCreateWithoutUserInput } from './uniform-owner-create-without-user.input';
import { UniformOwnerCreateOrConnectWithoutUserInput } from './uniform-owner-create-or-connect-without-user.input';
import { UniformOwnerCreateManyUserInputEnvelope } from './uniform-owner-create-many-user-input-envelope.input';
import { UniformOwnerWhereUniqueInput } from './uniform-owner-where-unique.input';

@InputType()
export class UniformOwnerUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UniformOwnerCreateWithoutUserInput], {nullable:true})
    create?: Array<UniformOwnerCreateWithoutUserInput>;

    @Field(() => [UniformOwnerCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<UniformOwnerCreateOrConnectWithoutUserInput>;

    @Field(() => UniformOwnerCreateManyUserInputEnvelope, {nullable:true})
    createMany?: UniformOwnerCreateManyUserInputEnvelope;

    @Field(() => [UniformOwnerWhereUniqueInput], {nullable:true})
    connect?: Array<UniformOwnerWhereUniqueInput>;
}
