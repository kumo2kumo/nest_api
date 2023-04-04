import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolOwnerWhereInput } from './tool-owner-where.input';

@ArgsType()
export class DeleteManyToolOwnerArgs {

    @Field(() => ToolOwnerWhereInput, {nullable:true})
    where?: ToolOwnerWhereInput;
}
