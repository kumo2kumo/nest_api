import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEventFeesInput } from './user-create-without-event-fees.input';
import { UserCreateOrConnectWithoutEventFeesInput } from './user-create-or-connect-without-event-fees.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutEventFeesInput {

    @Field(() => UserCreateWithoutEventFeesInput, {nullable:true})
    create?: UserCreateWithoutEventFeesInput;

    @Field(() => UserCreateOrConnectWithoutEventFeesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutEventFeesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
