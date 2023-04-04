import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UniformOwnerCreateWithoutClubInput } from './uniform-owner-create-without-club.input';
import { UniformOwnerCreateOrConnectWithoutClubInput } from './uniform-owner-create-or-connect-without-club.input';
import { UniformOwnerCreateManyClubInputEnvelope } from './uniform-owner-create-many-club-input-envelope.input';
import { UniformOwnerWhereUniqueInput } from './uniform-owner-where-unique.input';

@InputType()
export class UniformOwnerUncheckedCreateNestedManyWithoutClubInput {

    @Field(() => [UniformOwnerCreateWithoutClubInput], {nullable:true})
    create?: Array<UniformOwnerCreateWithoutClubInput>;

    @Field(() => [UniformOwnerCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<UniformOwnerCreateOrConnectWithoutClubInput>;

    @Field(() => UniformOwnerCreateManyClubInputEnvelope, {nullable:true})
    createMany?: UniformOwnerCreateManyClubInputEnvelope;

    @Field(() => [UniformOwnerWhereUniqueInput], {nullable:true})
    connect?: Array<UniformOwnerWhereUniqueInput>;
}
