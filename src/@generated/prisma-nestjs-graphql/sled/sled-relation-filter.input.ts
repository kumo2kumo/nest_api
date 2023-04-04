import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledWhereInput } from './sled-where.input';

@InputType()
export class SledRelationFilter {

    @Field(() => SledWhereInput, {nullable:true})
    is?: SledWhereInput;

    @Field(() => SledWhereInput, {nullable:true})
    isNot?: SledWhereInput;
}
