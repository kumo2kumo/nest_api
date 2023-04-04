import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserEmailClubIdCompoundUniqueInput } from './user-email-club-id-compound-unique.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => UserEmailClubIdCompoundUniqueInput, {nullable:true})
    email_clubId?: UserEmailClubIdCompoundUniqueInput;
}
