// models/Expense.ts
import Realm from "realm";

export class Expense extends Realm.Object {
  id!: Realm.BSON.ObjectId;
  description!: string;
  amount!: number;
  date!: Date;

  static schema: Realm.ObjectSchema = {
    name: "Expense",
    primaryKey: "id",
    properties: {
      id: "objectId",
      description: "string",
      amount: "double",
      date: "date",
    },
  };
}
