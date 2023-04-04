import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubCreateInput } from './club-create.input';
import { ClubUpdateInput } from './club-update.input';

@ArgsType()
export class UpsertOneClubArgs {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    where!: ClubWhereUniqueInput;

    @Field(() => ClubCreateInput, {nullable:false})
    create!: ClubCreateInput;

    @Field(() => ClubUpdateInput, {nullable:false})
    update!: ClubUpdateInput;
}
