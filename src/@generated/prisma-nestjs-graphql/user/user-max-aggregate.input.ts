import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @Field(() => Boolean, {nullable:true})
    role?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    clubId?: true;

    @Field(() => Boolean, {nullable:true})
    score?: true;

    @Field(() => Boolean, {nullable:true})
    assist?: true;

    @Field(() => Boolean, {nullable:true})
    countTool?: true;

    @Field(() => Boolean, {nullable:true})
    absence?: true;

    @Field(() => Boolean, {nullable:true})
    lateness?: true;

    @Field(() => Boolean, {nullable:true})
    contactLate?: true;

    @Field(() => Boolean, {nullable:true})
    countPicture?: true;

    @Field(() => Boolean, {nullable:true})
    countReport?: true;

    @Field(() => Boolean, {nullable:true})
    commentLate?: true;

    @Field(() => Boolean, {nullable:true})
    insurance?: true;
}
