import { Entity, model, property } from '@loopback/repository';

@model({ settings: { idInjection: false, mysql: { schema: 'cookall', table: 'feedback' } } })
export class Feedback extends Entity {
  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: { "columnName": "id", "dataType": "int", "dataLength": null, "dataPrecision": 10, "dataScale": 0, "nullable": "N" },
  })
  id: Number;

  @property({
    type: String,
    required: true,
    length: 150,
    mysql: { "columnName": "subject", "dataType": "varchar", "dataLength": 150, "dataPrecision": null, "dataScale": null, "nullable": "N" },
  })
  subject: String;

  @property({
    type: String,
    required: true,
    length: 512,
    mysql: { "columnName": "description", "dataType": "varchar", "dataLength": 512, "dataPrecision": null, "dataScale": null, "nullable": "N" },
  })
  description: String;

  @property({
    type: Date,
    required: true,
    mysql: { "columnName": "createdAt", "dataType": "datetime", "dataLength": null, "dataPrecision": null, "dataScale": null, "nullable": "N" },
  })
  createdat: Date;

  @property({
    type: Number,
    required: false,
    precision: 10,
    scale: 0,
    mysql: { "columnName": "profileId", "dataType": "int", "dataLength": null, "dataPrecision": 10, "dataScale": 0, "nullable": "Y" },
  })
  profileid?: Number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Feedback>) {
    super(data);
  }
}

export interface FeedbackRelations {
  // describe navigational properties here
}

export type FeedbackWithRelations = Feedback & FeedbackRelations;
