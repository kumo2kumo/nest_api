import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutEventFeesInput } from './user-create-without-event-fees.input';

@InputType()
export class UserCreateOrConnectWithoutEventFeesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutEventFeesInput, {nullable:false})
    create!: UserCreateWithoutEventFeesInput;
}
