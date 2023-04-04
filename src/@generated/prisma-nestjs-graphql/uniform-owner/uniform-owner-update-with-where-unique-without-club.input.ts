import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UniformOwnerWhereUniqueInput } from './uniform-owner-where-unique.input';
import { UniformOwnerUpdateWithoutClubInput } from './uniform-owner-update-without-club.input';

@InputType()
export class UniformOwnerUpdateWithWhereUniqueWithoutClubInput {

    @Field(() => UniformOwnerWhereUniqueInput, {nullable:false})
    where!: UniformOwnerWhereUniqueInput;

    @Field(() => UniformOwnerUpdateWithoutClubInput, {nullable:false})
    data!: UniformOwnerUpdateWithoutClubInput;
}
