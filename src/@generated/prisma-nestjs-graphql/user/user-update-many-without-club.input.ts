import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutClubInput } from './user-create-without-club.input';
import { UserCreateOrConnectWithoutClubInput } from './user-create-or-connect-without-club.input';
import { UserUpsertWithWhereUniqueWithoutClubInput } from './user-upsert-with-where-unique-without-club.input';
import { UserCreateManyClubInputEnvelope } from './user-create-many-club-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutClubInput } from './user-update-with-where-unique-without-club.input';
import { UserUpdateManyWithWhereWithoutClubInput } from './user-update-many-with-where-without-club.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutClubInput {

    @Field(() => [UserCreateWithoutClubInput], {nullable:true})
    create?: Array<UserCreateWithoutClubInput>;

    @Field(() => [UserCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutClubInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutClubInput], {nullable:true})
    upsert?: Array<UserUpsertWithWhereUniqueWithoutClubInput>;

    @Field(() => UserCreateManyClubInputEnvelope, {nullable:true})
    createMany?: UserCreateManyClubInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutClubInput], {nullable:true})
    update?: Array<UserUpdateWithWhereUniqueWithoutClubInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutClubInput], {nullable:true})
    updateMany?: Array<UserUpdateManyWithWhereWithoutClubInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScalarWhereInput>;
}
