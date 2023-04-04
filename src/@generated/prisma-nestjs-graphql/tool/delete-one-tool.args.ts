import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolWhereUniqueInput } from './tool-where-unique.input';

@ArgsType()
export class DeleteOneToolArgs {

    @Field(() => ToolWhereUniqueInput, {nullable:false})
    where!: ToolWhereUniqueInput;
}
