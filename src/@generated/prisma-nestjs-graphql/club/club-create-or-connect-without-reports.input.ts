import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubCreateWithoutReportsInput } from './club-create-without-reports.input';

@InputType()
export class ClubCreateOrConnectWithoutReportsInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    where!: ClubWhereUniqueInput;

    @Field(() => ClubCreateWithoutReportsInput, {nullable:false})
    create!: ClubCreateWithoutReportsInput;
}
