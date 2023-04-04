import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SledUpdateInput } from './sled-update.input';
import { SledWhereUniqueInput } from './sled-where-unique.input';

@ArgsType()
export class UpdateOneSledArgs {

    @Field(() => SledUpdateInput, {nullable:false})
    data!: SledUpdateInput;

    @Field(() => SledWhereUniqueInput, {nullable:false})
    where!: SledWhereUniqueInput;
}
