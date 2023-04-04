import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PictureReportOrderByWithRelationInput } from '../picture-report/picture-report-order-by-with-relation.input';

@InputType()
export class PictureOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    base64?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mainFlag?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PictureReportOrderByWithRelationInput, {nullable:true})
    pictureReport?: PictureReportOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    pictureReportId?: keyof typeof SortOrder;
}
