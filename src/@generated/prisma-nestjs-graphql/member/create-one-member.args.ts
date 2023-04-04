import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberCreateInput } from './member-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMemberArgs {

    @Field(() => MemberCreateInput, {nullable:false})
    @ValidateNested()
    @Type(() => MemberCreateInput)
    data!: MemberCreateInput;
}
