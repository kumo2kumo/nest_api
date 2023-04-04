import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCreateWithoutClubInput } from './sled-create-without-club.input';
import { SledCreateOrConnectWithoutClubInput } from './sled-create-or-connect-without-club.input';
import { SledUpsertWithWhereUniqueWithoutClubInput } from './sled-upsert-with-where-unique-without-club.input';
import { SledCreateManyClubInputEnvelope } from './sled-create-many-club-input-envelope.input';
import { SledWhereUniqueInput } from './sled-where-unique.input';
import { SledUpdateWithWhereUniqueWithoutClubInput } from './sled-update-with-where-unique-without-club.input';
import { SledUpdateManyWithWhereWithoutClubInput } from './sled-update-many-with-where-without-club.input';
import { SledScalarWhereInput } from './sled-scalar-where.input';

@InputType()
export class SledUpdateManyWithoutClubInput {

    @Field(() => [SledCreateWithoutClubInput], {nullable:true})
    create?: Array<SledCreateWithoutClubInput>;

    @Field(() => [SledCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<SledCreateOrConnectWithoutClubInput>;

    @Field(() => [SledUpsertWithWhereUniqueWithoutClubInput], {nullable:true})
    upsert?: Array<SledUpsertWithWhereUniqueWithoutClubInput>;

    @Field(() => SledCreateManyClubInputEnvelope, {nullable:true})
    createMany?: SledCreateManyClubInputEnvelope;

    @Field(() => [SledWhereUniqueInput], {nullable:true})
    set?: Array<SledWhereUniqueInput>;

    @Field(() => [SledWhereUniqueInput], {nullable:true})
    disconnect?: Array<SledWhereUniqueInput>;

    @Field(() => [SledWhereUniqueInput], {nullable:true})
    delete?: Array<SledWhereUniqueInput>;

    @Field(() => [SledWhereUniqueInput], {nullable:true})
    connect?: Array<SledWhereUniqueInput>;

    @Field(() => [SledUpdateWithWhereUniqueWithoutClubInput], {nullable:true})
    update?: Array<SledUpdateWithWhereUniqueWithoutClubInput>;

    @Field(() => [SledUpdateManyWithWhereWithoutClubInput], {nullable:true})
    updateMany?: Array<SledUpdateManyWithWhereWithoutClubInput>;

    @Field(() => [SledScalarWhereInput], {nullable:true})
    deleteMany?: Array<SledScalarWhereInput>;
}
