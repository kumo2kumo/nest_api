import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledUpdateWithoutSledCommentsInput } from './sled-update-without-sled-comments.input';
import { SledCreateWithoutSledCommentsInput } from './sled-create-without-sled-comments.input';

@InputType()
export class SledUpsertWithoutSledCommentsInput {

    @Field(() => SledUpdateWithoutSledCommentsInput, {nullable:false})
    update!: SledUpdateWithoutSledCommentsInput;

    @Field(() => SledCreateWithoutSledCommentsInput, {nullable:false})
    create!: SledCreateWithoutSledCommentsInput;
}
