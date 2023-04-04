import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledWhereUniqueInput } from './sled-where-unique.input';
import { SledUpdateWithoutClubInput } from './sled-update-without-club.input';
import { SledCreateWithoutClubInput } from './sled-create-without-club.input';

@InputType()
export class SledUpsertWithWhereUniqueWithoutClubInput {

    @Field(() => SledWhereUniqueInput, {nullable:false})
    where!: SledWhereUniqueInput;

    @Field(() => SledUpdateWithoutClubInput, {nullable:false})
    update!: SledUpdateWithoutClubInput;

    @Field(() => SledCreateWithoutClubInput, {nullable:false})
    create!: SledCreateWithoutClubInput;
}
