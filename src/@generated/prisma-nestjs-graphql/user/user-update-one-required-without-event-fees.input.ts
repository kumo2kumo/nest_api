import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEventFeesInput } from './user-create-without-event-fees.input';
import { UserCreateOrConnectWithoutEventFeesInput } from './user-create-or-connect-without-event-fees.input';
import { UserUpsertWithoutEventFeesInput } from './user-upsert-without-event-fees.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutEventFeesInput } from './user-update-without-event-fees.input';

@InputType()
export class UserUpdateOneRequiredWithoutEventFeesInput {

    @Field(() => UserCreateWithoutEventFeesInput, {nullable:true})
    create?: UserCreateWithoutEventFeesInput;

    @Field(() => UserCreateOrConnectWithoutEventFeesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutEventFeesInput;

    @Field(() => UserUpsertWithoutEventFeesInput, {nullable:true})
    upsert?: UserUpsertWithoutEventFeesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutEventFeesInput, {nullable:true})
    update?: UserUpdateWithoutEventFeesInput;
}
