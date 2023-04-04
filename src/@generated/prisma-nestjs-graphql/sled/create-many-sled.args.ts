import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SledCreateManyInput } from './sled-create-many.input';

@ArgsType()
export class CreateManySledArgs {

    @Field(() => [SledCreateManyInput], {nullable:false})
    data!: Array<SledCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
