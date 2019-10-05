import { Entity, model, property } from '@loopback/repository';

@model({
  settings: { idInjection: false, mysql: { schema: 'cookall', table: 'recipestep' } }
})
export class Recipestep extends Entity {
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
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    mysql: { "columnName": "order", "dataType": "int", "dataLength": null, "dataPrecision": 10, "dataScale": 0, "nullable": "N" },
  })
  order: Number;

  @property({
    type: String,
    required: true,
    length: 512,
    mysql: { "columnName": "step", "dataType": "varchar", "dataLength": 512, "dataPrecision": null, "dataScale": null, "nullable": "N" },
  })
  step: String;

  @property({
    type: Number,
    required: false,
    precision: 10,
    scale: 0,
    mysql: { "columnName": "recipeId", "dataType": "int", "dataLength": null, "dataPrecision": 10, "dataScale": 0, "nullable": "Y" },
  })
  recipeid?: Number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Recipestep>) {
    super(data);
  }
}

export interface RecipestepRelations {
  // describe navigational properties here
}

export type RecipestepWithRelations = Recipestep & RecipestepRelations;
