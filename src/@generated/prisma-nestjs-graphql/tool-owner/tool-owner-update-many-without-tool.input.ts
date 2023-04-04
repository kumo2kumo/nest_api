import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolOwnerCreateWithoutToolInput } from './tool-owner-create-without-tool.input';
import { ToolOwnerCreateOrConnectWithoutToolInput } from './tool-owner-create-or-connect-without-tool.input';
import { ToolOwnerUpsertWithWhereUniqueWithoutToolInput } from './tool-owner-upsert-with-where-unique-without-tool.input';
import { ToolOwnerCreateManyToolInputEnvelope } from './tool-owner-create-many-tool-input-envelope.input';
import { ToolOwnerWhereUniqueInput } from './tool-owner-where-unique.input';
import { ToolOwnerUpdateWithWhereUniqueWithoutToolInput } from './tool-owner-update-with-where-unique-without-tool.input';
import { ToolOwnerUpdateManyWithWhereWithoutToolInput } from './tool-owner-update-many-with-where-without-tool.input';
import { ToolOwnerScalarWhereInput } from './tool-owner-scalar-where.input';

@InputType()
export class ToolOwnerUpdateManyWithoutToolInput {

    @Field(() => [ToolOwnerCreateWithoutToolInput], {nullable:true})
    create?: Array<ToolOwnerCreateWithoutToolInput>;

    @Field(() => [ToolOwnerCreateOrConnectWithoutToolInput], {nullable:true})
    connectOrCreate?: Array<ToolOwnerCreateOrConnectWithoutToolInput>;

    @Field(() => [ToolOwnerUpsertWithWhereUniqueWithoutToolInput], {nullable:true})
    upsert?: Array<ToolOwnerUpsertWithWhereUniqueWithoutToolInput>;

    @Field(() => ToolOwnerCreateManyToolInputEnvelope, {nullable:true})
    createMany?: ToolOwnerCreateManyToolInputEnvelope;

    @Field(() => [ToolOwnerWhereUniqueInput], {nullable:true})
    set?: Array<ToolOwnerWhereUniqueInput>;

    @Field(() => [ToolOwnerWhereUniqueInput], {nullable:true})
    disconnect?: Array<ToolOwnerWhereUniqueInput>;

    @Field(() => [ToolOwnerWhereUniqueInput], {nullable:true})
    delete?: Array<ToolOwnerWhereUniqueInput>;

    @Field(() => [ToolOwnerWhereUniqueInput], {nullable:true})
    connect?: Array<ToolOwnerWhereUniqueInput>;

    @Field(() => [ToolOwnerUpdateWithWhereUniqueWithoutToolInput], {nullable:true})
    update?: Array<ToolOwnerUpdateWithWhereUniqueWithoutToolInput>;

    @Field(() => [ToolOwnerUpdateManyWithWhereWithoutToolInput], {nullable:true})
    updateMany?: Array<ToolOwnerUpdateManyWithWhereWithoutToolInput>;

    @Field(() => [ToolOwnerScalarWhereInput], {nullable:true})
    deleteMany?: Array<ToolOwnerScalarWhereInput>;
}
