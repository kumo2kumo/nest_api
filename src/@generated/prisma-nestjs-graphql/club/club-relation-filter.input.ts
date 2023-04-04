import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereInput } from './club-where.input';

@InputType()
export class ClubRelationFilter {

    @Field(() => ClubWhereInput, {nullable:true})
    is?: ClubWhereInput;

    @Field(() => ClubWhereInput, {nullable:true})
    isNot?: ClubWhereInput;
}
