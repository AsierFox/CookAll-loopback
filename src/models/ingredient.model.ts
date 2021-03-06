import { Entity, model, property } from '@loopback/repository';

@model({
  settings: { idInjection: false, mysql: { schema: 'cookall', table: 'ingredient' } }
})
export class Ingredient extends Entity {
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
    mysql: { "columnName": "quantity", "dataType": "varchar", "dataLength": 50, "dataPrecision": null, "dataScale": null, "nullable": "N" },
  })
  quantity: String;

  @property({
    type: String,
    required: true,
    length: 150,
    mysql: { "columnName": "name", "dataType": "varchar", "dataLength": 150, "dataPrecision": null, "dataScale": null, "nullable": "N" },
  })
  name: String;

  @property({
    type: Number,
    required: false,
    precision: 3,
    scale: 0,
    mysql: { "columnName": "optional", "dataType": "tinyint", "dataLength": null, "dataPrecision": 3, "dataScale": 0, "nullable": "Y" },
  })
  optional?: Number;

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

  constructor(data?: Partial<Ingredient>) {
    super(data);
  }
}

export interface IngredientRelations {
  // describe navigational properties here
}

export type IngredientWithRelations = Ingredient & IngredientRelations;
