import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventFeeCreateInput } from './event-fee-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEventFeeArgs {

    @Field(() => EventFeeCreateInput, {nullable:false})
    @ValidateNested()
    @Type(() => EventFeeCreateInput)
    data!: EventFeeCreateInput;
}
