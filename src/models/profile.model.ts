import { Entity, model, property } from '@loopback/repository';

@model({ settings: { idInjection: false, mysql: { schema: 'cookall', table: 'profile' } } })
export class Profile extends Entity {
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
    mysql: { "columnName": "name", "dataType": "varchar", "dataLength": 50, "dataPrecision": null, "dataScale": null, "nullable": "N" },
  })
  name: String;

  @property({
    type: String,
    required: true,
    length: 100,
    mysql: { "columnName": "surnames", "dataType": "varchar", "dataLength": 100, "dataPrecision": null, "dataScale": null, "nullable": "N" },
  })
  surnames: String;

  @property({
    type: String,
    required: false,
    length: 1,
    mysql: { "columnName": "gender", "dataType": "varchar", "dataLength": 1, "dataPrecision": null, "dataScale": null, "nullable": "Y" },
  })
  gender?: String;

  @property({
    type: String,
    required: false,
    length: 80,
    mysql: { "columnName": "avatar", "dataType": "varchar", "dataLength": 80, "dataPrecision": null, "dataScale": null, "nullable": "Y" },
  })
  avatar?: String;

  @property({
    type: Date,
    required: true,
    mysql: { "columnName": "createdAt", "dataType": "datetime", "dataLength": null, "dataPrecision": null, "dataScale": null, "nullable": "N" },
  })
  createdat: Date;

  @property({
    type: Date,
    required: false,
    mysql: { "columnName": "deletedAt", "dataType": "datetime", "dataLength": null, "dataPrecision": null, "dataScale": null, "nullable": "Y" },
  })
  deletedat?: Date;

  @property({
    type: String,
    required: false,
    length: 512,
    mysql: { "columnName": "realm", "dataType": "varchar", "dataLength": 512, "dataPrecision": null, "dataScale": null, "nullable": "Y" },
  })
  realm?: String;

  @property({
    type: String,
    required: false,
    length: 512,
    mysql: { "columnName": "username", "dataType": "varchar", "dataLength": 512, "dataPrecision": null, "dataScale": null, "nullable": "Y" },
  })
  username?: String;

  @property({
    type: String,
    required: true,
    length: 512,
    mysql: { "columnName": "password", "dataType": "varchar", "dataLength": 512, "dataPrecision": null, "dataScale": null, "nullable": "N" },
  })
  password: String;

  @property({
    type: String,
    required: true,
    length: 512,
    mysql: { "columnName": "email", "dataType": "varchar", "dataLength": 512, "dataPrecision": null, "dataScale": null, "nullable": "N" },
  })
  email: String;

  @property({
    type: Number,
    required: false,
    precision: 3,
    scale: 0,
    mysql: { "columnName": "emailVerified", "dataType": "tinyint", "dataLength": null, "dataPrecision": 3, "dataScale": 0, "nullable": "Y" },
  })
  emailverified?: Number;

  @property({
    type: String,
    required: false,
    length: 512,
    mysql: { "columnName": "verificationToken", "dataType": "varchar", "dataLength": 512, "dataPrecision": null, "dataScale": null, "nullable": "Y" },
  })
  verificationtoken?: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Profile>) {
    super(data);
  }
}

export interface ProfileRelations {
  // describe navigational properties here
}

export type ProfileWithRelations = Profile & ProfileRelations;
