import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolOwnerCreateManyToolInput } from './tool-owner-create-many-tool.input';

@InputType()
export class ToolOwnerCreateManyToolInputEnvelope {

    @Field(() => [ToolOwnerCreateManyToolInput], {nullable:false})
    data!: Array<ToolOwnerCreateManyToolInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
