import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureReportWhereInput } from './picture-report-where.input';
import { PictureReportOrderByWithRelationInput } from './picture-report-order-by-with-relation.input';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PictureReportScalarFieldEnum } from './picture-report-scalar-field.enum';

@ArgsType()
export class FindManyPictureReportArgs {

    @Field(() => PictureReportWhereInput, {nullable:true})
    where?: PictureReportWhereInput;

    @Field(() => [PictureReportOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PictureReportOrderByWithRelationInput>;

    @Field(() => PictureReportWhereUniqueInput, {nullable:true})
    cursor?: PictureReportWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PictureReportScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PictureReportScalarFieldEnum>;
}
