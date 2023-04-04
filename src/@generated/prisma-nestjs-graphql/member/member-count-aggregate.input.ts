import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MemberCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    englishName?: true;

    @Field(() => Boolean, {nullable:true})
    number?: true;

    @Field(() => Boolean, {nullable:true})
    position?: true;

    @Field(() => Boolean, {nullable:true})
    birthday?: true;

    @Field(() => Boolean, {nullable:true})
    height?: true;

    @Field(() => Boolean, {nullable:true})
    weight?: true;

    @Field(() => Boolean, {nullable:true})
    strongerSide?: true;

    @Field(() => Boolean, {nullable:true})
    from?: true;

    @Field(() => Boolean, {nullable:true})
    occupation?: true;

    @Field(() => Boolean, {nullable:true})
    hobby?: true;

    @Field(() => Boolean, {nullable:true})
    skill?: true;

    @Field(() => Boolean, {nullable:true})
    startBelong?: true;

    @Field(() => Boolean, {nullable:true})
    startSport?: true;

    @Field(() => Boolean, {nullable:true})
    chance?: true;

    @Field(() => Boolean, {nullable:true})
    dream?: true;

    @Field(() => Boolean, {nullable:true})
    goal?: true;

    @Field(() => Boolean, {nullable:true})
    image?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    clubId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
