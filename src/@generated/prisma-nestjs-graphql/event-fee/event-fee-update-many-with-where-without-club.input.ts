import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventFeeScalarWhereInput } from './event-fee-scalar-where.input';
import { EventFeeUpdateManyMutationInput } from './event-fee-update-many-mutation.input';

@InputType()
export class EventFeeUpdateManyWithWhereWithoutClubInput {

    @Field(() => EventFeeScalarWhereInput, {nullable:false})
    where!: EventFeeScalarWhereInput;

    @Field(() => EventFeeUpdateManyMutationInput, {nullable:false})
    data!: EventFeeUpdateManyMutationInput;
}
