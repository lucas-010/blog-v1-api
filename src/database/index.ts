import { knex } from "knex";
import "dotenv/config";
import { getEnvironment } from "./getEnvironment";

export const database = knex(getEnvironment());
