import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SledWhereUniqueInput } from './sled-where-unique.input';

@ArgsType()
export class DeleteOneSledArgs {

    @Field(() => SledWhereUniqueInput, {nullable:false})
    where!: SledWhereUniqueInput;
}
