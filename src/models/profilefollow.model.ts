import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'cookall', table: 'profilefollow'}}
})
export class Profilefollow extends Entity {
  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {"columnName":"id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  id: Number;

  @property({
    type: Date,
    required: true,
    mysql: {"columnName":"createdAt","dataType":"datetime","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  createdat: Date;

  @property({
    type: Number,
    required: false,
    precision: 10,
    scale: 0,
    mysql: {"columnName":"profileFollowerId","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"Y"},
  })
  profilefollowerid?: Number;

  @property({
    type: Number,
    required: false,
    precision: 10,
    scale: 0,
    mysql: {"columnName":"profileFollowedId","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"Y"},
  })
  profilefollowedid?: Number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Profilefollow>) {
    super(data);
  }
}

export interface ProfilefollowRelations {
  // describe navigational properties here
}

export type ProfilefollowWithRelations = Profilefollow & ProfilefollowRelations;
