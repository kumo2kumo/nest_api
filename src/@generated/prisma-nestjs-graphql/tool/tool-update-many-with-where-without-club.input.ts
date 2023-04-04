import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolScalarWhereInput } from './tool-scalar-where.input';
import { ToolUpdateManyMutationInput } from './tool-update-many-mutation.input';

@InputType()
export class ToolUpdateManyWithWhereWithoutClubInput {

    @Field(() => ToolScalarWhereInput, {nullable:false})
    where!: ToolScalarWhereInput;

    @Field(() => ToolUpdateManyMutationInput, {nullable:false})
    data!: ToolUpdateManyMutationInput;
}
