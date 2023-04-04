import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCreateManyClubInput } from './sled-create-many-club.input';

@InputType()
export class SledCreateManyClubInputEnvelope {

    @Field(() => [SledCreateManyClubInput], {nullable:false})
    data!: Array<SledCreateManyClubInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
