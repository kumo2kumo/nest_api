import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolOwnerWhereInput } from './tool-owner-where.input';
import { ToolOwnerOrderByWithRelationInput } from './tool-owner-order-by-with-relation.input';
import { ToolOwnerWhereUniqueInput } from './tool-owner-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ToolOwnerScalarFieldEnum } from './tool-owner-scalar-field.enum';

@ArgsType()
export class FindFirstToolOwnerArgs {

    @Field(() => ToolOwnerWhereInput, {nullable:true})
    where?: ToolOwnerWhereInput;

    @Field(() => [ToolOwnerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ToolOwnerOrderByWithRelationInput>;

    @Field(() => ToolOwnerWhereUniqueInput, {nullable:true})
    cursor?: ToolOwnerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ToolOwnerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ToolOwnerScalarFieldEnum>;
}
