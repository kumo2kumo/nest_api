import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolOwnerCreateWithoutToolInput } from './tool-owner-create-without-tool.input';
import { ToolOwnerCreateOrConnectWithoutToolInput } from './tool-owner-create-or-connect-without-tool.input';
import { ToolOwnerCreateManyToolInputEnvelope } from './tool-owner-create-many-tool-input-envelope.input';
import { ToolOwnerWhereUniqueInput } from './tool-owner-where-unique.input';

@InputType()
export class ToolOwnerCreateNestedManyWithoutToolInput {

    @Field(() => [ToolOwnerCreateWithoutToolInput], {nullable:true})
    create?: Array<ToolOwnerCreateWithoutToolInput>;

    @Field(() => [ToolOwnerCreateOrConnectWithoutToolInput], {nullable:true})
    connectOrCreate?: Array<ToolOwnerCreateOrConnectWithoutToolInput>;

    @Field(() => ToolOwnerCreateManyToolInputEnvelope, {nullable:true})
    createMany?: ToolOwnerCreateManyToolInputEnvelope;

    @Field(() => [ToolOwnerWhereUniqueInput], {nullable:true})
    connect?: Array<ToolOwnerWhereUniqueInput>;
}
