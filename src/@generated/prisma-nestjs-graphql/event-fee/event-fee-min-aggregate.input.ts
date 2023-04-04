import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventFeeMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    january?: true;

    @Field(() => Boolean, {nullable:true})
    february?: true;

    @Field(() => Boolean, {nullable:true})
    march?: true;

    @Field(() => Boolean, {nullable:true})
    april?: true;

    @Field(() => Boolean, {nullable:true})
    may?: true;

    @Field(() => Boolean, {nullable:true})
    june?: true;

    @Field(() => Boolean, {nullable:true})
    july?: true;

    @Field(() => Boolean, {nullable:true})
    august?: true;

    @Field(() => Boolean, {nullable:true})
    september?: true;

    @Field(() => Boolean, {nullable:true})
    october?: true;

    @Field(() => Boolean, {nullable:true})
    november?: true;

    @Field(() => Boolean, {nullable:true})
    december?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    clubId?: true;
}
