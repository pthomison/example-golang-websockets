run: pack backend

backend:
	go run .

serve:
	npx webpack serve \
		--compress \
		--static-serve-index \
		--static-directory ./docs \
		--no-hot \
		--no-client-overlay-warnings \
		--client-progress

.image:
	docker build . -t webpack -f webpack.dockerfile
	touch .image

pack:
	npx webpack

lint:
	npx eslint ./src/

node_modules:
	npm install

clean-all: clean clean-deps clean-images

clean:
	rm -rf ./web/ || true

clean-deps:
	rm -rf ./node_modules/ || true

clean-images:
	docker rmi webpack || true
	rm ./.image || true