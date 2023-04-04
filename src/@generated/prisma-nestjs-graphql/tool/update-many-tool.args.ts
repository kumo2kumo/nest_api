import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolUpdateManyMutationInput } from './tool-update-many-mutation.input';
import { ToolWhereInput } from './tool-where.input';

@ArgsType()
export class UpdateManyToolArgs {

    @Field(() => ToolUpdateManyMutationInput, {nullable:false})
    data!: ToolUpdateManyMutationInput;

    @Field(() => ToolWhereInput, {nullable:true})
    where?: ToolWhereInput;
}
