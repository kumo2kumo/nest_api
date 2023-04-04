import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCreateWithoutClubInput } from './sled-create-without-club.input';
import { SledCreateOrConnectWithoutClubInput } from './sled-create-or-connect-without-club.input';
import { SledCreateManyClubInputEnvelope } from './sled-create-many-club-input-envelope.input';
import { SledWhereUniqueInput } from './sled-where-unique.input';

@InputType()
export class SledUncheckedCreateNestedManyWithoutClubInput {

    @Field(() => [SledCreateWithoutClubInput], {nullable:true})
    create?: Array<SledCreateWithoutClubInput>;

    @Field(() => [SledCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<SledCreateOrConnectWithoutClubInput>;

    @Field(() => SledCreateManyClubInputEnvelope, {nullable:true})
    createMany?: SledCreateManyClubInputEnvelope;

    @Field(() => [SledWhereUniqueInput], {nullable:true})
    connect?: Array<SledWhereUniqueInput>;
}
