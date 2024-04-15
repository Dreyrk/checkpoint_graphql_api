import { DataSource } from "typeorm";
import { Flag } from "./entities/flag";

export default new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "database",
  port: parseInt(process.env.DB_PORT || "0") || 5432,
  username: process.env.DB_USER || "dev_user",
  password: process.env.DB_PASS || "password",
  database: process.env.DB_NAME || "checkpoint",
  entities: [Flag],
  synchronize: true,
  logging: true,
});
