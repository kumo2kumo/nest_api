import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberCreateManyClubInput } from './member-create-many-club.input';

@InputType()
export class MemberCreateManyClubInputEnvelope {

    @Field(() => [MemberCreateManyClubInput], {nullable:false})
    data!: Array<MemberCreateManyClubInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
