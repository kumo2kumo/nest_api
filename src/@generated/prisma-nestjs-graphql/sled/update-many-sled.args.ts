import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SledUpdateManyMutationInput } from './sled-update-many-mutation.input';
import { SledWhereInput } from './sled-where.input';

@ArgsType()
export class UpdateManySledArgs {

    @Field(() => SledUpdateManyMutationInput, {nullable:false})
    data!: SledUpdateManyMutationInput;

    @Field(() => SledWhereInput, {nullable:true})
    where?: SledWhereInput;
}
