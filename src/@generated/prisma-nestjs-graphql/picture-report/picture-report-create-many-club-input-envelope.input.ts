import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportCreateManyClubInput } from './picture-report-create-many-club.input';

@InputType()
export class PictureReportCreateManyClubInputEnvelope {

    @Field(() => [PictureReportCreateManyClubInput], {nullable:false})
    data!: Array<PictureReportCreateManyClubInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
