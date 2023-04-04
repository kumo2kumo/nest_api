import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolOwnerUpdateManyMutationInput } from './tool-owner-update-many-mutation.input';
import { ToolOwnerWhereInput } from './tool-owner-where.input';

@ArgsType()
export class UpdateManyToolOwnerArgs {

    @Field(() => ToolOwnerUpdateManyMutationInput, {nullable:false})
    data!: ToolOwnerUpdateManyMutationInput;

    @Field(() => ToolOwnerWhereInput, {nullable:true})
    where?: ToolOwnerWhereInput;
}
