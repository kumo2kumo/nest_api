import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolCreateManyInput } from './tool-create-many.input';

@ArgsType()
export class CreateManyToolArgs {

    @Field(() => [ToolCreateManyInput], {nullable:false})
    data!: Array<ToolCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
