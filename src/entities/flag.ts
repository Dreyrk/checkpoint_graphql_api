import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, Int, InputType } from "type-graphql";

@Entity()
@ObjectType()
export class Flag extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true, type: "text" })
  @Field()
  code: string;

  @Column()
  @Field()
  emoji: string;
}

@InputType()
export class NewFlagInput {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  emoji: string;
}
