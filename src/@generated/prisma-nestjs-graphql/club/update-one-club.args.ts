import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubUpdateInput } from './club-update.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@ArgsType()
export class UpdateOneClubArgs {

    @Field(() => ClubUpdateInput, {nullable:false})
    data!: ClubUpdateInput;

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    where!: ClubWhereUniqueInput;
}
