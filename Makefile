install:
	npm install

day-1:
	npx babel-node --extensions ".ts" -- src/day-1/index.ts

test:
	npm test

.PHONY: test
