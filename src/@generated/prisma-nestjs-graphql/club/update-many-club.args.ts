import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubUpdateManyMutationInput } from './club-update-many-mutation.input';
import { ClubWhereInput } from './club-where.input';

@ArgsType()
export class UpdateManyClubArgs {

    @Field(() => ClubUpdateManyMutationInput, {nullable:false})
    data!: ClubUpdateManyMutationInput;

    @Field(() => ClubWhereInput, {nullable:true})
    where?: ClubWhereInput;
}
