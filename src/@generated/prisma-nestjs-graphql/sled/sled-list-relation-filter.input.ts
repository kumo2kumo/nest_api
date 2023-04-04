import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledWhereInput } from './sled-where.input';

@InputType()
export class SledListRelationFilter {

    @Field(() => SledWhereInput, {nullable:true})
    every?: SledWhereInput;

    @Field(() => SledWhereInput, {nullable:true})
    some?: SledWhereInput;

    @Field(() => SledWhereInput, {nullable:true})
    none?: SledWhereInput;
}
