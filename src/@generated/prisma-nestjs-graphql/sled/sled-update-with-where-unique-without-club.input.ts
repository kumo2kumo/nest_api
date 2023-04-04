import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledWhereUniqueInput } from './sled-where-unique.input';
import { SledUpdateWithoutClubInput } from './sled-update-without-club.input';

@InputType()
export class SledUpdateWithWhereUniqueWithoutClubInput {

    @Field(() => SledWhereUniqueInput, {nullable:false})
    where!: SledWhereUniqueInput;

    @Field(() => SledUpdateWithoutClubInput, {nullable:false})
    data!: SledUpdateWithoutClubInput;
}
