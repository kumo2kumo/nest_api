import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventFeeUpdateManyMutationInput } from './event-fee-update-many-mutation.input';
import { EventFeeWhereInput } from './event-fee-where.input';

@ArgsType()
export class UpdateManyEventFeeArgs {

    @Field(() => EventFeeUpdateManyMutationInput, {nullable:false})
    data!: EventFeeUpdateManyMutationInput;

    @Field(() => EventFeeWhereInput, {nullable:true})
    where?: EventFeeWhereInput;
}
