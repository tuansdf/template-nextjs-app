import { db } from "@/server/databases/db";
import { TempTable } from "@/server/databases/tables/temp.table";

class TempService {
  public async findAll() {
    return db.select().from(TempTable);
  }
}

export const tempService = new TempService();
