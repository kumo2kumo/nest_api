import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UniformOwnerWhereUniqueInput } from './uniform-owner-where-unique.input';
import { UniformOwnerUpdateWithoutClubInput } from './uniform-owner-update-without-club.input';
import { UniformOwnerCreateWithoutClubInput } from './uniform-owner-create-without-club.input';

@InputType()
export class UniformOwnerUpsertWithWhereUniqueWithoutClubInput {

    @Field(() => UniformOwnerWhereUniqueInput, {nullable:false})
    where!: UniformOwnerWhereUniqueInput;

    @Field(() => UniformOwnerUpdateWithoutClubInput, {nullable:false})
    update!: UniformOwnerUpdateWithoutClubInput;

    @Field(() => UniformOwnerCreateWithoutClubInput, {nullable:false})
    create!: UniformOwnerCreateWithoutClubInput;
}
