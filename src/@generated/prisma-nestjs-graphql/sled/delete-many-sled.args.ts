import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SledWhereInput } from './sled-where.input';

@ArgsType()
export class DeleteManySledArgs {

    @Field(() => SledWhereInput, {nullable:true})
    where?: SledWhereInput;
}
