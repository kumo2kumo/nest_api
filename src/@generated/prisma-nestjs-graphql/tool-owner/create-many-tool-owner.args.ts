import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolOwnerCreateManyInput } from './tool-owner-create-many.input';

@ArgsType()
export class CreateManyToolOwnerArgs {

    @Field(() => [ToolOwnerCreateManyInput], {nullable:false})
    data!: Array<ToolOwnerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
