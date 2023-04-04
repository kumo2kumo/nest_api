import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutReportsInput } from './club-create-without-reports.input';
import { ClubCreateOrConnectWithoutReportsInput } from './club-create-or-connect-without-reports.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@InputType()
export class ClubCreateNestedOneWithoutReportsInput {

    @Field(() => ClubCreateWithoutReportsInput, {nullable:true})
    create?: ClubCreateWithoutReportsInput;

    @Field(() => ClubCreateOrConnectWithoutReportsInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutReportsInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;
}
