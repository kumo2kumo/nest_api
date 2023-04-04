import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolWhereInput } from './tool-where.input';

@ArgsType()
export class DeleteManyToolArgs {

    @Field(() => ToolWhereInput, {nullable:true})
    where?: ToolWhereInput;
}
