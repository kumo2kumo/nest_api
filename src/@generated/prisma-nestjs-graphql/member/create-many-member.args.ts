import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberCreateManyInput } from './member-create-many.input';

@ArgsType()
export class CreateManyMemberArgs {

    @Field(() => [MemberCreateManyInput], {nullable:false})
    data!: Array<MemberCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
