import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateManyClubInput } from './report-create-many-club.input';

@InputType()
export class ReportCreateManyClubInputEnvelope {

    @Field(() => [ReportCreateManyClubInput], {nullable:false})
    data!: Array<ReportCreateManyClubInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
