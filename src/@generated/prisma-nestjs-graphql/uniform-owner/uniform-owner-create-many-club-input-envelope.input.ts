import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UniformOwnerCreateManyClubInput } from './uniform-owner-create-many-club.input';

@InputType()
export class UniformOwnerCreateManyClubInputEnvelope {

    @Field(() => [UniformOwnerCreateManyClubInput], {nullable:false})
    data!: Array<UniformOwnerCreateManyClubInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
