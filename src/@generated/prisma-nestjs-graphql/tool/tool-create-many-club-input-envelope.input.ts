import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToolCreateManyClubInput } from './tool-create-many-club.input';

@InputType()
export class ToolCreateManyClubInputEnvelope {

    @Field(() => [ToolCreateManyClubInput], {nullable:false})
    data!: Array<ToolCreateManyClubInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
