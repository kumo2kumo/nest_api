import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutEventFeesInput } from './user-update-without-event-fees.input';
import { UserCreateWithoutEventFeesInput } from './user-create-without-event-fees.input';

@InputType()
export class UserUpsertWithoutEventFeesInput {

    @Field(() => UserUpdateWithoutEventFeesInput, {nullable:false})
    update!: UserUpdateWithoutEventFeesInput;

    @Field(() => UserCreateWithoutEventFeesInput, {nullable:false})
    create!: UserCreateWithoutEventFeesInput;
}
