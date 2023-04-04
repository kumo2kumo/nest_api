import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReportMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    text?: true;

    @Field(() => Boolean, {nullable:true})
    date?: true;

    @Field(() => Boolean, {nullable:true})
    time?: true;

    @Field(() => Boolean, {nullable:true})
    opponent?: true;

    @Field(() => Boolean, {nullable:true})
    myScore?: true;

    @Field(() => Boolean, {nullable:true})
    opponentScore?: true;

    @Field(() => Boolean, {nullable:true})
    category?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    clubId?: true;

    @Field(() => Boolean, {nullable:true})
    uploadUserId?: true;
}
