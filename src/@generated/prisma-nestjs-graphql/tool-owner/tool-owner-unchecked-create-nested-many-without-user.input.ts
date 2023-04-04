import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolOwnerCreateWithoutUserInput } from './tool-owner-create-without-user.input';
import { ToolOwnerCreateOrConnectWithoutUserInput } from './tool-owner-create-or-connect-without-user.input';
import { ToolOwnerCreateManyUserInputEnvelope } from './tool-owner-create-many-user-input-envelope.input';
import { ToolOwnerWhereUniqueInput } from './tool-owner-where-unique.input';

@InputType()
export class ToolOwnerUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ToolOwnerCreateWithoutUserInput], {nullable:true})
    create?: Array<ToolOwnerCreateWithoutUserInput>;

    @Field(() => [ToolOwnerCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ToolOwnerCreateOrConnectWithoutUserInput>;

    @Field(() => ToolOwnerCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ToolOwnerCreateManyUserInputEnvelope;

    @Field(() => [ToolOwnerWhereUniqueInput], {nullable:true})
    connect?: Array<ToolOwnerWhereUniqueInput>;
}
