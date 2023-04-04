import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubWhereInput } from './club-where.input';

@ArgsType()
export class DeleteManyClubArgs {

    @Field(() => ClubWhereInput, {nullable:true})
    where?: ClubWhereInput;
}
