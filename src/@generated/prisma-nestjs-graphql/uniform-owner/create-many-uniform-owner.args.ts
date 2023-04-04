import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UniformOwnerCreateManyInput } from './uniform-owner-create-many.input';

@ArgsType()
export class CreateManyUniformOwnerArgs {

    @Field(() => [UniformOwnerCreateManyInput], {nullable:false})
    data!: Array<UniformOwnerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
