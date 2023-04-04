import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubCreateManyInput } from './club-create-many.input';

@ArgsType()
export class CreateManyClubArgs {

    @Field(() => [ClubCreateManyInput], {nullable:false})
    data!: Array<ClubCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
