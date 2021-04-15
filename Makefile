install:
	npm ci

run:
	node bin/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

giting:
	git add .
	git commit -m 'newstage'
	git push origin