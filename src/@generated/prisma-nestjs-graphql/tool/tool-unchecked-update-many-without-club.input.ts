import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolCreateWithoutClubInput } from './tool-create-without-club.input';
import { ToolCreateOrConnectWithoutClubInput } from './tool-create-or-connect-without-club.input';
import { ToolUpsertWithWhereUniqueWithoutClubInput } from './tool-upsert-with-where-unique-without-club.input';
import { ToolCreateManyClubInputEnvelope } from './tool-create-many-club-input-envelope.input';
import { ToolWhereUniqueInput } from './tool-where-unique.input';
import { ToolUpdateWithWhereUniqueWithoutClubInput } from './tool-update-with-where-unique-without-club.input';
import { ToolUpdateManyWithWhereWithoutClubInput } from './tool-update-many-with-where-without-club.input';
import { ToolScalarWhereInput } from './tool-scalar-where.input';

@InputType()
export class ToolUncheckedUpdateManyWithoutClubInput {

    @Field(() => [ToolCreateWithoutClubInput], {nullable:true})
    create?: Array<ToolCreateWithoutClubInput>;

    @Field(() => [ToolCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<ToolCreateOrConnectWithoutClubInput>;

    @Field(() => [ToolUpsertWithWhereUniqueWithoutClubInput], {nullable:true})
    upsert?: Array<ToolUpsertWithWhereUniqueWithoutClubInput>;

    @Field(() => ToolCreateManyClubInputEnvelope, {nullable:true})
    createMany?: ToolCreateManyClubInputEnvelope;

    @Field(() => [ToolWhereUniqueInput], {nullable:true})
    set?: Array<ToolWhereUniqueInput>;

    @Field(() => [ToolWhereUniqueInput], {nullable:true})
    disconnect?: Array<ToolWhereUniqueInput>;

    @Field(() => [ToolWhereUniqueInput], {nullable:true})
    delete?: Array<ToolWhereUniqueInput>;

    @Field(() => [ToolWhereUniqueInput], {nullable:true})
    connect?: Array<ToolWhereUniqueInput>;

    @Field(() => [ToolUpdateWithWhereUniqueWithoutClubInput], {nullable:true})
    update?: Array<ToolUpdateWithWhereUniqueWithoutClubInput>;

    @Field(() => [ToolUpdateManyWithWhereWithoutClubInput], {nullable:true})
    updateMany?: Array<ToolUpdateManyWithWhereWithoutClubInput>;

    @Field(() => [ToolScalarWhereInput], {nullable:true})
    deleteMany?: Array<ToolScalarWhereInput>;
}
