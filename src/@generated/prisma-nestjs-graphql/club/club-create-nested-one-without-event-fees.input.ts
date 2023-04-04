import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutEventFeesInput } from './club-create-without-event-fees.input';
import { ClubCreateOrConnectWithoutEventFeesInput } from './club-create-or-connect-without-event-fees.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@InputType()
export class ClubCreateNestedOneWithoutEventFeesInput {

    @Field(() => ClubCreateWithoutEventFeesInput, {nullable:true})
    create?: ClubCreateWithoutEventFeesInput;

    @Field(() => ClubCreateOrConnectWithoutEventFeesInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutEventFeesInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;
}
