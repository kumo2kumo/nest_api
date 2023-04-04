import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolCreateWithoutClubInput } from './tool-create-without-club.input';
import { ToolCreateOrConnectWithoutClubInput } from './tool-create-or-connect-without-club.input';
import { ToolCreateManyClubInputEnvelope } from './tool-create-many-club-input-envelope.input';
import { ToolWhereUniqueInput } from './tool-where-unique.input';

@InputType()
export class ToolCreateNestedManyWithoutClubInput {

    @Field(() => [ToolCreateWithoutClubInput], {nullable:true})
    create?: Array<ToolCreateWithoutClubInput>;

    @Field(() => [ToolCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<ToolCreateOrConnectWithoutClubInput>;

    @Field(() => ToolCreateManyClubInputEnvelope, {nullable:true})
    createMany?: ToolCreateManyClubInputEnvelope;

    @Field(() => [ToolWhereUniqueInput], {nullable:true})
    connect?: Array<ToolWhereUniqueInput>;
}
