import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledWhereUniqueInput } from './sled-where-unique.input';
import { SledCreateWithoutSledCommentsInput } from './sled-create-without-sled-comments.input';

@InputType()
export class SledCreateOrConnectWithoutSledCommentsInput {

    @Field(() => SledWhereUniqueInput, {nullable:false})
    where!: SledWhereUniqueInput;

    @Field(() => SledCreateWithoutSledCommentsInput, {nullable:false})
    create!: SledCreateWithoutSledCommentsInput;
}
