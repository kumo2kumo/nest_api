import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@ArgsType()
export class FindUniqueClubArgs {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    where!: ClubWhereUniqueInput;
}
