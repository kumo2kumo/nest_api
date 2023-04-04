import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledScalarWhereInput } from './sled-scalar-where.input';
import { SledUpdateManyMutationInput } from './sled-update-many-mutation.input';

@InputType()
export class SledUpdateManyWithWhereWithoutClubInput {

    @Field(() => SledScalarWhereInput, {nullable:false})
    where!: SledScalarWhereInput;

    @Field(() => SledUpdateManyMutationInput, {nullable:false})
    data!: SledUpdateManyMutationInput;
}
