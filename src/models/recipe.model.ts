import { Entity, model, property } from '@loopback/repository';

@model({ settings: { idInjection: false, mysql: { schema: 'cookall', table: 'recipe' } } })
export class Recipe extends Entity {
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
    mysql: { "columnName": "title", "dataType": "varchar", "dataLength": 150, "dataPrecision": null, "dataScale": null, "nullable": "N" },
  })
  title: String;

  @property({
    type: String,
    required: true,
    length: 512,
    mysql: { "columnName": "description", "dataType": "varchar", "dataLength": 512, "dataPrecision": null, "dataScale": null, "nullable": "N" },
  })
  description: String;

  @property({
    type: String,
    required: true,
    length: 10,
    mysql: { "columnName": "cookingTime", "dataType": "varchar", "dataLength": 10, "dataPrecision": null, "dataScale": null, "nullable": "N" },
  })
  cookingtime: String;

  @property({
    type: Number,
    required: false,
    precision: 6,
    scale: 2,
    mysql: { "columnName": "calories", "dataType": "float", "dataLength": null, "dataPrecision": 6, "dataScale": 2, "nullable": "Y" },
  })
  calories?: Number;

  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    mysql: { "columnName": "likes", "dataType": "int", "dataLength": null, "dataPrecision": 10, "dataScale": 0, "nullable": "N" },
  })
  likes: Number;

  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    mysql: { "columnName": "favorites", "dataType": "int", "dataLength": null, "dataPrecision": 10, "dataScale": 0, "nullable": "N" },
  })
  favorites: Number;

  @property({
    type: Date,
    required: true,
    mysql: { "columnName": "createdAt", "dataType": "datetime", "dataLength": null, "dataPrecision": null, "dataScale": null, "nullable": "N" },
  })
  createdat: Date;

  @property({
    type: Date,
    required: true,
    mysql: { "columnName": "updatedAt", "dataType": "datetime", "dataLength": null, "dataPrecision": null, "dataScale": null, "nullable": "N" },
  })
  updatedat: Date;

  @property({
    type: Date,
    required: false,
    mysql: { "columnName": "deletedAt", "dataType": "datetime", "dataLength": null, "dataPrecision": null, "dataScale": null, "nullable": "Y" },
  })
  deletedat?: Date;

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

  constructor(data?: Partial<Recipe>) {
    super(data);
  }
}

export interface RecipeRelations {
  // describe navigational properties here
}

export type RecipeWithRelations = Recipe & RecipeRelations;
