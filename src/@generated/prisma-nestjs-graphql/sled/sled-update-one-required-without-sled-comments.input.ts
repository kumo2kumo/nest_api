import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCreateWithoutSledCommentsInput } from './sled-create-without-sled-comments.input';
import { SledCreateOrConnectWithoutSledCommentsInput } from './sled-create-or-connect-without-sled-comments.input';
import { SledUpsertWithoutSledCommentsInput } from './sled-upsert-without-sled-comments.input';
import { SledWhereUniqueInput } from './sled-where-unique.input';
import { SledUpdateWithoutSledCommentsInput } from './sled-update-without-sled-comments.input';

@InputType()
export class SledUpdateOneRequiredWithoutSledCommentsInput {

    @Field(() => SledCreateWithoutSledCommentsInput, {nullable:true})
    create?: SledCreateWithoutSledCommentsInput;

    @Field(() => SledCreateOrConnectWithoutSledCommentsInput, {nullable:true})
    connectOrCreate?: SledCreateOrConnectWithoutSledCommentsInput;

    @Field(() => SledUpsertWithoutSledCommentsInput, {nullable:true})
    upsert?: SledUpsertWithoutSledCommentsInput;

    @Field(() => SledWhereUniqueInput, {nullable:true})
    connect?: SledWhereUniqueInput;

    @Field(() => SledUpdateWithoutSledCommentsInput, {nullable:true})
    update?: SledUpdateWithoutSledCommentsInput;
}
