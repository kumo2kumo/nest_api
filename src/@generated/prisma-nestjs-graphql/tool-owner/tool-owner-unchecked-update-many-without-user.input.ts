import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolOwnerCreateWithoutUserInput } from './tool-owner-create-without-user.input';
import { ToolOwnerCreateOrConnectWithoutUserInput } from './tool-owner-create-or-connect-without-user.input';
import { ToolOwnerUpsertWithWhereUniqueWithoutUserInput } from './tool-owner-upsert-with-where-unique-without-user.input';
import { ToolOwnerCreateManyUserInputEnvelope } from './tool-owner-create-many-user-input-envelope.input';
import { ToolOwnerWhereUniqueInput } from './tool-owner-where-unique.input';
import { ToolOwnerUpdateWithWhereUniqueWithoutUserInput } from './tool-owner-update-with-where-unique-without-user.input';
import { ToolOwnerUpdateManyWithWhereWithoutUserInput } from './tool-owner-update-many-with-where-without-user.input';
import { ToolOwnerScalarWhereInput } from './tool-owner-scalar-where.input';

@InputType()
export class ToolOwnerUncheckedUpdateManyWithoutUserInput {

    @Field(() => [ToolOwnerCreateWithoutUserInput], {nullable:true})
    create?: Array<ToolOwnerCreateWithoutUserInput>;

    @Field(() => [ToolOwnerCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ToolOwnerCreateOrConnectWithoutUserInput>;

    @Field(() => [ToolOwnerUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<ToolOwnerUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ToolOwnerCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ToolOwnerCreateManyUserInputEnvelope;

    @Field(() => [ToolOwnerWhereUniqueInput], {nullable:true})
    set?: Array<ToolOwnerWhereUniqueInput>;

    @Field(() => [ToolOwnerWhereUniqueInput], {nullable:true})
    disconnect?: Array<ToolOwnerWhereUniqueInput>;

    @Field(() => [ToolOwnerWhereUniqueInput], {nullable:true})
    delete?: Array<ToolOwnerWhereUniqueInput>;

    @Field(() => [ToolOwnerWhereUniqueInput], {nullable:true})
    connect?: Array<ToolOwnerWhereUniqueInput>;

    @Field(() => [ToolOwnerUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<ToolOwnerUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ToolOwnerUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<ToolOwnerUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ToolOwnerScalarWhereInput], {nullable:true})
    deleteMany?: Array<ToolOwnerScalarWhereInput>;
}
