import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubWhereInput } from './club-where.input';
import { ClubOrderByWithRelationInput } from './club-order-by-with-relation.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClubScalarFieldEnum } from './club-scalar-field.enum';

@ArgsType()
export class FindFirstClubArgs {

    @Field(() => ClubWhereInput, {nullable:true})
    where?: ClubWhereInput;

    @Field(() => [ClubOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ClubOrderByWithRelationInput>;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    cursor?: ClubWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ClubScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ClubScalarFieldEnum>;
}
