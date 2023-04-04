import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledWhereUniqueInput } from './sled-where-unique.input';
import { SledCreateWithoutClubInput } from './sled-create-without-club.input';

@InputType()
export class SledCreateOrConnectWithoutClubInput {

    @Field(() => SledWhereUniqueInput, {nullable:false})
    where!: SledWhereUniqueInput;

    @Field(() => SledCreateWithoutClubInput, {nullable:false})
    create!: SledCreateWithoutClubInput;
}
