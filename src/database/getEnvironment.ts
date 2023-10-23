import { development } from "./config/environments/development";
import { test } from "./config/environments/test";
import { production } from "./config/environments/production";

const environment = process.env.NODE_ENV;

export function getEnvironment() {
	if (environment === "production") return production;
	else if (environment === "test") return test;
	return development;
}
