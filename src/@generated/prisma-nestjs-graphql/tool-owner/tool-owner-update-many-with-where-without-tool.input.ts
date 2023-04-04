import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolOwnerScalarWhereInput } from './tool-owner-scalar-where.input';
import { ToolOwnerUpdateManyMutationInput } from './tool-owner-update-many-mutation.input';

@InputType()
export class ToolOwnerUpdateManyWithWhereWithoutToolInput {

    @Field(() => ToolOwnerScalarWhereInput, {nullable:false})
    where!: ToolOwnerScalarWhereInput;

    @Field(() => ToolOwnerUpdateManyMutationInput, {nullable:false})
    data!: ToolOwnerUpdateManyMutationInput;
}
