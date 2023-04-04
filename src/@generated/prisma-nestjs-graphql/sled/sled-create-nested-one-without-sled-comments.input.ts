import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCreateWithoutSledCommentsInput } from './sled-create-without-sled-comments.input';
import { SledCreateOrConnectWithoutSledCommentsInput } from './sled-create-or-connect-without-sled-comments.input';
import { SledWhereUniqueInput } from './sled-where-unique.input';

@InputType()
export class SledCreateNestedOneWithoutSledCommentsInput {

    @Field(() => SledCreateWithoutSledCommentsInput, {nullable:true})
    create?: SledCreateWithoutSledCommentsInput;

    @Field(() => SledCreateOrConnectWithoutSledCommentsInput, {nullable:true})
    connectOrCreate?: SledCreateOrConnectWithoutSledCommentsInput;

    @Field(() => SledWhereUniqueInput, {nullable:true})
    connect?: SledWhereUniqueInput;
}
