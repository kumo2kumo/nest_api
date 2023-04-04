import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubCreateWithoutEventFeesInput } from './club-create-without-event-fees.input';

@InputType()
export class ClubCreateOrConnectWithoutEventFeesInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    where!: ClubWhereUniqueInput;

    @Field(() => ClubCreateWithoutEventFeesInput, {nullable:false})
    create!: ClubCreateWithoutEventFeesInput;
}
