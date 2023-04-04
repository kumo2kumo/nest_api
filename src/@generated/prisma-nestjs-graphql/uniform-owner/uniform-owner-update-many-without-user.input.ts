import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UniformOwnerCreateWithoutUserInput } from './uniform-owner-create-without-user.input';
import { UniformOwnerCreateOrConnectWithoutUserInput } from './uniform-owner-create-or-connect-without-user.input';
import { UniformOwnerUpsertWithWhereUniqueWithoutUserInput } from './uniform-owner-upsert-with-where-unique-without-user.input';
import { UniformOwnerCreateManyUserInputEnvelope } from './uniform-owner-create-many-user-input-envelope.input';
import { UniformOwnerWhereUniqueInput } from './uniform-owner-where-unique.input';
import { UniformOwnerUpdateWithWhereUniqueWithoutUserInput } from './uniform-owner-update-with-where-unique-without-user.input';
import { UniformOwnerUpdateManyWithWhereWithoutUserInput } from './uniform-owner-update-many-with-where-without-user.input';
import { UniformOwnerScalarWhereInput } from './uniform-owner-scalar-where.input';

@InputType()
export class UniformOwnerUpdateManyWithoutUserInput {

    @Field(() => [UniformOwnerCreateWithoutUserInput], {nullable:true})
    create?: Array<UniformOwnerCreateWithoutUserInput>;

    @Field(() => [UniformOwnerCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<UniformOwnerCreateOrConnectWithoutUserInput>;

    @Field(() => [UniformOwnerUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<UniformOwnerUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UniformOwnerCreateManyUserInputEnvelope, {nullable:true})
    createMany?: UniformOwnerCreateManyUserInputEnvelope;

    @Field(() => [UniformOwnerWhereUniqueInput], {nullable:true})
    set?: Array<UniformOwnerWhereUniqueInput>;

    @Field(() => [UniformOwnerWhereUniqueInput], {nullable:true})
    disconnect?: Array<UniformOwnerWhereUniqueInput>;

    @Field(() => [UniformOwnerWhereUniqueInput], {nullable:true})
    delete?: Array<UniformOwnerWhereUniqueInput>;

    @Field(() => [UniformOwnerWhereUniqueInput], {nullable:true})
    connect?: Array<UniformOwnerWhereUniqueInput>;

    @Field(() => [UniformOwnerUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<UniformOwnerUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UniformOwnerUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<UniformOwnerUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UniformOwnerScalarWhereInput], {nullable:true})
    deleteMany?: Array<UniformOwnerScalarWhereInput>;
}
