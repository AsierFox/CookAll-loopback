import { Entity, model, property } from '@loopback/repository';

@model({
  settings: { idInjection: false, mysql: { schema: 'cookall', table: 'chatmessage' } }
})
export class Chatmessage extends Entity {
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
    length: 100,
    mysql: { "columnName": "message", "dataType": "varchar", "dataLength": 100, "dataPrecision": null, "dataScale": null, "nullable": "N" },
  })
  message: String;

  @property({
    type: Number,
    required: false,
    precision: 3,
    scale: 0,
    mysql: { "columnName": "unread", "dataType": "tinyint", "dataLength": null, "dataPrecision": 3, "dataScale": 0, "nullable": "Y" },
  })
  unread?: Number;

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
    mysql: { "columnName": "messageId", "dataType": "int", "dataLength": null, "dataPrecision": 10, "dataScale": 0, "nullable": "Y" },
  })
  messageid?: Number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Chatmessage>) {
    super(data);
  }
}

export interface ChatmessageRelations {
  // describe navigational properties here
}

export type ChatmessageWithRelations = Chatmessage & ChatmessageRelations;
