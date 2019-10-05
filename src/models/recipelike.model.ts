import { Entity, model, property } from '@loopback/repository';

@model({
  settings: { idInjection: false, mysql: { schema: 'cookall', table: 'recipelike' } }
})
export class Recipelike extends Entity {
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

  constructor(data?: Partial<Recipelike>) {
    super(data);
  }
}

export interface RecipelikeRelations {
  // describe navigational properties here
}

export type RecipelikeWithRelations = Recipelike & RecipelikeRelations;
