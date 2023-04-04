import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyClubInput } from './user-create-many-club.input';

@InputType()
export class UserCreateManyClubInputEnvelope {

    @Field(() => [UserCreateManyClubInput], {nullable:false})
    data!: Array<UserCreateManyClubInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
