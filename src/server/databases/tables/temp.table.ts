import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const TempTable = sqliteTable(
  "_temp",
  {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    code: text("code", { mode: "text" }),
  },
  (table) => ({
    codeIndex: index("temp_code_index").on(table.code),
  }),
);
