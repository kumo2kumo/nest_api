import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentCreateWithoutUpdateUserInput } from './sled-comment-create-without-update-user.input';
import { SledCommentCreateOrConnectWithoutUpdateUserInput } from './sled-comment-create-or-connect-without-update-user.input';
import { SledCommentUpsertWithWhereUniqueWithoutUpdateUserInput } from './sled-comment-upsert-with-where-unique-without-update-user.input';
import { SledCommentCreateManyUpdateUserInputEnvelope } from './sled-comment-create-many-update-user-input-envelope.input';
import { SledCommentWhereUniqueInput } from './sled-comment-where-unique.input';
import { SledCommentUpdateWithWhereUniqueWithoutUpdateUserInput } from './sled-comment-update-with-where-unique-without-update-user.input';
import { SledCommentUpdateManyWithWhereWithoutUpdateUserInput } from './sled-comment-update-many-with-where-without-update-user.input';
import { SledCommentScalarWhereInput } from './sled-comment-scalar-where.input';

@InputType()
export class SledCommentUncheckedUpdateManyWithoutUpdateUserInput {

    @Field(() => [SledCommentCreateWithoutUpdateUserInput], {nullable:true})
    create?: Array<SledCommentCreateWithoutUpdateUserInput>;

    @Field(() => [SledCommentCreateOrConnectWithoutUpdateUserInput], {nullable:true})
    connectOrCreate?: Array<SledCommentCreateOrConnectWithoutUpdateUserInput>;

    @Field(() => [SledCommentUpsertWithWhereUniqueWithoutUpdateUserInput], {nullable:true})
    upsert?: Array<SledCommentUpsertWithWhereUniqueWithoutUpdateUserInput>;

    @Field(() => SledCommentCreateManyUpdateUserInputEnvelope, {nullable:true})
    createMany?: SledCommentCreateManyUpdateUserInputEnvelope;

    @Field(() => [SledCommentWhereUniqueInput], {nullable:true})
    set?: Array<SledCommentWhereUniqueInput>;

    @Field(() => [SledCommentWhereUniqueInput], {nullable:true})
    disconnect?: Array<SledCommentWhereUniqueInput>;

    @Field(() => [SledCommentWhereUniqueInput], {nullable:true})
    delete?: Array<SledCommentWhereUniqueInput>;

    @Field(() => [SledCommentWhereUniqueInput], {nullable:true})
    connect?: Array<SledCommentWhereUniqueInput>;

    @Field(() => [SledCommentUpdateWithWhereUniqueWithoutUpdateUserInput], {nullable:true})
    update?: Array<SledCommentUpdateWithWhereUniqueWithoutUpdateUserInput>;

    @Field(() => [SledCommentUpdateManyWithWhereWithoutUpdateUserInput], {nullable:true})
    updateMany?: Array<SledCommentUpdateManyWithWhereWithoutUpdateUserInput>;

    @Field(() => [SledCommentScalarWhereInput], {nullable:true})
    deleteMany?: Array<SledCommentScalarWhereInput>;
}
