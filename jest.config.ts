import type { Config } from "jest";

const config: Config = {
	clearMocks: true,
	coverageProvider: "v8",
	setupFilesAfterEnv: ["./jest.setup.ts"],
	testMatch: ["<rootDir>/src/**/__tests__/*.test.ts"],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
};

export default config;
