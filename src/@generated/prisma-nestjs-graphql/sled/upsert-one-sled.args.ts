import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SledWhereUniqueInput } from './sled-where-unique.input';
import { SledCreateInput } from './sled-create.input';
import { SledUpdateInput } from './sled-update.input';

@ArgsType()
export class UpsertOneSledArgs {

    @Field(() => SledWhereUniqueInput, {nullable:false})
    where!: SledWhereUniqueInput;

    @Field(() => SledCreateInput, {nullable:false})
    create!: SledCreateInput;

    @Field(() => SledUpdateInput, {nullable:false})
    update!: SledUpdateInput;
}
