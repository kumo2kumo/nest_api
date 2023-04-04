import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutClubInput } from './user-create-without-club.input';
import { UserCreateOrConnectWithoutClubInput } from './user-create-or-connect-without-club.input';
import { UserCreateManyClubInputEnvelope } from './user-create-many-club-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutClubInput {

    @Field(() => [UserCreateWithoutClubInput], {nullable:true})
    create?: Array<UserCreateWithoutClubInput>;

    @Field(() => [UserCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutClubInput>;

    @Field(() => UserCreateManyClubInputEnvelope, {nullable:true})
    createMany?: UserCreateManyClubInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
}
