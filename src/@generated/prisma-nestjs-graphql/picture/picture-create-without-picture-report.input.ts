import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PictureCreateWithoutPictureReportInput {

    @Field(() => String, {nullable:false})
    base64!: string;

    @Field(() => Boolean, {nullable:false})
    mainFlag!: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
