import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UniformOwnerCreateWithoutClubInput } from './uniform-owner-create-without-club.input';
import { UniformOwnerCreateOrConnectWithoutClubInput } from './uniform-owner-create-or-connect-without-club.input';
import { UniformOwnerUpsertWithWhereUniqueWithoutClubInput } from './uniform-owner-upsert-with-where-unique-without-club.input';
import { UniformOwnerCreateManyClubInputEnvelope } from './uniform-owner-create-many-club-input-envelope.input';
import { UniformOwnerWhereUniqueInput } from './uniform-owner-where-unique.input';
import { UniformOwnerUpdateWithWhereUniqueWithoutClubInput } from './uniform-owner-update-with-where-unique-without-club.input';
import { UniformOwnerUpdateManyWithWhereWithoutClubInput } from './uniform-owner-update-many-with-where-without-club.input';
import { UniformOwnerScalarWhereInput } from './uniform-owner-scalar-where.input';

@InputType()
export class UniformOwnerUncheckedUpdateManyWithoutClubInput {

    @Field(() => [UniformOwnerCreateWithoutClubInput], {nullable:true})
    create?: Array<UniformOwnerCreateWithoutClubInput>;

    @Field(() => [UniformOwnerCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<UniformOwnerCreateOrConnectWithoutClubInput>;

    @Field(() => [UniformOwnerUpsertWithWhereUniqueWithoutClubInput], {nullable:true})
    upsert?: Array<UniformOwnerUpsertWithWhereUniqueWithoutClubInput>;

    @Field(() => UniformOwnerCreateManyClubInputEnvelope, {nullable:true})
    createMany?: UniformOwnerCreateManyClubInputEnvelope;

    @Field(() => [UniformOwnerWhereUniqueInput], {nullable:true})
    set?: Array<UniformOwnerWhereUniqueInput>;

    @Field(() => [UniformOwnerWhereUniqueInput], {nullable:true})
    disconnect?: Array<UniformOwnerWhereUniqueInput>;

    @Field(() => [UniformOwnerWhereUniqueInput], {nullable:true})
    delete?: Array<UniformOwnerWhereUniqueInput>;

    @Field(() => [UniformOwnerWhereUniqueInput], {nullable:true})
    connect?: Array<UniformOwnerWhereUniqueInput>;

    @Field(() => [UniformOwnerUpdateWithWhereUniqueWithoutClubInput], {nullable:true})
    update?: Array<UniformOwnerUpdateWithWhereUniqueWithoutClubInput>;

    @Field(() => [UniformOwnerUpdateManyWithWhereWithoutClubInput], {nullable:true})
    updateMany?: Array<UniformOwnerUpdateManyWithWhereWithoutClubInput>;

    @Field(() => [UniformOwnerScalarWhereInput], {nullable:true})
    deleteMany?: Array<UniformOwnerScalarWhereInput>;
}
