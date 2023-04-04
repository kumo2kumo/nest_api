import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolOwnerCreateManyUserInput } from './tool-owner-create-many-user.input';

@InputType()
export class ToolOwnerCreateManyUserInputEnvelope {

    @Field(() => [ToolOwnerCreateManyUserInput], {nullable:false})
    data!: Array<ToolOwnerCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
