import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReportAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    myScore?: true;

    @Field(() => Boolean, {nullable:true})
    opponentScore?: true;

    @Field(() => Boolean, {nullable:true})
    category?: true;

    @Field(() => Boolean, {nullable:true})
    clubId?: true;

    @Field(() => Boolean, {nullable:true})
    uploadUserId?: true;
}
