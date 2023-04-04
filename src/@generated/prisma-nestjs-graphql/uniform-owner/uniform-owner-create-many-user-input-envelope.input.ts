import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UniformOwnerCreateManyUserInput } from './uniform-owner-create-many-user.input';

@InputType()
export class UniformOwnerCreateManyUserInputEnvelope {

    @Field(() => [UniformOwnerCreateManyUserInput], {nullable:false})
    data!: Array<UniformOwnerCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
