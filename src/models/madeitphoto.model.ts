import { Entity, model, property } from '@loopback/repository';

@model({
  settings: { idInjection: false, mysql: { schema: 'cookall', table: 'madeitphoto' } }
})
export class Madeitphoto extends Entity {
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
    length: 50,
    mysql: { "columnName": "path", "dataType": "varchar", "dataLength": 50, "dataPrecision": null, "dataScale": null, "nullable": "N" },
  })
  path: String;

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
    mysql: { "columnName": "madeItId", "dataType": "int", "dataLength": null, "dataPrecision": 10, "dataScale": 0, "nullable": "Y" },
  })
  madeitid?: Number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Madeitphoto>) {
    super(data);
  }
}

export interface MadeitphotoRelations {
  // describe navigational properties here
}

export type MadeitphotoWithRelations = Madeitphoto & MadeitphotoRelations;
