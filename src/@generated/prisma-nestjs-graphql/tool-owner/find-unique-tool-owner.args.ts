import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolOwnerWhereUniqueInput } from './tool-owner-where-unique.input';

@ArgsType()
export class FindUniqueToolOwnerArgs {

    @Field(() => ToolOwnerWhereUniqueInput, {nullable:false})
    where!: ToolOwnerWhereUniqueInput;
}
