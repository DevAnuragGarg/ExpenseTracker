import Realm from 'realm';

export class Expense extends Realm.Object {
  id!: Realm.BSON.ObjectId;
  category!: string;
  description!: string;
  amount!: number;
  date!: Date;

  static schema: Realm.ObjectSchema = {
    name: 'Expense',
    primaryKey: 'id',
    properties: {
      id: 'objectId',
      category: 'string',
      description: 'string',
      amount: 'double',
      date: 'date',
    },
  };
}
